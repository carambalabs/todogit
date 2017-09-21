# Todogit
[![Build Status](https://travis-ci.org/carambalabs/todogit-desktop.svg?branch=master)](https://travis-ci.org/carambalabs/todogit-desktop)

## Setup
1. Git clone the repository `git clone git@github.com:carambalabs/todogit-desktop.git`.
2. Execute `scripts/bootstrap`.

## Commands

```bash
# Run the app locally
yarn run dev
```

## Storybook

The app includes an integration with [Storybook](https://storybook.js.org/). Storybook allows you visualize your components and work on them in a very iterative process. You can open the Storybook of Issues with:

```bash
yarn run storybook
```

## Recommended VSCode addons
Although you can use any editor, we strongly recommend Visual Studio Code. 
In case you use VSCode install the folling extensions that will make working with the project more pleasant: 

- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [Editorconfig](https://github.com/editorconfig/editorconfig-vscode)
* [Jest](https://github.com/orta/vscode-jest)
* [React Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
:bulb: *If you are using the `flow-for-vscode` plugin, make sure to disable the `flowtype-errors/show-errors` eslint rule in the `.eslintrc` by setting it to `0`*

## References
- [Webpack documentation](https://webpack.js.org/configuration/devtool/)
- [electron-react-boilerplatte](https://github.com/chentsulin/electron-react-boilerplate)
- [Storybook](https://storybook.js.org/)
- [electron-updater-example](https://github.com/iffy/electron-updater-example)
- [electron-builder](https://github.com/electron-userland/electron-builder)
- [React downshift](https://github.com/paypal/downshift)
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [awesome-react](https://github.com/enaqx/awesome-react)
- [React select](http://jedwatson.github.io/react-select/)
- [Octobox](https://octobox.io)
- [Reapop](https://github.com/LouisBarranqueiro/reapop#demo)
- [Immutable-js](https://github.com/facebook/immutable-js)
- [React icons](https://github.com/gorangajic/react-icons)
- [Awesome React components](https://github.com/brillout/awesome-react-components)
- [Blueprint documentation](http://blueprintjs.com/docs/#blueprint)

## LICENSE

```
Copyright 2017 Pedro Piñera

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
