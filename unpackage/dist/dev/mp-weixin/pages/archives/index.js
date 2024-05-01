"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_mock_index = require("../../utils/mock/index.js");
const utils_format_date = require("../../utils/format/date.js");
require("../../utils/mock/archives.js");
require("../../utils/mock/postlist.js");
require("../../utils/mock/category.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const getYear = (a) => new Date(a).getFullYear();
    const isFuture = (a) => a && new Date(a) > /* @__PURE__ */ new Date();
    const isSameYear = (a, b) => a && b && getYear(a) === getYear(b);
    const isSameGroup = (a, b) => {
      const a_created_at = a.created_at.replaceAll("-", "/");
      const b_created_at = (b == null ? void 0 : b.created_at.replaceAll("-", "/")) || "";
      return isFuture(a_created_at) === isFuture(b_created_at) && isSameYear(a_created_at, b_created_at);
    };
    function goDetail(detail) {
      common_vendor.index.navigateTo({
        url: "/pages/post-detail/index?query=" + encodeURIComponent(JSON.stringify(detail))
      });
    }
    function getGroupName(p) {
      if (isFuture(p.created_at.replaceAll("-", "/")))
        return "Upcoming";
      return getYear(p.created_at.replaceAll("-", "/"));
    }
    const dataList = common_vendor.ref([]);
    async function load() {
      const res = await utils_mock_index.getMock("archives");
      dataList.value = res.data.records;
    }
    common_vendor.onLoad(async () => {
      common_vendor.index.showToast({
        icon: "loading",
        title: "请稍后...",
        mask: true
      });
      await load();
      common_vendor.index.hideToast();
    });
    common_vendor.onShow(load);
    common_vendor.onHide(() => {
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !dataList.value.length
      }, !dataList.value.length ? {} : {}, {
        b: common_vendor.f(dataList.value, (post, index, i0) => {
          var _a, _b;
          return common_vendor.e({
            a: !isSameGroup(post, (_a = dataList.value) == null ? void 0 : _a[index - 1])
          }, !isSameGroup(post, (_b = dataList.value) == null ? void 0 : _b[index - 1]) ? {
            b: common_vendor.t(getGroupName(post)),
            c: index - 2
          } : {}, {
            d: common_vendor.t(post.title),
            e: common_vendor.t(common_vendor.unref(utils_format_date.parseDate)(new Date(post.created_at.replaceAll("-", "/")), "MM-DD")),
            f: index,
            g: common_vendor.o(($event) => goDetail(post), post.id),
            h: post.id
          });
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-158e3f34"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/pages/archives/index.vue"]]);
wx.createPage(MiniProgramPage);
