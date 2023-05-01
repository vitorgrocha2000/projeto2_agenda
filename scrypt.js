const form = document.getElementById('form_contato');

let numeros = []
let contatos = []
let linha = ''

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adiciona_linha()

})


function adiciona_linha() {
    let nome_contato = document.querySelector('#nome_contato');
    let numero_contato = document.querySelector('#numero_contato');

    if (contatos.includes(nome_contato.value)) {
        alert(`O contato "${nome_contato.value}" já foi inserida`)
    } else {
        numeros.push(numero_contato.value);
        contatos.push(nome_contato.value);

        linha += `<tr>`
        linha += `<td>${nome_contato.value}</td>`
        linha += `<td>${numero_contato.value}</td>`
        linha += `<td>${numero_contato.value >= nota_min ? img_aprovado : img_reprovado}</td>`
        // linha += `<td>${botao_remove}</td>`
        linha += `</tr>`
    }

    nome_contato = ''
    numero_contato = ''
}