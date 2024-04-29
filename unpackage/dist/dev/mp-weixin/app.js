"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/posts/index.js";
  "./pages/posts/detail/index.js";
  "./pages/archives/index.js";
  "./pages/project/index.js";
  "./pages/about/index.js";
  "./pages/search/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/16045/Desktop/code/my-project/hgyn23.uni/App.vue"]]);
const store = {};
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.store = store;
  return {
    app
  };
}
common_vendor.wx$1.preDownloadSubpackage({
  packageType: "workers",
  success(res) {
    console.log("load worker success", res);
    var worker = common_vendor.wx$1.createWorker(
      "workers/markdown.js"
    );
    store.worker = worker;
  },
  fail(res) {
    console.log("load worker fail", res);
  }
});
createApp().app.mount("#app");
exports.createApp = createApp;
