function blink(){

};

function shift_blink(){

};

function turn_off_blink(){

};

function update_view(results,view){

};

function parse_view(view) {

};

function compute() {

}; 

function draw_on_view() {

};

function run_calculation(result) {
    return eval(result);
}

var calc_result = '';

const screen = document.querySelector('#screen');
const button0 = document.querySelector('#zero');
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');

const all_clear = document.querySelector('#clear');
const add = document.querySelector('#plus');
const subtract = document.querySelector('#minus');
const divide = document.querySelector('#division');
const multiply = document.querySelector('#multiplication');
const equals = document.querySelector('#equals');
const left_parentheses = document.querySelector('#left-parentheses');
const right_parentheses = document.querySelector('#right-parentheses');
const decimal = document.querySelector('#decimal');
const modulo = document.querySelector('#modulo');
const deprecate = document.querySelector('#deprecate');


button0.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '0';
    calc_result += '0';

});
button1.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '1';
    calc_result += '1';

});
button2.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '2';
    calc_result += '2';

});
button3.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '3';
    calc_result += '3';

});
button4.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '4';
    calc_result += '4';

});
button5.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '5';
    calc_result += '5';

});
button6.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '6';
    calc_result += '6';

});
button7.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '7';
    calc_result += '7';

});
button8.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '8';
    calc_result += '8';

});
button9.addEventListener('click',e => {
    // console.log(e.target);
    screen.textContent += '9';
    calc_result += '9';
});
all_clear.addEventListener('click', e => {
    screen.textContent = '';
    calc_result = '';
});
add.addEventListener('click', e => {
    screen.textContent += '+';
    calc_result += '+';

});
subtract.addEventListener('click', e => {
    screen.textContent += '-';
    calc_result += '-';

});
multiply.addEventListener('click', e => {
    screen.textContent += '*';
    calc_result += '*';

});
divide.addEventListener('click', e => {
    screen.textContent += '/';
    calc_result += '/';

});
equals.addEventListener('click', e => {
    if (calc_result != '') {
    // console.log('before',calc_result);
    screen.textContent = ('= ' + String(run_calculation(calc_result)));
    calc_result = String(run_calculation(calc_result));
    // console.log('after',calc_result);
    }
    else {
        screen.textContent = '= ';
    }
});

left_parentheses.addEventListener('click', e => {
    screen.textContent += '(';
    calc_result += '(';
});

right_parentheses.addEventListener('click', e => {
    screen.textContent += ')';
    calc_result += ')';
});

decimal.addEventListener('click',e => {
    screen.textContent += '.';
    calc_result += '.';
});

modulo.addEventListener('click',e => {
    screen.textContent += '%';
    calc_result += '%';
});

deprecate.addEventListener('click', e => {
    if (screen.textContent !== '' && calc_result !== '') {
        screen.textContent = screen.textContent.substr(0,screen.textContent.length - 1);
        calc_result = calc_result.substr(0,calc_result.length -1); 
        // pass by value here
    }
    
});