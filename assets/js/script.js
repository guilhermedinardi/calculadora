function Calculator() {
    this.display = document.querySelector('#currentValue')

    this.start = () => {
        this.clickButton(),
        this.keyPressed()
    },

    this.keyPressed = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.makeCalculations()
            }
        })
    },

    this.clearDisplay = () => {
        this.display.value = ''
    },

    this.makeCalculations = () => {
        try {
            const count = eval(this.display.value)
        
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

    this.clickButton = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            
            if(el.classList.contains('btn-num')) this.btnStopDisplay(el)

            if(el.classList.contains('orange')) this.btnStopDisplay(el)

            if(el.classList.contains('clear')) this.clearDisplay()

            if(el.classList.contains('btn-equals')) this.makeCalculations()
        })
    },

    this.btnStopDisplay = el => {
        this.display.value += el.innerText 
        this.display.focus()
    }
}
const calculator = new Calculator()
calculator.start()
