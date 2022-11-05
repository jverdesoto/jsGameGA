import './scss/styles.scss';

type value as HTMLElement;

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo');
    const area = document.getElementById('area');
    const resultado = document.getElementById('result');
    // type value as HTMLElement;
    let el;
    let elTitulo;
    let elContent;
    let hr;
    if (titulo.value === '' || area.value === '') {
        alert('Por favor ingresa todos los campos');
        return;
    }

    el = document.createElement('div');
    el.classList.add('nota');

    elTitulo = document.createElement('h3');
    elTitulo.innerHTML = titulo.value;
    el.appendChild(elTitulo);

    elContent = document.createElement('div');
    elContent.innerHTML = area.value;
    el.appendChild(elContent);

    hr = document.createElement('hr');
    el.appendChild(hr);

    resultado.prepend(el);
    titulo.value = '';
    area.value = '';


});