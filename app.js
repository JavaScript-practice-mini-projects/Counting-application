//DOM References
const counting = document.querySelector('.counting')
const resetButton = document.querySelector('.bx-reset')
const resetText = document.querySelector('.resetText')
const minusButton = document.getElementById('minusButton')
const plusButton = document.getElementById('plusButton')

let count = Number(localStorage.getItem('countNum')) || 0

// onload 
window.onload = () => {
    showLocalData()
}

// Event listener
plusButton.addEventListener('click', incrementCount )
minusButton.addEventListener('click', decrementCount )
resetButton.addEventListener('click', resetCount)

// call Event listener
resetButton.addEventListener('mouseenter', () => {
    resetText.style.display = 'block'
})
resetButton.addEventListener('mouseleave', () => {
    resetText.style.display = 'none'
})


/**
 * Number increment
 */
function incrementCount(){
    if(count === 10 || count >= 10 ){
        count = 0
    }else{
        count ++
    }
    updateLocalStorage();
}


/**
 * Number decrement
 */
function decrementCount(){
    if(count === -5){
        count = 0
    }else{
        count --
    }
    updateLocalStorage();
}

/**
 * reset counting Number
 */
function resetCount(){
    count = 0
    updateLocalStorage();
}

/**
 * display localStorage data
 */
function showLocalData(){
    counting.innerHTML = count;
}

/**
 * update local storage & display changed
 */
function updateLocalStorage(){
    localStorage.setItem('countNum', count);
    showLocalData();
}