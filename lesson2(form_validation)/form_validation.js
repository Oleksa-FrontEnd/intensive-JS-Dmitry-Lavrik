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