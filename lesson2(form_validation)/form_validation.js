document.querySelector(".buttonStyle").onclick =  () => {
    console.log(document.querySelector('#three').value);
    document.querySelector('button').style.backgroundColor =
        document.querySelector('#one').value
}

document.querySelector('#four').oninput = () => {
    console.log(document.querySelector('#four').value);
    document.querySelector("span").innerHTML = document.querySelector('#four').value;
}
document.querySelector('#btn-2').onclick = () => {
    console.log(document.querySelector('#five').value);
    let myCheckBox = document.querySelector('#five');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
    console.log('Нажат')
    } else {
        console.log('Не нажат')
    }
}
document.querySelector('#btn-6').onclick = (event) => {
    event.preventDefault();
    let text = document.querySelector('#six');
    console.log(text.value);
    text.value = "Super";
    let form = document.querySelector('form')
    console.log(form.elements.six.value);
    console.log(form.elements.seven.value);
}