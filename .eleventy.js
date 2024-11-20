module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/assets")

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
