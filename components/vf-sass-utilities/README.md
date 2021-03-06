
# Sass Utilities component

<h2>This component has been <span style="color: rgb(228, 0, 70);">deprecated</span>. Please use the <a class="vf-link" href="https://www.npmjs.com/package/@visual-framework/vf-utility-classes">vf-utility-classes</a> component.</h2>

The utility classes here have been moved to the `vf-utility-classes` component.

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-utilities.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-utilities)

This is a (growing) collection of utility-case Sass.

Note that this differs from `vf-utility-classes` as these are not isolated settings (top margin, hide from display, green colour) but rather express a useful behaviour, such as showing some content exclusively for screen readers.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-sass-utilities` with this command.

```
$ yarn add --dev @visual-framework/vf-sass-utilities
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-sass-utilities/index.scss";
```

_Make sure you import Sass requirements along with the modules._
