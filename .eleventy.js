// Resolve symlinks when copying
// https://github.com/11ty/eleventy/issues/530
const TemplatePassthrough = require("@11ty/eleventy/src/TemplatePassthrough");
const origCopy = TemplatePassthrough.prototype.copy;
TemplatePassthrough.prototype.copy = function (src, dest, copyOptions) {
  return origCopy.bind(this)(src, dest, { ...copyOptions, expand: true });
};

// Strip html extension in dev server, like Netlify does in production
// https://github.com/BrowserSync/browser-sync/issues/1055
//
// Have to do this asynchronously, because otherwise we get a circular
// dependency where TemplateConfig loads .eleventy.js which loads
// EleventyServe which tries to load TemplateConfig again, which
// errors.
setTimeout(() => {
  const EleventyServe = require("@11ty/eleventy/src/EleventyServe");
  const origGetOptions = EleventyServe.prototype.getOptions;
  EleventyServe.prototype.getOptions = function (port) {
    const opts = origGetOptions.bind(this)(port);
    opts.server.serveStaticOptions = {
      extensions: ["html"],
    };
    return opts;
  };
}, 0);

module.exports = (eleventyConfig) => {
  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      typographer: true,
    })
  );

  for (const path of ["assets", "css", "favicons", "js"]) {
    eleventyConfig.addPassthroughCopy(path);
  }

  eleventyConfig.addPassthroughCopy("_redirects");

  return {
    dir: {
      input: "src",
      output: "out",
      // Backwards compatibility with Jekyll (for now)
      layouts: "_layouts",
    },
  };
};