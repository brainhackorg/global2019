const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  const config = {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
      }),
    ],
  };
  if (stage === 'build-html') {
    config.module = {
      rules: [
        {
          test: require.resolve('bootstrap'),
          use: loaders.null(),
        },
        {
          test: require.resolve('jquery'),
          use: loaders.null(),
        },
      ],
    };
  }
  actions.setWebpackConfig(config);
};

const remark = require('remark')
const remarkHTML = require('remark-html')

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter.faq) {
      console.log(node.frontmatter.faq)
      for (let f of node.frontmatter.faq) {
        f.question = remark()
          .use(remarkHTML)
          .processSync(f.question)
          .toString()
        f.answer = remark()
          .use(remarkHTML)
          .processSync(f.answer)
          .toString()
      }
      console.log(node.frontmatter.faq)
    }
  }
  return node;
};