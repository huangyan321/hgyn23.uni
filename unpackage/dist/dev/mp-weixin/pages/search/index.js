"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
require("../../utils/request/index.js");
require("../../utils/request/config.js");
require("../../js_sdk/luch-request/luch-request/core/Request.js");
require("../../js_sdk/luch-request/luch-request/core/dispatchRequest.js");
require("../../js_sdk/luch-request/luch-request/adapters/index.js");
require("../../js_sdk/luch-request/luch-request/helpers/buildURL.js");
require("../../js_sdk/luch-request/luch-request/utils.js");
require("../../js_sdk/luch-request/luch-request/core/buildFullPath.js");
require("../../js_sdk/luch-request/luch-request/helpers/isAbsoluteURL.js");
require("../../js_sdk/luch-request/luch-request/helpers/combineURLs.js");
require("../../js_sdk/luch-request/luch-request/core/settle.js");
require("../../js_sdk/luch-request/luch-request/core/InterceptorManager.js");
require("../../js_sdk/luch-request/luch-request/core/mergeConfig.js");
require("../../js_sdk/luch-request/luch-request/core/defaults.js");
require("../../js_sdk/luch-request/luch-request/utils/clone.js");
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_PageItem2 = common_vendor.resolveComponent("PageItem");
  const _easycom_LoadMore2 = common_vendor.resolveComponent("LoadMore");
  (_easycom_NavBar2 + _easycom_PageItem2 + _easycom_LoadMore2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_PageItem = () => "../../components/PageItem/PageItem.js";
const _easycom_LoadMore = () => "../../components/LoadMore/LoadMore.js";
if (!Math) {
  (_easycom_NavBar + _easycom_PageItem + _easycom_LoadMore)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const dataList = common_vendor.ref([]);
    const requestParams = common_vendor.reactive({
      page: 1,
      page_size: 999,
      title: ""
    });
    const loadMoreStatus = common_vendor.ref("loading");
    const isLoading = common_vendor.ref(false);
    const isSearchingMode = common_vendor.ref(false);
    const loadMoreContext = {
      contentrefresh: "正在搜索..."
    };
    async function search() {
      if (!requestParams.title || typeof requestParams.title === "string" ? !requestParams.title.trim() : false)
        return isSearchingMode.value = false;
      dataList.value = [];
      isLoading.value = true;
      isSearchingMode.value = true;
      const res = await api_index.getPostList(requestParams);
      const records = res.data.records;
      if (records.length) {
        dataList.value = records;
      } else {
        loadMoreStatus.value = "noMore";
      }
      isLoading.value = false;
    }
    common_vendor.onLoad(() => {
      isSearchingMode.value = false;
    });
    function goDetail(detail) {
      common_vendor.index.navigateTo({
        url: "/pages/post-detail/index?query=" + encodeURIComponent(JSON.stringify({ title: detail.title, id: detail.id }))
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(search),
        b: common_vendor.o(($event) => requestParams.title = $event),
        c: common_vendor.p({
          ["is-search-mode"]: true,
          searchText: requestParams.title
        }),
        d: !isSearchingMode.value
      }, !isSearchingMode.value ? {
        e: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => requestParams.title = item, item)
          };
        })
      } : common_vendor.e({
        f: dataList.value.length && !isLoading.value
      }, dataList.value.length && !isLoading.value ? {
        g: common_vendor.f(dataList.value, (item, k0, i0) => {
          return {
            a: item.id,
            b: common_vendor.o(($event) => goDetail(item), item.id),
            c: "2dab939d-1-" + i0,
            d: common_vendor.p({
              ["post-item"]: item
            })
          };
        })
      } : isLoading.value ? {
        i: common_vendor.p({
          ["content-text"]: loadMoreContext,
          status: loadMoreStatus.value
        })
      } : {}, {
        h: isLoading.value
      }));
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dab939d"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/pages/search/index.vue"]]);
wx.createPage(MiniProgramPage);
