"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (PostPageItem + common_vendor.unref(NoData))();
}
const NoData = () => "../NoData/NoData.js";
const PostPageItem = () => "./PostPageItem.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "PostPage",
  props: {
    tabId: {}
  },
  setup(__props, { expose: __expose }) {
    const isNoData = common_vendor.ref(false);
    const dataList = common_vendor.ref([]);
    const requestParams = common_vendor.reactive({
      id: 0
    });
    function loadData() {
      console.log("loadData");
      setTimeout(() => {
        isLoading.value = true;
        dataList.value = [
          {
            "created_at": "2024-03-27 22:29:07",
            "updated_at": "2024-04-15 23:02:18",
            "id": 276,
            "title": "Work in Progress",
            "description": "👀️",
            "img_cover": "",
            "seo_keyword": "学习",
            "is_top": 1,
            "status": 1,
            "sort": 1,
            "ai_summary": "",
            "browse": 38,
            "like_count": 0,
            "uid": 1,
            "category_id": 7,
            "reading_time": 42e3,
            "x_tags": [
              {
                "id": 13,
                "name": "路线"
              }
            ],
            "category_info": {
              "id": 7,
              "name": "项目"
            },
            "creator_info": {
              "id": 1,
              "email": "1604549268@qq.com",
              "nickname": "huangyan321"
            }
          },
          {
            "created_at": "2024-02-20 22:45:24",
            "updated_at": "2024-03-03 22:22:24",
            "id": 274,
            "title": "开发计划",
            "description": "列举一些优化点及今后开发计划",
            "img_cover": "",
            "seo_keyword": "开发计划",
            "is_top": 1,
            "status": 1,
            "sort": 1,
            "ai_summary": "",
            "browse": 86,
            "like_count": 0,
            "uid": 1,
            "category_id": 1,
            "reading_time": 88500,
            "x_tags": [
              {
                "id": 13,
                "name": "路线"
              }
            ],
            "category_info": {
              "id": 1,
              "name": "前端"
            },
            "creator_info": {
              "id": 1,
              "email": "1604549268@qq.com",
              "nickname": "huangyan321"
            }
          },
          {
            "created_at": "2024-04-15 22:44:38",
            "updated_at": "2024-04-15 22:46:33",
            "id": 277,
            "title": "通用低代码平台处理少数特殊需求的方案列举",
            "description": "通过拖拉拽方式生成配置化 JSON 的设计模式非常适用于快速开发和部署标准化的前端应用。针对那些无法完全由配置化平台覆盖的特殊需求（大约10%），这里有一些可以帮助开发者灵活处理这些情况的实践方法",
            "img_cover": "",
            "seo_keyword": "低代码",
            "is_top": 0,
            "status": 1,
            "sort": 1,
            "ai_summary": "",
            "browse": 12,
            "like_count": 0,
            "uid": 1,
            "category_id": 1,
            "reading_time": 218400,
            "x_tags": [
              {
                "id": 16,
                "name": "低代码"
              }
            ],
            "category_info": {
              "id": 1,
              "name": "前端"
            },
            "creator_info": {
              "id": 1,
              "email": "1604549268@qq.com",
              "nickname": "huangyan321"
            }
          },
          {
            "created_at": "2023-12-06 09:42:22",
            "updated_at": "2024-02-29 21:12:37",
            "id": 270,
            "title": "Vue2/3 通用指令化弹窗组件封装",
            "description": "指令化弹窗，顾名思义是通过代码调用方式唤起的弹窗，在某些场景下具有非常高的灵活性。",
            "img_cover": "https://docsapi.hgyn23.cn/Vue.js_Logo_2.svg.png",
            "seo_keyword": "vue组件",
            "is_top": 0,
            "status": 1,
            "sort": 1,
            "ai_summary": "这段代码是一个Vue组件，用于创建一个模态框（Modal）。模态框有默认的标题、内容和底部，以及一个确定按钮。样式定义了按钮、卡片和模态框的外观。代码还包含了Vue2和Vue3版本的组件实现。",
            "browse": 366,
            "like_count": 0,
            "uid": 1,
            "category_id": 1,
            "reading_time": 288e3,
            "x_tags": [
              {
                "id": 6,
                "name": "Vue"
              }
            ],
            "category_info": {
              "id": 1,
              "name": "前端"
            },
            "creator_info": {
              "id": 1,
              "email": "1604549268@qq.com",
              "nickname": "huangyan321"
            }
          },
          {
            "created_at": "2023-11-18 01:18:59",
            "updated_at": "2024-02-19 10:11:02",
            "id": 269,
            "title": "模板DSL编译器核心实现思路",
            "description": "👀️ 编译器其实只是一段程序，它用来将一种语言A翻译成另一种语言B。其中语言A叫做**源语言**，语言B叫做**目标语言**。编译器将源语言翻译为目标语言的过程被称为**编译**。",
            "img_cover": "",
            "seo_keyword": "编译器",
            "is_top": 0,
            "status": 1,
            "sort": 1,
            "ai_summary": "本文介绍了Vue模板编译的工作流程和实现思路。编译器是将一种语言翻译成另一种语言的程序，而DSL是针对特定领域的语言。Vue模板编译将模板语言翻译成渲染函数，包括词法分析和语法分析，将模板AST转换为Javascript AST，最后生成渲染函数的Javascript代码。词法分析和语法分析通过解析器完成，解析器根据有限自动状态机将模板切割为词法记号。最后给出了具体的代码实现示例。",
            "browse": 247,
            "like_count": 0,
            "uid": 1,
            "category_id": 1,
            "reading_time": 1535700,
            "x_tags": [
              {
                "id": 14,
                "name": "编译器"
              }
            ],
            "category_info": {
              "id": 1,
              "name": "前端"
            },
            "creator_info": {
              "id": 1,
              "email": "1604549268@qq.com",
              "nickname": "huangyan321"
            }
          },
          {
            "created_at": "2023-11-09 10:42:20",
            "updated_at": "2024-02-18 02:05:27",
            "id": 268,
            "title": "双端diff算法详解",
            "description": "`diff` 算法是一种通过同层的树节点进行比较的算法，其在前端框架领域中得到广泛运用，主要用于虚拟 `dom` 渲染成真实 `dom` 的新旧 `VNode` 节点比较，从而使 `Dom`节点高效地更新。",
            "img_cover": "https://docsapi.hgyn23.cn/下载.png",
            "seo_keyword": "diff算法",
            "is_top": 0,
            "status": 1,
            "sort": 1,
            "ai_summary": "双端diff算法是Vue渲染器的核心算法，用于比较新旧节点并找出最小的更新代价。算法通过四个索引值来标记新旧子节点的两个端点，然后进行双端比较。比较过程中，如果找到可以复用的节点，则将其移动到正确的位置。移动完成后，更新索引值，继续下一轮比较。算法通过循环来实现多轮比较，直到所有节点都被比较完。",
            "browse": 169,
            "like_count": 0,
            "uid": 1,
            "category_id": 1,
            "reading_time": 1670100,
            "x_tags": [
              {
                "id": 11,
                "name": "算法"
              }
            ],
            "category_info": {
              "id": 1,
              "name": "前端"
            },
            "creator_info": {
              "id": 1,
              "email": "1604549268@qq.com",
              "nickname": "huangyan321"
            }
          }
        ];
      }, 800);
    }
    function clearData() {
      dataList.value.length = 0;
      requestParams.id = 0;
    }
    function goDetail(item) {
    }
    const loadingText = common_vendor.ref("加载中...");
    function loadMore() {
    }
    const isLoading = common_vendor.ref(true);
    __expose({ loadData, dataList, clear: clearData });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(dataList.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => goDetail(), item.id),
            b: "a92be00f-0-" + i0,
            c: common_vendor.p({
              ["post-item"]: item
            }),
            d: item.id
          };
        }),
        b: isLoading.value || dataList.value.length > 4
      }, isLoading.value || dataList.value.length > 4 ? {
        c: common_vendor.t(loadingText.value)
      } : {}, {
        d: common_vendor.o(($event) => loadMore()),
        e: isNoData.value
      }, isNoData.value ? {
        f: common_vendor.o(loadMore)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a92be00f"], ["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/components/PostPage/PostPage.vue"]]);
wx.createComponent(Component);
