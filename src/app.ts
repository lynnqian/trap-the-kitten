import Vue from 'vue'

//--- Helper functions
function updateKittenPosWithBtnID(x: number, y: number) {
    const kitten = document.getElementById("kitten-image")
    const tempId = 'btn' + x + '-' + y
    const middleButton = document.getElementById(tempId)
    kitten!.style.position = "absolute"
    kitten!.style.left = middleButton?.offsetLeft!-15 + "px"
    kitten!.style.top = middleButton?.offsetTop!-15 + "px"
}

// noinspection JSUnusedGlobalSymbols
export const App = Vue.extend({
    data () {
        const vn = Math.floor(window.innerHeight * 0.85 / 86);
        const hn = Math.floor(window.innerWidth * 0.60 / 43);
        const x = Math.floor((vn - 1))
        const y = Math.floor((hn - 1)/2)

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
            currentX: x,
            currentY: y
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
            // TODO: Change the x, y generator here to make the kitten smarter
            const left = this.boardArray[this.currentX][this.currentY-1]
            const up = this.boardArray[this.currentX-1][this.currentY]
            if (this.currentX < this.currentY) {
                if (up == false) {
                    if (this.upMove(this.currentX, this.currentY) == true) {
                        updateKittenPosWithBtnID(this.currentX-1, this.currentY)
                        this.currentX -= 1
                    }
                }
            } else {
                if (this.leftMove(this.currentX, this.currentY) == true) {
                    if (left == false) {
                        updateKittenPosWithBtnID(this.currentX, this.currentY-1)
                        this.currentY -= 1
                    } else if (this.upMove(this.currentX, this.currentY) == true) {
                        updateKittenPosWithBtnID(this.currentX-1, this.currentY)
                        this.currentX -= 1
                    }
                }   
            }
            this.detectWinOrLose()
        },

        leftMove(x: number, y: number): boolean {
            const left = this.boardArray[x][y-1]
            const up = this.boardArray[x-1][y]
            const upLeft = this.boardArray[x-1][y-1]
            const upRight = this.boardArray[x-1][y+1]
            const down = this.boardArray[x+1][y]
            const downLeft = this.boardArray[x+1][y-1]
            const downRight = this.boardArray[x+1][y+1]
            if (y == 0) {
                return true
            } else if (x%2 != 0 && left==true && (up==true||upRight==true) && (down==true || downRight==true)) {
                return false
            } else if (x%2 == 0 && left==true && (up==true||upLeft==true) && (down==true || downLeft == true)) {
                return false
            } else {
                return this.leftMove(x, y-1)
            }
        },

        rightMove(x: number, y: number): boolean {
            const right = this.boardArray[x][y+1]
            const up = this.boardArray[x-1][y]
            const upLeft = this.boardArray[x-1][y-1]
            const upRight = this.boardArray[x-1][y+1]
            const down = this.boardArray[x+1][y]
            const downLeft = this.boardArray[x+1][y-1]
            const downRight = this.boardArray[x+1][y+1]
            if (y == this.horiN) {
                return true
            } else if (x%2 != 0 && right==true && (up==true||upRight==true) && (down==true || downRight==true)) {
                return false
            } else if (x%2 == 0 && right==true && (up==true||upLeft==true) && (down==true || downLeft == true)) {
                return false
            } else {
                return this.rightMove(x, y+1)
            }
        },

        upMove(x: number, y: number): boolean {
            const up = this.boardArray[x-1][y]
            const upLeft = this.boardArray[x-1][y-1]
            const upRight = this.boardArray[x-1][y+1]
            if (x == 0) {
                return true
            } else if (x%2 != 0) {
                if (up == true && upRight == true) {
                    return false
                } else if (up == true) {
                    return this.upMove(x-1, y+1)
                } else if (upRight == true) {
                    return this.upMove(x-1, y)
                } else {
                    return this.upMove(x-1, y)||this.upMove(x-1, y+1)
                }
            } else {
                if (up == true && upLeft == true) {
                    return false
                } else if (up == true) {
                    return this.upMove(x-1, y-1)
                } else if (upLeft == true) {
                    return this.upMove(x-1, y)
                } else {
                    return this.upMove(x-1, y)||this.upMove(x-1, y-1)
                }
            }
        },

        downMove(x: number, y: number): boolean {
            const down = this.boardArray[x+1][y]
            const downLeft = this.boardArray[x+1][y-1]
            const downRight = this.boardArray[x+1][y+1]
            if (x == 0) {
                return true
            } else if (x%2 != 0) {
                if (down == true && downRight == true) {
                    return false
                } else if (down == true) {
                    return this.downMove(x+1, y+1)
                } else if (downRight == true) {
                    return this.downMove(x+1, y)
                } else {
                    return this.downMove(x+1, y)||this.downMove(x+1, y+1)
                }
            } else {
                if (down == true && downLeft == true) {
                    return false
                } else if (down == true) {
                    return this.downMove(x+1, y-1)
                } else if (downLeft == true) {
                    return this.downMove(x+1, y)
                } else {
                    return this.downMove(x+1, y)||this.downMove(x+1, y-1)
                }
            }
        },

        detectWinOrLose() {
            if (this.currentX == 0 || this.currentY == 0) {
                console.log("YOU WIN!!!!!!!!")
            }
        }
    },

    mounted () {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });

        updateKittenPosWithBtnID(this.currentX, this.currentY)
    }
})
