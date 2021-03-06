import Vue from 'vue';
import colors from 'vuetify/lib/util/colors'
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#F4511E",
                secondary: colors.grey.darken1,

                premium: "#FFBA7E",
                normal: "#FFF7CC",
                default: colors.white,

                accent: colors.shades.black,
                error: colors.red.accent3,

                banner: "#989696",
                background: "#F9F9F9",
                footercolor: "#3B3737"
            },
            dark: {
                primary: colors.blue.darken2,
                secondary: colors.amber.darken3,

                premium: colors.red,
                lower: colors.orange,
                default: colors.white,

                banner: colors.black,
                accent: colors.grey.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            },
            custom: {
                primary: colors.blue.darken2,
                secondary: '#b0bec5',
                anchor: '#8c9eff',
            },
            // this.$vuetify.theme.themes.light.primary = '#4caf50'
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    }
});