const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  eleventyConfig.addPassthroughCopy("src/sass/base/fonts")
  eleventyConfig.addPassthroughCopy("src/sass/style.css")
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/assets")

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
