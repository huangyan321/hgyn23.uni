"use strict";
const utils_request_config = require("./config.js");
const js_sdk_luchRequest_luchRequest_core_Request = require("../../js_sdk/luch-request/luch-request/core/Request.js");
const http = new js_sdk_luchRequest_luchRequest_core_Request.Request({
  ...utils_request_config.requestConfig
});
http.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.resolve(err);
});
http.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
}, (err) => {
  return Promise.resolve(err);
});
exports.http = http;
