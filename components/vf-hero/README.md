# vf-hero Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-hero.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-hero)

This component is early-alpha, it has a few known to-be-dones:

- Responsive layout
- Full variants
- Full Nunjucks templates
- Sass is early and subject to change
- Image height currently must be 348px 

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-hero` with this command.

```
$ yarn add --dev @visual-framework/vf-hero
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-hero/index.scss";
```

_Make sure you import Sass requirements along with the modules._
