'use strict';

const _            = require('lodash');
const Path         = require('path');
const beautifyHTML = require('js-beautify').html;
const utils        = require('@frctl/fractal').utils;

module.exports = function(theme, env, app, fractal){

    // port of https://github.com/frctl/nunjucks/blob/develop/src/extensions/render.js
    function RenderExtension() {

      this.tags = ['render'];

      this.parse = function (parser, nodes) {
          var tok = parser.nextToken();
          var args = parser.parseSignature(null, true);
          parser.advanceAfterBlockEnd(tok.value);
          return new nodes.CallExtensionAsync(this, 'run', args);
      };

      this.run = function () {

          const source = fractal.components;
          const args = Array.from(arguments);
          const rootContext = args[0].ctx;
          const callback = args.pop();
          args.shift();
          const handle = args[0];
          let context = args[1];
          const merge = args[2] || false;
          const entity = source.find(handle);
          if (!entity) {
              throw new Error(`Could not render component '${handle}' - component not found.`);
          }
          const defaultContext = entity.isComponent ? entity.variants().default().context : entity.context;
          if (!context) {
              context = defaultContext;
          } else if (merge) {
              context = utils.defaultsDeep(context, defaultContext);
          }

          source.resolve(context).then(context => {
              // fix env for rendered components
              // let env = JSON.parse(JSON.stringify(rootContext._env));
              context._env = env;
              entity.render(context).then(html => {
                  callback(null, html);
              }).catch(err => {
                  callback(err);
              });
          });
      };
    }

    env.engine.addExtension('render', new RenderExtension());


 };
