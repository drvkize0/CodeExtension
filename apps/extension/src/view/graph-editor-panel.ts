import * as VsCode from 'vscode';
import { getNonce, getUri } from './utility';

class GraphEditorPanel implements VsCode.CustomTextEditorProvider {
    private static readonly viewType = 'graph-editor';
    private static readonly languageType = 'acg';

    private _panel: VsCode.WebviewPanel | undefined;
    private _extensionUri: VsCode.Uri;

    constructor(context: VsCode.ExtensionContext) {
        this._extensionUri = context.extensionUri;
    }

    public static register(context: VsCode.ExtensionContext) {
        context.subscriptions.push(VsCode.window.registerCustomEditorProvider(GraphEditorPanel.viewType, new GraphEditorPanel(context)));
        VsCode.window.showInformationMessage('Graph Editor registered');
    }

    public async resolveCustomTextEditor(document: VsCode.TextDocument, webviewPanel: VsCode.WebviewPanel, token: VsCode.CancellationToken): Promise<void> {

        this._panel = webviewPanel;
        VsCode.languages.setTextDocumentLanguage(document, GraphEditorPanel.languageType);

        webviewPanel.webview.options = {
            enableScripts: true
        };

        webviewPanel.webview.html = this._getHtml(webviewPanel.webview);
    }

    private _getHtml(webview: VsCode.Webview): string {
        const stylesUri = getUri(webview, this._extensionUri, ['assets', 'index.css']);
        const scriptUri = getUri(webview, this._extensionUri, ['assets', 'index.tsx']);
        const nonce = getNonce();

        return /*html*/ `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'nonce-${nonce}'; font-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
                    <link rel="stylesheet" type="text/css" href="${stylesUri}">
                </head>
                <body>
                    <div id="graph-editor-view"></div>
                    <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
                </body>
            </html>
        `;
    }
}