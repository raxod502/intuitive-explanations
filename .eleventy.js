const anchor = require("markdown-it-anchor");
const toc = require("markdown-toc");

module.exports = (eleventyConfig) => {
  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      typographer: true,
    }).use(anchor, {
      // GitHub compatible heading slugs that don't look awful
      slugify: toc.slugify,
    }),
  );

  for (const path of ["assets", "css", "favicons", "fonts", "js"]) {
    eleventyConfig.addPassthroughCopy(path, { expand: true });
  }

  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("vercel.json");
  eleventyConfig.addPassthroughCopy({
    "webfinger.json": ".well-known/webfinger",
  });

  return {
    dir: {
      input: "src",
      output: "out",
      // Backwards compatibility with Jekyll (for now)
      layouts: "_layouts",
    },
  };
};
