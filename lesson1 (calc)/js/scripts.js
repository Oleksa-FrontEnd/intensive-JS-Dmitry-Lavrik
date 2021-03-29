window.onload = function(e){
    
    let btnSum = document.querySelector('input[name=sum]');
    let btnMin = document.querySelector('input[name=minus]');
    let btnMul = document.querySelector('input[name=multiplyBy]');
    let btnDiv = document.querySelector('input[name=dividedBy]');
    let inp1 = document.querySelector('input[name=num1]');
    let inp2 = document.querySelector('input[name=num2]');
    let span = document.querySelector('.res');
    
    btnSum.onclick = function(){
        calcForm('+');
        this.disabled = true;   //делаем кнопку не активной
        //this.setAttribute('disabled', 'disabled');
    }
    btnMin.onclick = function(){
        calcForm('-');
        this.disabled = true;
    }
    btnMul.onclick = function(){
        calcForm('*');
        this.disabled = true;
    }
    btnDiv.onclick = function(){
        calcForm('/');
        this.disabled = true;
    }

    //делаем кнопки активными после ввода newЗначения в поле input
    inp1.oninput = btnEnable;
    inp2.oninput = btnEnable;

    function btnEnable() {
        //btnSum.removeAttribute('disabled')
        btnSum.disabled = false;
        btnMin.disabled = false;
        btnMul.disabled = false;
        btnDiv.disabled = false;
    }

    function calcForm(op) {
        let a = parseInt(inp1.value);
        let b = parseInt(inp2.value);
        let res;

        if (op === '+') {
            res = a + b;
        } else if ( op === '-') {
            res = a - b;
        } else if ( op === '*') {
            res = a * b;
        } else if ( op === '/') {
            res = a / b;
            if (b === 0) {
                res = "на ноль делить нельзя"
            }
        }
        span.innerHTML = res;
    }
}

