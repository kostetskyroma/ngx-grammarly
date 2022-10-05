# Ngx-Grammarly

This library provide opportunity to use the Grammarly Text Editor SDK in your application, that allows you to bring real-time writing suggestions to your users. The SDK lets you easily add and configure the Grammarly Text Editor Plugin. In text fields and editors that use the plugin, your users will get Grammarly’s best-in-class writing support as they type, without needing to download Grammarly or create an account.

## Installation

        npm install ngx-grammarly

## Usage

The grammarly-editor-plugin can wrap the following types of elements:

    - <input type='text'>
    - <textarea>
    - elements with attribute contenteditable="true"

\*.module.ts

    import { NgxGrammarlyModule } from 'ngx-grammarly';

    ...
    imports: [ NgxGrammarlyModule.forRoot({ clientId: 'YOUR_API_KEY' }) ]
    ...

\*.component.html

    <ngx-grammarly>
        <h2>Textarea</h2>
        <textarea id="textarea" [value]="demoText.textarea" rows="10"> </textarea>
    </ngx-grammarly>

    <ngx-grammarly>
        <h2 for="input">Input</h2>
        <input type="text" id="input" [value]="demoText.input" />
    </ngx-grammarly>

    <ngx-grammarly>
        <h2>Contenteditable</h2>
        <div id="contenteditable" contentEditable="true" [innerHTML]="demoText.contenteditable"></div>
    </ngx-grammarly>

[Source](https://github.com/kostetskyroma/ngx-grammarly/tree/master/projects/ngx-grammarly)
<br>
[NPM](https://www.npmjs.com/package/ngx-grammarly)

## Publishing

After building your library with `npm run build:ngx-grammarly`, go to the dist folder `cd dist/ngx-grammarly` and run `npm publish`.

## Running unit tests

Run `ng test ngx-grammarly` to execute the unit tests via [Karma](https://karma-runner.github.io).
