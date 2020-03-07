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

## Exceptions

Any element that has too many browser inconsistencies making it difficult to styles is not fully reset.

### Color Input
```html
<input type="color">
```
This element is **not fully reset** as:
- Firefox sets it's default width to be `64px`.
- Edge 18 and below doesn't allow for any styling.
- IE 11 defaults to a text field.

### File Input
```html
<input type="file">
```

## Time Inputs
```html
<input type="date" >
<input type="datetime-local" >
<input type="month" >
<input type="time" >
<input type="week" >
```

iOS Safari handles time based inputs in an odd way in which lack of content make them shrink. To solve this add a `min-height` and `min-weight`

```css
input[type="date"],
input[type="datetime-local"],
input[type="month"],
input[type="time"],
input[type="week"] {
  min-height: 1.375em;
  min-width: 160px;
}
```

## Elements

### Progress
```html
<progress></progress>
```

Setting the `background-color` will set the background of the progress bar, while `color` will set the current progress or value.

```css
.progress-example {
  background-color: lightpink;
  color: red;
}
```


### Range Input
```html
<input type="range">
```

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
