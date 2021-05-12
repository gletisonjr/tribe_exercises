function addStates() {
    let stateSelection = document.querySelector('.selector');
    let states = ['Acre',
                'Alagoas',
                 'Amapá',
                 'Amazonas',
                 'Bahia',
                 'Ceará',
                'Distrito Federal',
                'Espirito Santo',
                'Goiás',
                'Maranhão',
                'Mato Grosso',
                'Mato Grosso do Sul',
                'Minas Gerais',
                'Pará',
                'Paraíba',
                'Pernambuco',
                'Piauí',
                'Rio de Janeiro',
                'Rio Grande do Norte',
                'Rio Grande do Sul',
                'Rondônia',
                'Roraima',
                'Santa Catarina',
                'São Paulo',
                'Sergipe',
                'Tocantins'];

    console.log(stateSelection);

    for (let index = 0; index < states.length; index += 1) {
        const stateOption = document.createElement('option');
        stateOption.value = states[index];
        stateOption.text = states[index];

        console.log(stateOption);

        stateSelection.appendChild(stateOption);
    }
}
addStates();