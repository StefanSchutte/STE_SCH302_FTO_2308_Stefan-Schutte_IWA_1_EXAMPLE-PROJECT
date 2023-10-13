// @ts-check

// const id = 12345
//
// /**
//  * the logged in user{@link id}
// */
// const user= 'Stefan'
//
// console.log(user)
//
// parseInt(null)

//var user = 100;

// console.warn(user);
// console.error(user);
// console.info(user);
// console.debug(user);

//throw new Error('something went wrong')

//console.log('helo world');

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

//console.log(number, subtract, add)

const subtractHandler = () => {
    console.log('subtract was clicked', subtract);
    const newValue = parseInt(number.value ) - STEP_AMOUNT;
    number.value = newValue;

    if (add.disabled === true){
        add.disabled = false;
    }

    if (newValue <= MIN_NUMBER){
        subtract.disabled = true;
    }else{
        subtract.disabled = false;
    }
}
const addHandler = () => {
    console.log('add was clicked');
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (subtract.disabled === true){
        subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true;
    }else{
        add.disabled = false;
    }
}

// parseInt('123')
//(123).toString()

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);