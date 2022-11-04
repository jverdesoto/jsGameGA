import './scss/styles.scss';
// import { Component } from './components/component';
// import axios from 'axios';

// const component = new Component();
// component.hello();
// component.testMultiplyMethod(5,25);



// const vehiculos = {
// 	marca: 'Fiat',
// 	year: 1982,
// 	color: 'Azul'
// }
// // eslint-disable-next-line no-undef
// console.log(vehiculos);

// const url = 'https://jsonplaceholder.cypress.io/todos';

// axios.get(url).then(response => {
// 	const todo = response.data;
// 	let index = 0;
// 	for (const key in todo) {
// 		if (todo[key].completed) {
// 			index ++;
// 			// eslint-disable-next-line no-undef
// 			console.log(`%c ${index}.- ${todo[key].title}`, 'color:purple');
// 		}
// 	}

// });

document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault();
	const titulo = <HTMLInputElement>document.getElementById('titulo');
	const area = <HTMLInputElement>document.getElementById('area');
	const resultado = <HTMLInputElement>document.getElementById('result');
	let el;
	let elTitulo;
	let elContent;
	let edit;
	let trash;
	let iconos;
	let hr;
	if (titulo.value === '' || area.value === '') {
		alert('ingresa los campos');
		return;
	}

	el = document.createElement('div');
	el.classList.add('nota');
	let unique = `${document.getElementsByClassName('nota').length}`
	el.setAttribute("id", unique);

	elTitulo = document.createElement('h3');
	elTitulo.innerHTML = titulo.value;
	el.appendChild(elTitulo);

	elContent = document.createElement('div');
	elContent.innerHTML = area.value;
	el.appendChild(elContent);

	iconos = document.createElement('div');
	iconos.classList.add('iconos');
	el.appendChild(iconos);

	edit = document.createElement('button');
	edit.innerHTML = '\u{2710}';
	edit.setAttribute('id', 'edit');
	iconos.appendChild(edit);

	trash = document.createElement('button');
	trash.innerHTML = "\u{1F5D1}";
	trash.setAttribute('id', 'delete');
	iconos.appendChild(trash);

	hr = document.createElement('hr');
	el.appendChild(hr);

	resultado.prepend(el);
	titulo.value = '';
	area.value = '';
});

document.getElementById('edit').addEventListener('click', (e) => {
	e.preventDefault();
	
	
});

document.getElementById('delete').addEventListener('click', (e) => {
	e.preventDefault();
	el.classList.remove("nota");
});

// function Delete(unique) {
// 	const el = <HTMLInputElement>document.getElementById(unique);
// 	el.classList.remove("nota");
// }