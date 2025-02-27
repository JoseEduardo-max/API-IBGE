const SELECT_REGIAO  = document.getElementById('regiao');
const SELECT_ESTADO  = document.getElementById('estado');
const SELECT_CIDADES = document.getElementById('cidade');

function atualizarRegioes() {
    let regioes = [
        'Norte',
        'Nordeste',
        'Sul',
        'Sudeste',
        'Centro Oeste',
    ];

    regioes = regioes.map(cada => `<option>${cada}</option>`);

    SELECT_REGIAO.innerHTML += regioes;
};


function atualizarEstados() {
    let estados = [
        'CE',
        'SP',
        'RS',
    ];

    estados = estados.map(cada => `<option>${cada}</option>`);

    SELECT_ESTADO.innerHTML += estados;
};


function atualizarCidades() {
    let cidades = [
        'Fortaleza',
        'Zona sul',
        'Gramado',
    ];

    cidades = cidades.map(cada => `<option>${cada}</option>`);

    SELECT_CIDADES.innerHTML += cidades;
};


atualizarRegioes();