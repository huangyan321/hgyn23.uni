"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_mock_index = require("../../utils/mock/index.js");
require("../../utils/mock/archives.js");
require("../../utils/mock/postlist.js");
require("../../utils/mock/category.js");
if (!Math) {
  (NavBar + PostPage)();
}
const PostPage = () => "./page.js";
const NavBar = () => "./nav-bar.js";
const MAX_CACHE_PAGE = 2;
const MAX_CACHE_DATA = 5;
const TAB_PRELOAD_OFFSET = 1;
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  emits: ["tabChange"],
  setup(__props, { emit: __emit }) {
    const vm = common_vendor.getCurrentInstance();
    const isTap = common_vendor.ref(false);
    const tabList = common_vendor.ref([]);
    const tabIndex = common_vendor.ref(0);
    const scrollInto = common_vendor.ref("");
    const cacheTab = [];
    let swiperWidth = 0;
    let _touchTabIndex = 0;
    let _lastTabIndex = 0;
    const tabListSize = {};
    const indicatorRect = common_vendor.reactive({
      left: 0,
      width: 0
    });
    const pageList = [];
    common_vendor.onReady(async function() {
      common_vendor.index.showToast({
        icon: "loading",
        title: "请稍后...",
        mask: true
      });
      const res = await utils_mock_index.getMock("category");
      tabList.value = res.data.records;
      common_vendor.nextTick$1(() => {
        common_vendor.index.hideToast();
        for (var i = 0; i < tabList.value.length; i++) {
          let item = vm.proxy.$refs["page" + i];
          if (Array.isArray(item)) {
            pageList.push(item[0]);
          } else {
            pageList.push(item);
          }
        }
        switchTab(tabIndex.value);
        selectorQuery();
      });
    });
    function ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      isTap.value = true;
      const currentSize = tabListSize[index];
      updateIndicator(currentSize.left, currentSize.width);
      _touchTabIndex = index;
      switchTab(index);
    }
    function switchTab(index) {
      console.log(pageList);
      if (pageList[index].dataList.length === 0) {
        loadTabData(index);
      }
      if (index === tabIndex.value)
        return;
      tabIndex.value = index;
      console.log("pageList[index].dataList.length", pageList[index].dataList.length);
      if (pageList[index].dataList.length > MAX_CACHE_DATA) {
        let isExist = cacheTab.indexOf(tabIndex.value);
        if (isExist < 0) {
          cacheTab.push(tabIndex.value);
        }
      }
      scrollInto.value = "tab-" + tabList.value[index].id;
      console.log("cacheTab", cacheTab);
      if (cacheTab.length > MAX_CACHE_PAGE) {
        let cacheIndex = cacheTab.shift();
        clearTabData(cacheIndex);
      }
    }
    function clearTabData(index) {
      pageList[index].clear();
    }
    async function loadTabData(index) {
      await pageList[index].loadData();
    }
    function selectorQuery() {
      common_vendor.index.createSelectorQuery().in(vm.proxy).select(".page-box").fields({
        dataset: true,
        size: true
      }, (res) => {
        swiperWidth = res.width;
      }).exec();
      common_vendor.index.createSelectorQuery().in(vm.proxy).selectAll(".tab-bar-scroll-item").boundingClientRect((rects) => {
        rects.forEach((rect) => {
          tabListSize[rect.dataset.id] = rect;
        });
        updateIndicator(tabListSize[tabIndex.value].left, tabListSize[tabIndex.value].width);
      }).exec();
    }
    function updateIndicator(left, width) {
      indicatorRect.left = left;
      indicatorRect.width = width;
    }
    function onswiperchange(e) {
    }
    function onswiperscroll(e) {
      if (isTap.value) {
        return;
      }
      const offsetX = e.detail.dx;
      let prevIndex = _lastTabIndex;
      if (offsetX > TAB_PRELOAD_OFFSET) {
        prevIndex++;
      } else if (offsetX < -TAB_PRELOAD_OFFSET) {
        prevIndex--;
      }
      if (prevIndex === _lastTabIndex || prevIndex < 0 || prevIndex > pageList.length - 1) {
        return;
      }
      var percentage = Math.abs(swiperWidth / offsetX);
      var currentSize = tabListSize[_lastTabIndex];
      var prevSize = tabListSize[prevIndex];
      var lineL = currentSize.left + (prevSize.left - currentSize.left) / percentage;
      var lineW = currentSize.width + (prevSize.width - currentSize.width) / percentage;
      updateIndicator(lineL, lineW);
    }
    function animationfinish(e) {
      let index = e.detail.current;
      if (_touchTabIndex === index) {
        isTap.value = false;
      }
      console.log(index);
      _lastTabIndex = index;
      switchTab(index);
      updateIndicator(tabListSize[index].left, tabListSize[index].width);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabList.value, (tab, index, i0) => {
          return {
            a: common_vendor.t(tab.name),
            b: common_vendor.n(tabIndex.value == index ? "tab-bar-scroll-item-title--active" : ""),
            c: tab.id,
            d: "tab-" + tab.id,
            e: "tabitem" + index,
            f: index,
            g: index,
            h: common_vendor.o(ontabtap, tab.id)
          };
        }),
        b: scrollInto.value,
        c: common_vendor.n(isTap.value ? "scroll-view-animation" : ""),
        d: `translateX(${indicatorRect.left}px)`,
        e: indicatorRect.width + "px",
        f: common_vendor.f(tabList.value, (tab, index, i0) => {
          return {
            a: common_vendor.sr("page" + index, "db5b8b6c-1-" + i0, {
              "f": 1
            }),
            b: "page" + index,
            c: "db5b8b6c-1-" + i0,
            d: common_vendor.p({
              ["tab-id"]: tab.id
            }),
            e: tab.id
          };
        }),
        g: tabIndex.value,
        h: common_vendor.o(onswiperchange),
        i: common_vendor.o(onswiperscroll),
        j: common_vendor.o(animationfinish),
        k: common_vendor.o(animationfinish)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-db5b8b6c"], ["__file", "C:/Users/16045/Desktop/code/my-project/hgyn23.uni/pages/posts/index.vue"]]);
wx.createPage(MiniProgramPage);
