import Vue from 'vue'

export const App = Vue.extend({
    data () {
        return {
            windowH: window.innerHeight,
            windowW: window.innerWidth,
            testStyle: {
                width: 40 + 'px',
                height: 40 + 'px'
            }
        }
    },

    methods: {
        onResize () {
            this.windowH = window.innerHeight;
            this.windowW = window.innerWidth;
        }
    },

    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
    }
})