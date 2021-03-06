# Full Bleed Utility

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-u-fullbleed.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-u-fullbleed)

## About

This utility class allows you to make a container take the full width of the viewport available but keep the content set to the maximum width of the grid.

As we should be relying on `vf-grid`, `embl-grid`, or a container to make sure the content is centered with a maximum width of `76.5em` we use the `::before` pseudo element to allow the background colour to 'bleed out' and fill any space avaiable.

For this to work you need to make sure that the parent element you place the class `.vf-u-fullbleed` has to have a background colour.

This can be done either by:

- using a container component that has a defined background colour.
- using a background colour utility class.

For example:
```
<section class="vf-content | embl-grid embl-grid--has-centered-content | vf-u-fullbleed | vf-u-background-color--blue">
  ...
</section>
```

### Notes:

Browsers running on Windows tend to have scrollbars always showing. There is a small bug with the `vw` unit where the calculations leading to `100vw` could create a horizontal scroll bar. To avoid this, without using JavaScript. We need to apply the CSS rule of `overflow-x: hidden;` to a parent element.

As we are making all components their own installable package we have added the required CSS to this component rather than relying on additional packages. Making use of Sass `@at-root` directive:

```
.vf-u-fullbleed {
  ...
  @at-root body {
    position: relative;
  }
}
```

This has been test with sites using VF1.x and no problems have been found. If you find an issue with this component being used alongside pages built with VF1.x please [raise an issue](https://github.com/visual-framework/vf-core/issues/new?title=BUG%3A+vf-u-bleed&assignees=sturobson).

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-u-fullbleed` with this command.

```
$ yarn add --dev @visual-framework/vf-u-fullbleed
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-u-fullbleed/index.scss";
```

_Make sure you import Sass requirements along with the modules._
