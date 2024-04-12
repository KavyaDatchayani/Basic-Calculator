let input = document.querySelectorAll('input');
let result = document.querySelector('.equal');
let display = document.querySelector('input[name="valueDisplay"]');
let deleteValue = document.querySelector('.delete-All');
let clearOne = document.querySelector('.clear');

input.forEach(function (input) {
    input.addEventListener('click', function (e) {
        let inputValue = e.target.value
        display.value += inputValue
    })
});

result.addEventListener('click', function () {
    if (display.value === "") {
        display.value = "Enter Value"
    } else {
        try {
            let ans = eval(display.value);
            display.value = ans;
            console.log(display.value)
        }
        catch (error) {
            display.value = 'Error'
        }

    }
});

clearOne.addEventListener('click', function () {
    display.value = display.value.valueOf().slice(0, -1);
});



deleteValue.addEventListener('click', function () {
    display.value = '';
});