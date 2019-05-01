// Added font-awesome as custom script

// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string

// https://luiscabrera.site/tech/2017/01/09/fontawesome-in-ionic2.html

const existingConfig = require('../node_modules/@ionic/app-scripts/config/copy.config');
module.exports = Object.assign(existingConfig, {
  copyFontawesomeCss: {
    src: ['{{ROOT}}/node_modules/@fortawesome/fontawesome-free/css/**/*'],
    dest: '{{WWW}}/assets/fa/css'
  },
  copyFontawesomeJs: {
    src: ['{{ROOT}}/node_modules/@fortawesome/fontawesome-free/js/**/*'],
    dest: '{{WWW}}/assets/fa/js'
  },
  copyFontawesomeSprites: {
    src: ['{{ROOT}}/node_modules/@fortawesome/fontawesome-free/sprites/**/*'],
    dest: '{{WWW}}/assets/fa/sprites'
  },
  copyFontawesomeSvgs: {
    src: ['{{ROOT}}/node_modules/@fortawesome/fontawesome-free/svgs/**/*'],
    dest: '{{WWW}}/assets/fa/svgs'
  },
  copyFontawesomeWebfonts: {
    src: ['{{ROOT}}/node_modules/@fortawesome/fontawesome-free/webfonts/**/*'],
    dest: '{{WWW}}/assets/fa/webfonts'
  },
});
