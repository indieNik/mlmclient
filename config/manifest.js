/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "mlm-client",
    short_name: "mlm-client",
    description: "MLM Software for multi-level marketting",
    start_url: "/",
    display: "standalone",
    background_color: "#4590F7",
    theme_color: "#4590F7",
    icons: [
      {
        src: "/images/mlm-190.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/images/mlm-1200.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/images/mlm-190.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/images/mlm-150.png",
        element: "150x150",
        targets: ['ms']
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    },
    ms: {
      tileColor: '#4590F7'
    }
  };
}
