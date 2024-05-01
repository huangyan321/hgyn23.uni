"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "NoData",
  emits: ["retry"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const textTypes = {
      none: "暂无网络"
    };
    const networkType = common_vendor.ref("none");
    common_vendor.index.getSystemInfoSync().platform === "ios";
    common_vendor.onMounted(() => {
      common_vendor.index.onNetworkStatusChange((res) => {
        this.isConnected = res.isConnected;
        networkType.value = res.networkType;
      });
      common_vendor.index.getNetworkType({
        success: (res) => {
          networkType.value = res.networkType;
        }
      });
    });
    function retry() {
      emit("retry");
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(textTypes[networkType.value]),
        b: networkType.value != "none"
      }, networkType.value != "none" ? {
        c: common_vendor.o(retry)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/vanweiping/Desktop/code/myproject/hbuilderx/hgyn23.mp/components/NoData/NoData.nvue"]]);
wx.createComponent(Component);
