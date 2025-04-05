module.exports = {
  title: 'ngsAMOVA Documentation',
  tagline: 'Documentation for the ngsAMOVA tool',
  url: 'https://isinaltinkaya.github.io',
  baseUrl: '/ngsAMOVA-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'isinaltinkaya',
  projectName: 'ngsAMOVA-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-org/ngsAMOVA-docs/edit/main/',
        },
        blog: false
      },
    ],
  ],
};
