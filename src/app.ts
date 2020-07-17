import Vue from 'vue'

// noinspection JSUnusedGlobalSymbols
export const App = Vue.extend({
    data () {
        return {
            windowH: window.innerHeight,
            windowW: window.innerWidth,
            vertiN: Math.floor(window.innerHeight * 0.85 / 86),
            horiN: Math.floor(window.innerWidth * 0.60 / 43),
        };
    },

    methods: {
        onResize () {
            this.windowH = window.innerHeight;
            this.windowW = window.innerWidth;

            const divH = this.windowH * 0.85;
            this.vertiN = Math.floor(divH / 86);
            // TODO: Change the divW calculation for better mobile experience.
            const divW = this.windowW * 0.60;
            this.horiN = Math.floor(divW / 43);
        },

        getMainContainerStyle () {
            return {
                marginTop: this.windowH * 0.15 / 2 + 'px'
            };
        }
    },

    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
    }
})