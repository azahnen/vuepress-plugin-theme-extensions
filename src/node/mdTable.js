module.exports = {
  extendsMarkdown: (md, app) => {
    const themeExt = app.options.themeConfig.themeExtensions || {};
    const isTableRowHeight = themeExt.tableRowHeight !== false;

    if (isTableRowHeight) {
      const proxy = (tokens, idx, options, env, self) =>
        self.renderToken(tokens, idx, options);
      const defaultTdOpenRenderer = md.renderer.rules.td_open || proxy;

      md.renderer.rules.td_open = function (tokens, idx, options, env, self) {
        tokens[idx].attrJoin("class", "theme-ext-td");
        return `${defaultTdOpenRenderer(tokens, idx, options, env, self)}<div>`;
      };

      const defaultTdCloseRenderer = md.renderer.rules.td_close || proxy;

      md.renderer.rules.td_close = function (tokens, idx, options, env, self) {
        return `</div>${defaultTdCloseRenderer(
          tokens,
          idx,
          options,
          env,
          self
        )}`;
      };
    }
  },
};
