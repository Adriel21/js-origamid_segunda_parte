// window.alert('Alo');

const href = window.location.href;

console.log(href);

if(href == 'http://127.0.0.1:5501/01_o_que_e_dom/') {
    console.log('É igual');
}


const x = document.querySelector('h1');
const xSelecionado = x.classList;
console.log(xSelecionado);
// x.addEventListener('mouseover', function() {
//     x.innerHTML = 'Foi';
// })

// funciona porque window é um método global
// alert('teste');

function callbackh1(){
    console.log('Clicou em', x.innerText);
}

x.addEventListener('click', callbackh1);