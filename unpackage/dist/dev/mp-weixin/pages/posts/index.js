"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_PostPage2 = common_vendor.resolveComponent("PostPage");
  (_easycom_NavBar2 + _easycom_PostPage2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_PostPage = () => "../../components/PostPage/PostPage.js";
if (!Math) {
  (_easycom_NavBar + _easycom_PostPage)();
}
const MAX_CACHE_PAGE = 3;
const MAX_CACHE_DATA = 10;
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
    common_vendor.onReady(function() {
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
    function ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      isTap.value = true;
      const currentSize = tabListSize[index];
      updateIndicator(currentSize.left, currentSize.width);
      _touchTabIndex = index;
      switchTab(index);
    }
    function switchTab(index) {
      if (pageList[index].dataList.length === 0) {
        loadTabData(index);
      }
      if (index === tabIndex.value)
        return;
      tabIndex.value = index;
      if (pageList[index].dataList.length > MAX_CACHE_DATA) {
        let isExist = cacheTab.indexOf(tabIndex.value);
        if (isExist < 0) {
          cacheTab.push(tabIndex.value);
        }
      }
      scrollInto.value = "tab-" + tabList.value[index].id;
      if (cacheTab.length > MAX_CACHE_PAGE) {
        let cacheIndex = cacheTab[0];
        clearTabData(cacheIndex);
        cacheTab.splice(0, 1);
      }
    }
    function clearTabData(index) {
      pageList[index].clear();
    }
    function loadTabData(index) {
      pageList[index].loadData();
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
      _lastTabIndex = index;
      switchTab(index);
      updateIndicator(tabListSize[index].left, tabListSize[index].width);
    }
    common_vendor.onLoad(async () => {
      tabList.value = [
        {
          "created_at": "2024-04-15 22:44:38",
          "updated_at": "2024-04-15 22:44:38",
          "id": 16,
          "name": "低代码",
          "sort": 1
        },
        {
          "created_at": "2024-03-04 14:35:58",
          "updated_at": "2024-03-04 14:35:58",
          "id": 15,
          "name": "浏览器",
          "sort": 1
        },
        {
          "created_at": "2023-11-18 01:18:59",
          "updated_at": "2023-11-18 01:18:59",
          "id": 14,
          "name": "编译器",
          "sort": 1
        },
        {
          "created_at": "2023-10-19 21:16:51",
          "updated_at": "2023-10-19 21:16:51",
          "id": 13,
          "name": "路线",
          "sort": 1
        },
        {
          "created_at": "2023-10-19 20:34:55",
          "updated_at": "2023-10-19 20:34:55",
          "id": 12,
          "name": "Git",
          "sort": 1
        },
        {
          "created_at": "2023-10-19 20:32:14",
          "updated_at": "2023-10-19 20:32:14",
          "id": 111,
          "name": "算法",
          "sort": 1
        },
        {
          "created_at": "2023-10-19 20:32:14",
          "updated_at": "2023-10-19 20:32:14",
          "id": 112,
          "name": "测试数据1",
          "sort": 1
        },
        {
          "created_at": "2023-10-19 20:32:14",
          "updated_at": "2023-10-19 20:32:14",
          "id": 113,
          "name": "测试数据2",
          "sort": 1
        },
        {
          "created_at": "2023-10-19 20:32:14",
          "updated_at": "2023-10-19 20:32:14",
          "id": 114,
          "name": "测试数据3",
          "sort": 1
        }
      ];
    });
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
        b: common_vendor.n(isTap.value ? "scroll-view-animation" : ""),
        c: `translateX(${indicatorRect.left}px)`,
        d: indicatorRect.width + "px",
        e: scrollInto.value,
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-db5b8b6c"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/pages/posts/index.vue"]]);
wx.createPage(MiniProgramPage);
