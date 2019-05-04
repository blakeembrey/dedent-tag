# Dedent Tag

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> ES2015 tagged template string for removing indent from strings.

Mirrors on [`textwrap.dedent`](https://docs.python.org/3/library/textwrap.html#textwrap.dedent), but ignores interpolated values. Why? You can embed `dedent`ed strings without breaking indent calculation.

## Installation

```
npm install dedent-tag --save
```

## Usage

```ts
import dedent from "dedent-tag";

const text = dedent`
  text
  with
  multiple
    lines
`; //=> "\ntext\nwith\nmultiple\nlines\n"

// End first line with `\` to avoid empty line!
const text = dedent`\
  more
  text
`; //=> "more\ntext\n"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/dedent-tag.svg?style=flat
[npm-url]: https://npmjs.org/package/dedent-tag
[downloads-image]: https://img.shields.io/npm/dm/dedent-tag.svg?style=flat
[downloads-url]: https://npmjs.org/package/dedent-tag
[travis-image]: https://img.shields.io/travis/blakeembrey/dedent-tag.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/dedent-tag
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/dedent-tag.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/dedent-tag?branch=master
