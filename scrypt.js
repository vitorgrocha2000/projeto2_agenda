const form = document.getElementById('form_contato');

let numeros = []
let contatos = []
let linha = ''

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adiciona_linha()
    atualiza_tabela()
    // imprime_tabela()
    atualiza_quantidade()

})


function adiciona_linha() {
    let nome_contato = document.querySelector('#nome_contato');
    let numero_contato = document.querySelector('#numero_contato');

    if (contatos.includes(nome_contato.value)) {
        alert(`O contato "${nome_contato.value}" já foi inserida`)
    } else {
        const numero_contato = document.getElementById("numero_contato");

        if (!numero_contato.value.startsWith("+")) {
            alert("Por favor, adicione o código do país com o sinal de +");
            return false;
        } else {
            numeros.push(numero_contato.value);
            contatos.push(nome_contato.value);

            linha += `<tr>`
            linha += `<td>${nome_contato.value}</td>`
            linha += `<td><a id="ligue" href="tel:${numero_contato.value}">${numero_contato.value}</a></td>`
            // linha += `<td>${numero_contato.value}</td>`
            linha += `</tr>`

            nome_contato.value = ''
            numero_contato.value = ''
        }
    }
}

function atualiza_tabela() {
    const table_body = document.querySelector('tbody')
    table_body.innerHTML = linha
}


function atualiza_quantidade() {

    let quantidade = '<tr>'
    quantidade += `<td>Quantidade de contatos:</td>`
    quantidade += `<td>${numeros.length}</td>`
    quantidade += `</tr>`

    const quantidade_contatos = document.querySelector('tfoot')
    quantidade_contatos.innerHTML = quantidade
}

// function imprime_tabela() {
//     console.log(contatos)
//     console.log(numeros)
//     console.log(linha)
// }