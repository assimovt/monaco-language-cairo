# Cairo Language support for the Monaco Editor

This repository adds [Cairo Language](https://www.cairo-lang.org/) syntax highlighting to the [Monaco Editor](https://microsoft.github.io/monaco-editor/).

## How to use it

Add [monaco-language-cairo](https://www.npmjs.com/package/monaco-language-cairo) NPM package to your dependencies:

```
$ yarn add monaco-language-cairo
```

Import `registerCairoLanguageSupport` and apply to the _monaco_ instance:

```javascript
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
import { registerCairoLanguageSupport } from 'monaco-language-cairo'

// somewhere in the code
registerCairoLanguageSupport(monaco)
```

## Issues

If you find any issues with this package or want to improve language tokenization, feel free to create [a GitHub issue](https://github.com/assimovt/monaco-language-cairo/issues/new).

## License

Licensed under the [MIT](https://github.com/assimovt/monaco-language-cairo/blob/main/LICENSE.txt) License.
