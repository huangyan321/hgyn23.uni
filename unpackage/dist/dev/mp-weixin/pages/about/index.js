"use strict";
const common_vendor = require("../../common/vendor.js");
const about = "### 技术栈\r\n\r\n不同于其他博客采用的如 `Hexo`, `WordPress`等静态站点生成技术。我选择了更为先进的`NuxtJS`+`Koa`作为后端，前端则采用`NuxtJS`+`Vue3`。中后台采用`Vue3`，数据库采用`Mysql`+`Redis`, 全部采用 `TypeScript` 开发，一定程度保证了项目的稳定性。\r\n\r\n### 服务\r\n\r\n- `Markdown`解析和语法高亮服务由 `MarkdownIt` + `Shikiji 式辞` 支持，在此基础上我对其进行了语法扩展，现在它能够支持解析在线的Vue组件。\r\n- 已开放提供文章、草稿、分类、标签、评论、资源、用户、统计、分析等服务。\r\n\r\n### 历程\r\n\r\n站点初建于2021年9月，经历了大大小小3次重构，由最初的Vue2+SSR迁移到Vue3+SSR，待Nuxt3稳定后又进行了第3次重构，也就是现在的样子。\r\n\r\n### 联系\r\n\r\n- [GitHub](https://github.com/huangyan321)\r\n";
if (!Array) {
  const _easycom_zero_markdown_view2 = common_vendor.resolveComponent("zero-markdown-view");
  _easycom_zero_markdown_view2();
}
const _easycom_zero_markdown_view = () => "../../uni_modules/zero-markdown-view/components/zero-markdown-view/zero-markdown-view.js";
if (!Math) {
  _easycom_zero_markdown_view();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          themeColor: "#222",
          markdown: common_vendor.unref(about)
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-415a4f9d"], ["__file", "C:/Users/16045/Desktop/code/my-project/hgyn23.uni/pages/about/index.vue"]]);
wx.createPage(MiniProgramPage);
