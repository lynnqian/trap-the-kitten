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
            boardArray: [[false]],
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
            this.boardArray = Array(this.vertiN * 2).fill(Array(this.horiN).fill(false));
            this.boardArray = Array(this.vertiN * 2);
            for (let _i = 0; _i < this.vertiN * 2; _i++) {
                this.boardArray[_i] = Array(this.horiN).fill(false);
            }
            this.gameStart = true;
            this.shownButton = false;
            console.log(this.boardArray);
        },

        clickOnBoard: function(row: number, col: number) {
            this.boardArray[row][col] = true;
            console.log(this.boardArray);
        },

        getButtonStyle: function(row: number, col: number) {
            if (this.boardArray[row][col] == true) {
                const buttonId = String('btn' + row + '-' + (col+1))
                document.getElementById(buttonId)!.style.backgroundColor = "palevioletred"; 
            } 
        }
    },

    mounted () {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
    }
})