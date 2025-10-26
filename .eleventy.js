module.exports = function(eleventyConfig) {
  // Copy through static files
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Create a collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // Add custom filter for unique values
  eleventyConfig.addFilter("unique", function(arr) {
    return [...new Set(arr)];
  });

  // Add custom filter for URL encoding
  eleventyConfig.addFilter("urlencode", function(str) {
    return encodeURIComponent(str);
  });

  // Add date filter for RSS feed (RFC 822 format)
  eleventyConfig.addFilter("dateToRfc822", function(date) {
    if (!date) return "";
    const d = new Date(date);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = days[d.getUTCDay()];
    const month = months[d.getUTCMonth()];
    const year = d.getUTCFullYear();
    const dateNum = d.getUTCDate();
    const hours = d.getUTCHours().toString().padStart(2, '0');
    const minutes = d.getUTCMinutes().toString().padStart(2, '0');
    const seconds = d.getUTCSeconds().toString().padStart(2, '0');
    return `${day}, ${dateNum} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`;
  });

  // Add sitemap generation
  eleventyConfig.on('eleventy.after', async () => {
    const { execSync } = require('child_process');
    console.log('[11ty] Generating sitemap...');
    // Sitemap will be generated via template
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
