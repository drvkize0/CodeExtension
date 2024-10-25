import * as VsCode from 'vscode';

export function activate(context: VsCode.ExtensionContext) {
    let disposable = VsCode.commands.registerCommand('extension.sayHello', () => {
        VsCode.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(disposable);
}