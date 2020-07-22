import Vue from 'vue'

// noinspection JSUnusedGlobalSymbols
export const App = Vue.extend({
    data () {
        const vn = Math.floor(window.innerHeight * 0.85 / 86);
        const hn = Math.floor(window.innerWidth * 0.60 / 43);

        // Init board array.
        const bArr = Array(vn * 2);
        for (let i = 0; i < vn * 2; i++) {
            bArr[i] = Array(hn).fill(false);
        }
        

        return {
            windowH: window.innerHeight,
            windowW: window.innerWidth,
            vertiN: vn,
            horiN: hn,
            gameStart: false,
            shownButton: true,
            boardArray: bArr,
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

        clickOnBoard: function(row: number, col: number) {
            this.boardArray[row][col] = true;
            console.log(this.boardArray);

            // Force update the style of buttons.
            this.$forceUpdate();
        },

        getButtonStyle: function(row: number, col: number) {
            console.log(this.boardArray[row][col])
            return this.boardArray[row][col] ? { backgroundColor: "palevioletred" } : {};
        },
        getOffset(el: Element) {
            const rect = el.getBoundingClientRect();
            return {
              left: rect.left + window.scrollX,
              top: rect.top + window.scrollY
            };
        },
        clicked() {
            const kitten = document.getElementById("kitten-image")
            const tempId = 'btn' + Math.floor(this.vertiN-1) + '-' + Math.floor((this.horiN-1)/2)
            const middleButton = document.getElementById(tempId)
            kitten!.style.position = "absolute"
            kitten!.style.left = middleButton?.offsetLeft!-15 + "px"
            kitten!.style.top = middleButton?.offsetTop!-15 + "px"
        }

    },

    mounted () {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
    }
})