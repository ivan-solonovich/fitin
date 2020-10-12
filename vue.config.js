const path = require('path')
module.exports = {
    css: {
        loaderOptions: {
            sass:{
                prependData: `@import "@/assets/styles/styles.scss";`
            },
        },
    },
    transpileDependencies: ['vuex-persist']

};