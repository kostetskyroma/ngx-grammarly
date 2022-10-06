# Ngx-Grammarly

This library provide opportunity to use the Grammarly Text Editor SDK in your application, that allows you to bring real-time writing suggestions to your users. The SDK lets you easily add and configure the Grammarly Text Editor Plugin. In text fields and editors that use the plugin, your users will get Grammarly’s best-in-class writing support as they type, without needing to download Grammarly or create an account.

[![GitHub issues](https://img.shields.io/github/issues/kostetskyroma/ngx-grammarly)](https://github.com/kostetskyroma/ngx-grammarly/issues)
[![GitHub forks](https://img.shields.io/github/forks/kostetskyroma/ngx-grammarly)](https://github.com/kostetskyroma/ngx-grammarly/network)
[![GitHub stars](https://img.shields.io/github/stars/kostetskyroma/ngx-grammarly)](https://github.com/kostetskyroma/ngx-grammarly/stargazers)
[![GitHub license](https://img.shields.io/github/license/kostetskyroma/ngx-grammarly)](https://github.com/kostetskyroma/ngx-grammarly/blob/master/LICENSE)

[![Support](https://img.shields.io/badge/Support-Angular%2013%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2014%2B-blue.svg?style=flat-square)]()

## What's New

- Angular 14 support 🥳

## Compatibility

| Angular 14  | Angular 13  |
| ----------- | ----------- |
| >=`v14.0.1` | >=`v13.0.2` |

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
