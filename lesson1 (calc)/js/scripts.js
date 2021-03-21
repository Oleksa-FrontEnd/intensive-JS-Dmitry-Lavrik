window.onload = function(e){
    
    let btnSum = document.querySelector('input[name=sum]');
    let btnMin = document.querySelector('input[name=minus]');
    let btnMul = document.querySelector('input[name=multiplyBy]');
    let btnDiv = document.querySelector('input[name=dividedBy]');
    let inp1 = document.querySelector('input[name=num1]');
    let inp2 = document.querySelector('input[name=num2]');
    let span = document.querySelector('.res');
    
    btnSum.onclick = function(){
        var res = parseInt(inp1.value) + parseInt(inp2.value);
        span.innerHTML = res;
    }
    btnMin.onclick = function(){
        var res = parseInt(inp1.value) - parseInt(inp2.value);
        span.innerHTML = res;
    }
    btnMul.onclick = function(){
        var res = parseInt(inp1.value) * parseInt(inp2.value);
        span.innerHTML = res;
    }
    btnDiv.onclick = function(){
        var res = parseInt(inp1.value) / parseInt(inp2.value);
        span.innerHTML = res;
    }
}

