const addEvents = () => {
    const button = document.querySelector('#button');
    const text = document.querySelector('#text');
    button.addEventListener('click', () => {
        text.innerText = parseInt(text.innerText) + 1;
    });
};
addEvents();