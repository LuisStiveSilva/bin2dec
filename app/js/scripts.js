let input = document.getElementById('binary')
let output = document.getElementById('decimal')
let button = document.getElementById('button')

button.addEventListener('click',()=>{
    output.value = conversion(input.value)
})

//Solo deja insertar 0 y 1
input.addEventListener('keypress',(key)=>{
    if (key.code != "Numpad1" && key.code != "Numpad0" && key.code!="Digit0" && key.code!="Digit1") {
        key.preventDefault();
    }
})

input.addEventListener('input', ()=>{
    if (input.value.length > 8) input.value = input.value.slice(0, input.maxLength);
})

const conversion = (binary) => {
    return parseInt(binary, 2)
}
