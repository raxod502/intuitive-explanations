// Resolve symlinks when copying
// https://github.com/11ty/eleventy/issues/530
const TemplatePassthrough = require("@11ty/eleventy/src/TemplatePassthrough");
const origCopy = TemplatePassthrough.prototype.copy;
TemplatePassthrough.prototype.copy = function (src, dest, copyOptions) {
  return origCopy.bind(this)(src, dest, { ...copyOptions, expand: true });
};

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
