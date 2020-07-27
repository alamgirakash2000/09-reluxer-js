const containerEl= document.querySelector('.container')
const textEl= document.getElementById('text')

timercontrol()
function timercontrol(){
    textEl.textContent='Breath In'
    containerEl.className= 'container grow'

    setTimeout(()=>{
        textEl.textContent='Hold'
        containerEl.className= 'container hold'

        setTimeout(()=>{
            textEl.textContent='Breath Out'
            containerEl.className= 'container shrink'
        },1500)
    },3000)
}

setInterval(timercontrol, 7500)