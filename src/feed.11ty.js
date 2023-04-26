const fs = require("fs").promises;

const { Liquid } = require("liquidjs");

const postSlugs = ["/tech/kalyn", "/tech/replit/index", "/tech/messenger"];

class Feed {
  data() {
    return {
      layout: null,
      permalink: "feed.xml",
    };
  }

  async render(data) {
    const pagesBySlug = {};
    for (const page of data.collections.all) {
      pagesBySlug[page.filePathStem] = page;
    }
    const posts = [];
    for (const slug of postSlugs) {
      const page = pagesBySlug[slug];
      let path = page.filePathStem;
      if (path.endsWith("/index")) {
        path = path.slice(0, path.length - "index".length);
      }
      posts.push({
        title: page.data.title,
        path: path,
        date: page.data.date,
        contentPreview: page.templateContent.slice(0, 1000) + "...",
        url: "https://intuitiveexplanations.com" + path,
        dateStr: page.data.date.toISOString(),
      });
    }
    const templateParams = {
      metadata: {
        title: "Intuitive Explanations",
        subtitle: "Understand, don't memorize",
        url: "https://intuitiveexplanations.com",
        feedUrl: "https://intuitiveexplanations.com/feed.xml",
        author: {
          name: "Radon Rosborough",
          email: "radon@intuitiveexplanations.com",
        },
      },
      posts: posts,
      mostRecentDateStr: new Date(
        Math.max(...posts.map((post) => post.date))
      ).toISOString(),
    };
    const engine = new Liquid();
    const template = engine.parse(await fs.readFile("src/feed.xml", "utf-8"));
    return await engine.render(template, templateParams);
  }
}

module.exports = Feed;
