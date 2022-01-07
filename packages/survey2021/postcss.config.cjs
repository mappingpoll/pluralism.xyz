module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [require('stylelint')({
				fix: true
			})]
		}),
		require('postcss-media-minmax')(),
		require('postcss-preset-env')({
			stage: 3,
			features: {
				'nesting-rules': true
			}
		}),
		require('stylelint')({
			fix: true
		})
	]
};
