const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
});

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.sophyphile.stickersmash.dev";
  }

  if (IS_PREVIEW) {
    return "com.sophyphile.stickersmash.preview";
  }

  return "com.sophyphile.stickersmash";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Sticker Smash (Dev)";
  }

  if (IS_PREVIEW) {
    return "Sticker Smash (Preview)";
  }

  return "Sticker Smash: Emoji Stickers";
};
