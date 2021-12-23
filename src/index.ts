import * as MonacoEditor from 'monaco-editor-core/esm/vs/editor/editor.api'
export function registerCairoLanguageSupport(_monaco: typeof MonacoEditor) {
  const languageId = 'cairo'
  _monaco.languages.register({ id: languageId })
  _monaco.languages.setLanguageConfiguration(languageId, {
    comments: {
      lineComment: '#',
    },
    brackets: [
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
      ['%{', '%}'],
    ],
    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '%{', close: '%}' },
      { open: "'", close: "'", notIn: ['string', 'comment'] },
    ],
    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '%{', close: '%}' },
      { open: "'", close: "'" },
    ],
  })
  _monaco.languages.setMonarchTokensProvider(languageId, {
    defaultToken: '',
    tokenPostfix: '.cairo',

    brackets: [
      { token: 'delimiter.curly', open: '{', close: '}' },
      { token: 'delimiter.parenthesis', open: '(', close: ')' },
      { token: 'delimiter.square', open: '[', close: ']' },
      { token: 'delimiter.curly', open: '%{', close: '%}' },
    ],

    keywords: [
      // control
      'if',
      'else',
      'end',

      // meta
      'alloc_locals',
      'as',
      'assert',
      'cast',
      'const',
      'dw',
      'felt',
      'from',
      'func',
      'import',
      'let',
      'local',
      'member',
      'nondet',
      'return',
      'static_assert',
      'struct',
      'tempvar',
      'with_attr',
      'with',

      // register
      'ap',
      'fp',

      // opcode
      'call',
      'jmp',
      'ret',
      'abs',
      'rel',
    ],

    operators: ['=', ':', '==', '++', '+', '-', '*', '**', '/', '&', '%', '_'],

    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    numberDecimal: /[+-]?[0-9]+/,
    numberHex: /[+-]?0x[0-9a-fA-F]+/,

    // The main tokenizer for our languages
    tokenizer: {
      root: [
        // identifiers and keywords
        [
          /[a-zA-Z_]\w*/,
          {
            cases: {
              '@keywords': { token: 'keyword.$0' },
              '@default': 'identifier',
            },
          },
        ],

        // whitespace
        { include: '@whitespace' },

        // directives
        [/^%[a-zA-Z]\w*/, 'tag'],

        // delimiters and operators
        [/[{}()\[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [
          /@symbols/,
          {
            cases: {
              '@operators': 'delimiter',
              '@default': '',
            },
          },
        ],

        // numbers
        [/(@numberHex)/, 'number.hex'],
        [/(@numberDecimal)/, 'number'],

        // strings
        [/'[^']*'/, 'string'],
      ],

      whitespace: [
        [/\s+/, 'white'],
        [/(^#.*$)/, 'comment'],
      ],
    },
  })
}
