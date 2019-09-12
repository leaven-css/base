# Leaven – Base
> A good starter for your styles

**WARNING: A WORK IN PROGRESS**

[![NPM Version][npm-badge]][npm-url]
[![Bundlephobia minified size][bundlephobia-min-badge]][bundlephobia-url]
[![Bundlephobia minified + gzip size][bundlephobia-minzip-badge]][bundlephobia-url]

Markup should give semantic meaning and structure but not necessarily define styles. Is an `<h2>` always that size? Does a `<button>` always look that way?

As a developer you should be in control of the styles you want for elements, especially when building components. **Leaven Base**'s goal is to reset as much browser styles as possible while still maintaining some opinionated defaults.


## Install

### As a module
```sh
# npm
npm add @leaven-css/base

# yarn
yarn add @leaven-css/base
```

### via Unpkg

- https://unpkg.com/@leaven-css/base/dist/base.css
- https://unpkg.com/@leaven-css/base/dist/base.min.css

## Browser Support
- Chrome
- Firefox
- Safari
- Edge
- Internet Explorer 11

It's recommended that you use [Autoprefixer](https://github.com/postcss/autoprefixer) as part of your build process to remove any unnecessary prefixes based on your own browser support.


## Exceptions

There are a few elements that are not fully reset: 
```html
<!-- File Input -->
<input type="file">

<!-- Range Input -->
<input type="range">

<!-- Progress -->
<progress>
```

## Setup

### Defaults

You should set root defaults for `font-size`, `min-width`, `color`, and `background-color` to better standardize things.

#### Example
```css
html {
  background-color: #fff;
  color: #333;
  min-width: 320px;
  font-size: 16px;
}
```


## Credits
A special thanks to those libraries that influenced this one:
- Eric Meyer's [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- Nicolas Gallagher's [Normalize](https://github.com/necolas/normalize.css)
- Jen Simmons's [CSS Remedy](https://github.com/mozdevs/cssremedy)

[npm-url]: https://www.npmjs.com/package/@leaven-css/base
[npm-badge]: https://badgen.net/npm/v/@leaven-css/base

[bundlephobia-min-badge]: https://badgen.net/bundlephobia/min/@leaven-css/base
[bundlephobia-minzip-badge]: https://badgen.net/bundlephobia/minzip/@leaven-css/base
[bundlephobia-url]: https://bundlephobia.com/result?p=@leaven-css/base
