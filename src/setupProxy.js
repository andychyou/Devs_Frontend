const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api"], {
      target: "http://127.0.0.1:8000",
      // target: "https://devs-tory.herokuapp.com",
      // target: "https://devs-backend-dahyen0o.koyeb.app",
      changeOrigin: true,
    })
  );
};
