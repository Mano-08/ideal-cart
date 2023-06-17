import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "idealCart",
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  icons: {
    "128": "icon-128.png",
  },
  action: {
    default_icon: "icon-128.png",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.js"],
      // KEY for cache invalidation
      css: ["assets/css/contentStyle<KEY>.chunk.css"],
    },
  ],
  devtools_page: "src/pages/devtools/index.html",
  permissions: ["storage", "activeTab"],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "src/pages/*/*.html",
        "src/pages/*/*.js",
        "icon-128.png",
        "icon-34.png",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
