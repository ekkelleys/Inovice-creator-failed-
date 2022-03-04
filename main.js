const mowEL = document.getElementById("mow-btn")
const washEL = document.getElementById("wash-btn")
const weedEL = document.getElementById("weed-btn")
const buttons = document.querySelectorAll('.btn-list')
const invoiceBtn = document.getElementById("invoice-btn")

const taskList = {carWash: 10, mowLawn: 20, pullWeeds: 30};
const carwashObj = {"Car Wash": 10}
const mowObj = {"Mow Lawn": 20}
const weedObj ={"Pull Weeds": 30}


let washValue = document.getElementById("car-value")
let mowValue = document.getElementById("mow-value")
let weedValue = document.getElementById("weed-value")

const resultDiv = document.getElementById("values")


let taskArr = []
let priceArr = []
let emptyStr = ""
let total = 0

for(const btn of buttons){
    btn.addEventListener('click', function(){
        if(this.value == "Car Wash"){
            localStorage.setItem(this.value, "10")
            taskArr.push(this.value)
            priceArr.push(washEL[this.value])
            total += washEL[this.value]
            render();
            //disabling the button once submited.
            this.disable = true;

            
        }

        else if (this.value == "Mow Lawn"){
            localStorage.setItem(this.value, "20")
            taskArr.push(this.value)
            priceArr.push(mowEL[this.value])
            total += mowEL[this.value]
            render();
            this.disable = true;
            
        }
        else if( this.value == "Pull Weeds"){
            localStorage.setItem(this.value, "30")
            taskArr.push(this.value)
            priceArr.push(weedEL[this.value])
            total += weedEL[this.value]
            render();
            this.disable = true;
        }
    });
    function render(){
        resultDiv.innerHTML= ""

            customTaskList.forEach((priceArr, index)=>{
                priceArr = taskArr[index]
                resultDiv.innerHTML += 
                `<div class="column">
                    ${priceArr[i]}$
                </div>`
            })

            totalPrice.innerHTML = `\$ ${total}`
            console.log(total)
        
        }
    
    }



// I need listeners for each button so i think this makes sense.



// This probably isn't right but helps me visualize what i need to do
function calculate(){
    
}
//not right either but ill need to clear each one to empty string maybe?

function reset(){
    washValue.innerHTML = emptyStr
    mowValue.innerHTML = emptyStr
    weedValue.innerHTML = emptyStr

}


invoiceBtn.addEventListener("click", function(){
    reset()
})





