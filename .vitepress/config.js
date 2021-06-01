// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: "Vite!",
  description: "Next Generation Frontend Tooling",
  markdown: { breaks: true },
  themeConfig: {
    repo: "vitejs/vite",
    sidebar: {
      "/": [
        {
          text: "Math",
          children: [
            {
              text: "Math",
              link: "/docs/",
            },
          ],
        },
      ],
    },
  },
};
