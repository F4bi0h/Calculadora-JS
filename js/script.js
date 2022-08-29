function calcular(i) {
    let campo = document.getElementById('campo');
    let id = document.getElementById(i);
    id.addEventListener('click', function (){
        if(id.value === '=') {
            let resultado = eval(document.getElementById('campo').value);
            return campo.value = resultado;
        }
        if(id.value === 'c') {
            return campo.value = '';
        }
        campo.value += id.value;    
    });
}

const buttons = document.querySelectorAll('.button');

for(var i = 0; i < buttons.length; i++) {
    var value = buttons[i].id;
    calcular(value);
}