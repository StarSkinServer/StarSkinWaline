const Waline = require('@waline/vercel');
const HelloWorldPlugin = require('@waline-plugins/hello-world');

module.exports = Waline({
  plugins: [HelloWorldPlugin],
  async postSave(comment) {
    // 真实IP
  },
  think: {
    app: {
      proxyIpHeader: "CF-Connecting-IP",
    },
  },
});
