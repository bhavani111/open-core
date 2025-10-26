module.exports = function(eleventyConfig) {
  // Copy through static files
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Create a collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
