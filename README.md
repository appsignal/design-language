# AppSignal Design Language

## Usage

### Design Tokens

We use [Theo](https://github.com/salesforce-ux/theo) to build our design tokens into useful CSS. The tokens live in the `/tokens` directory. Design tokens should be written in JSON (JSON5-compliant syntax) and conform to [the token specification](https://github.com/salesforce-ux/theo#spec).

### Style Guide

The design tokens can generate a style guide in HTML. To build and run this:

```bash
yarn styleguide
```

## Development

### Installation

To install the dependencies:

```bash
yarn install
```

Before compiling the CSS, you must generate the variables from our design tokens:

```bash
yarn build:tokens    # generate CSS variables from design tokens
```

You can then run the following to start the CSS compiler in _watch_ mode.

```bash
yarn build:watch
```

You can also build the library without watching the directory:

```bash
yarn build
```
