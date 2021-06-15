function createCalculator() {
    return {
        display: document.querySelector('#currentValue'),

        start() {
            this.clickButton(),
            this.keyPressed()
        },

        keyPressed() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.makeCalculations()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        makeCalculations() {
           let count = this.display.value
           try {
            count = eval(count)

            if(!count) {
                alert('conta invalida')
                return
            }
            this.display.value = count
           } catch(e){
                alert('conta invalida')
                return
           }
        },

        clickButton() {
            document.addEventListener('click', e => {
                const el = e.target;
              
                if(el.classList.contains('btn-num')) {
                   this.btnStopDisplay(el.innerText)
                }

                if(el.classList.contains('orange')) {
                   this.btnStopDisplay(el.innerText)
                }

                if(el.classList.contains('clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-equals')) {
                    this.makeCalculations()
                }
            })
        },

        btnStopDisplay(valor) {
            this.display.value += valor
        }
        
    }
}
const calculator = createCalculator()
calculator.start()
