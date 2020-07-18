import Vue from 'vue'

// noinspection JSUnusedGlobalSymbols
export const App = Vue.extend({
    data () {
        return {
            windowH: window.innerHeight,
            windowW: window.innerWidth,
            vertiN: Math.floor(window.innerHeight * 0.85 / 86),
            horiN: Math.floor(window.innerWidth * 0.60 / 43),
            gameStart: false,
            shownButton: true,
            array: [[false]],
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
        },

        getGameBoard () {
            this.array = Array(this.vertiN * 2).fill(Array(this.horiN).fill(false));
            this.array = Array(this.vertiN * 2);
            for (let _i = 0; _i < this.vertiN * 2; _i++) {
                this.array[_i] = Array(this.horiN).fill(false);
            }
            this.gameStart = true;
            this.shownButton = false;
            console.log(this.array);
        },

        clickOnBoard: function(row: number, col: number) {
            this.array[row][col] = true;
            console.log(this.array);
        }
    },

    mounted () {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
    }
})