"use strict";
const utils_request_index = require("../utils/request/index.js");
function getPosts() {
  return utils_request_index.http.get("tag/list", {
    params: {
      page: 1,
      page_size: 6
    }
  });
}
exports.getPosts = getPosts;
