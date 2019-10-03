# Using Leaven Base

## Defaults

You should set root defaults for `font-size`, `min-width`, `color`, and `background-color` to better standardize things.

```css
html {
  background-color: #fff;
  color: #333;
  min-width: 320px;
  font-size: 16px;
}
```


## Elements

### Progress

Setting the `background-color` will set the background of the progress bar, while `color` will set the current progress or value.

```css
.progress-example {
  background-color: lightpink;
  color: red;
}
```


### Range Input

Example using [PostCSS Input Range](https://github.com/jonathantneal/postcss-input-range). If you are building for IE11, make sure to add `border-width` that is half the thumb size to `::-ms-track` (or `::range-track` with [PostCSS Input Range](https://github.com/jonathantneal/postcss-input-range)) so that the thumb does not get cut off.

```css
.range-example {
  &::range-track {
    height: .1875em;
    border-width: .5em 0;
    background-color: lightpink;
  }

  &::range-thumb {
    background-color: red;
    width: 1em;
    height: 1em;
    border: 1px solid red;
    border-radius: 50%;
  }

  &::range-lower {
    height: .1875em;
    background-color: red;
  }

  &::range-upper {
    background-color: lightpink;
  }
}
```
