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
        const vn = Math.floor((window.innerHeight - 55) * 0.85 / 86);
        const hn = Math.floor(window.innerWidth * 0.75 / 43);
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
            currentY: y,

            // For tutorial carousel
            slide: 0,
            sliding: false
        };
    },

    methods: {
        onResize () {
            this.windowH = window.innerHeight;
            this.windowW = window.innerWidth;

            const divH = (this.windowH - 55) * 0.85;
            this.vertiN = Math.floor(divH / 86);
            const divW = this.windowW * 0.75;
            this.horiN = Math.floor(divW / 43);
        },

        getMainContainerStyle () {
            const gameContainerHeight = this.windowH - 100
            return {
                marginTop: gameContainerHeight * 0.15 / 4 + 'px'
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
            console.log(this.vertiN, this.horiN)
            if (this.currentX < this.currentY) {
                if (this.canUpMove(this.currentX, this.currentY)) {
                    this.upMove()
                } else if (this.canLeftMove(this.currentX, this.currentY)) {
                    this.leftMove()
                } else if (this.canRightMove(this.currentX, this.currentY)) {
                    this.rightMove()
                } else if (this.canDownMove(this.currentX, this.currentY)) {
                    this.downMove()
                } else {
                    this.$bvModal.show("win-modal")
                }
            } else {
                if (this.canLeftMove(this.currentX, this.currentY)) {
                    this.leftMove()
                } else if (this.canUpMove(this.currentX, this.currentY)) {
                    this.upMove()  
                } else if (this.canDownMove(this.currentX, this.currentY)) {
                    this.downMove()
                } else if (this.canRightMove(this.currentX, this.currentY)) {
                    this.rightMove()
                } else {
                    this.$bvModal.show("win-modal")
                }
            }
            this.detectWinOrLose()
        },

        canLeftMove(x: number, y: number): boolean {
            const left = this.boardArray[x][y-1]
            if (y == 0) {
                return true
            } else if (left) {
                return false
            } else {
                return this.canLeftMove(x, y-1)
            }
        },

        canRightMove(x: number, y: number): boolean {
            const right = this.boardArray[x][y+1]
            if (y == this.horiN) {
                return true
            } else if (right) {
                return false
            } else {
                return this.canRightMove(x, y+1)
            }
        },

        canUpMove(x: number, y: number): boolean {
            const up = this.boardArray[x-1][y]
            const upLeft = this.boardArray[x-1][y-1]
            const upRight = this.boardArray[x-1][y+1]
            if (x == 1 && (!up || !upRight)) {
                return true
            }  else if (x == 1 && up && upRight) {
                return false
            } else if (x%2 != 0) {
                if (up && upRight) {
                    return false
                } else if (up) {
                    return this.canUpMove(x-1, y+1)
                } else if (upRight) {
                    return this.canUpMove(x-1, y)
                } else {
                    return this.canUpMove(x-1, y)||this.canUpMove(x-1, y+1)
                }
            } else {
                if (up && upLeft) {
                    return false
                } else if (up) {
                    return this.canUpMove(x-1, y-1)
                } else if (upLeft) {
                    return this.canUpMove(x-1, y)
                } else {
                    return this.canUpMove(x-1, y)||this.canUpMove(x-1, y-1)
                }
            }
        },

        canDownMove(x: number, y: number): boolean {
            const down = this.boardArray[x+1][y]
            const downLeft = this.boardArray[x+1][y-1]
            const downRight = this.boardArray[x+1][y+1]
            if (x == this.vertiN*2-2 && (!down || !downRight)) {
                return true
            } else if (x == this.vertiN*2-2 && down && downRight) {
                return false
            } else if (x%2 != 0) {
                if (down && downRight) {
                    return false
                } else if (down) {
                    return this.canDownMove(x+1, y+1)
                } else if (downRight) {
                    return this.canDownMove(x+1, y)
                } else {
                    return this.canDownMove(x+1, y)||this.canDownMove(x+1, y+1)
                }
            } else {
                if (down && downLeft) {
                    return false
                } else if (down) {
                    return this.canDownMove(x+1, y-1)
                } else if (downLeft) {
                    return this.canDownMove(x+1, y)
                } else {
                    return this.canDownMove(x+1, y)||this.canDownMove(x+1, y-1)
                }
            }
        },

        leftMove() {
            updateKittenPosWithBtnID(this.currentX, this.currentY-1)
            this.currentY -= 1
        },
        rightMove(){
            updateKittenPosWithBtnID(this.currentX, this.currentY+1)
            this.currentY += 1
        },
        upMove() {
            const up = this.boardArray[this.currentX-1][this.currentY]
            const upLeft = this.boardArray[this.currentX-1][this.currentY-1]
            if (this.currentX%2 == 0 && !upLeft && this.canUpMove(this.currentX-1, this.currentY-1)) {
                updateKittenPosWithBtnID(this.currentX-1, this.currentY-1)
                this.currentX -= 1
                this.currentY -= 1
            } else if (this.currentX == 1 && !up) {
                updateKittenPosWithBtnID(this.currentX-1, this.currentY)
                this.currentX -= 1
            } else if (!up && this.canUpMove(this.currentX-1, this.currentY)) {
                updateKittenPosWithBtnID(this.currentX-1, this.currentY)
                this.currentX -= 1
            } else {
                updateKittenPosWithBtnID(this.currentX-1, this.currentY+1)
                this.currentX -= 1
                this.currentY += 1   
            }
        },

        downMove() {
            const down = this.boardArray[this.currentX+1][this.currentY]
            const downLeft = this.boardArray[this.currentX+1][this.currentY-1]
            if (this.currentX%2 == 0 && !downLeft && this.canDownMove(this.currentX+1, this.currentY-1)) {
                updateKittenPosWithBtnID(this.currentX+1, this.currentY-1)
                this.currentX += 1
                this.currentY -= 1
            } else if (this.currentX == this.vertiN*2-2 && !down) {
                updateKittenPosWithBtnID(this.currentX+1, this.currentY)
                this.currentX += 1
            }else if (!down && this.canDownMove(this.currentX+1, this.currentY)) {
                updateKittenPosWithBtnID(this.currentX+1, this.currentY)
                this.currentX += 1
            } else {
                updateKittenPosWithBtnID(this.currentX+1, this.currentY+1)
                this.currentX += 1
                this.currentY += 1   
            }
        },
        
        detectWinOrLose() {
            if (this.currentX == 0 || this.currentY == 0) {
                this.$bvModal.show("lose-modal")
            }
        },

        handleNewGame() {
            location.reload()
        },

        // For tutorial carousel
        onSlideStart() {
            this.sliding = false
        },
        onSlideEnd() {
            this.sliding = false
        }
    },

    mounted () {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });

        updateKittenPosWithBtnID(this.currentX, this.currentY)
    }
})
