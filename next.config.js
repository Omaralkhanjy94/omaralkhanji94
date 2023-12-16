// في ملف next.config.js

module.exports = {
    webpack: (config, { isServer }) => {
      // إضافة تكوينات إضافية إذا كنت تحتاج إليها
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
        };
      }
  /* */
      return config;
    },
  };
  