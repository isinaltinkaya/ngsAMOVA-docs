module.exports = {
  title: 'ngsAMOVA Documentation',
  tagline: 'Documentation for the ngsAMOVA tool',
  url: 'https://isinaltinkaya.github.io',
  baseUrl: '/ngsAMOVA',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'YourOrg', // **Replace with your GitHub org name**
  projectName: 'ngsAMOVA-docs', // **Replace with your repo name**
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
