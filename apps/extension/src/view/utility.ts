import { Uri, Webview } from 'vscode';

const getNonce = () : string => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const getUri = ( webview: Webview, extensionUri: Uri, pathList: string[] ) : Uri => {
    return webview.asWebviewUri( Uri.joinPath( extensionUri, ...pathList ) );
}

export { getNonce, getUri };