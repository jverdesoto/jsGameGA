import './scss/styles.scss';
// import { Component } from './components/component';
// import axios from 'axios';

// const component = new Component();
// component.hello();
// component.testMultiplyMethod(5,25);

// interface Vehiculos {
// 	color: string,
// 	combustible: string,
// 	marca: string,
// 	modelo: string,
// 	puertas: number,
// 	traccion: string,
// 	year: number
// }


// const vehiculos: Vehiculos = {
// 	color: 'Azul',
// 	combustible: 'Gasolina',
// 	marca: 'Fiat',
// 	modelo: 'Punto',
// 	puertas: 5,
// 	traccion: '4x2',
// 	year: 1982
// }

// // eslint-disable-next-line no-undef
// console.log(vehiculos);

// const url = 'https://jsonplaceholder.cypress.io/todos';

// axios.get(url).then(response => {
// 	const todo = response.data;
// 	let index = 0;
// 	for (const key in todo) {
// 		if(todo[key].completed) {
// 			index ++;
// 			// eslint-disable-next-line no-undef
// 			console.log(`%c ${index},- ${todo[key].title}`, 'color:blue; font-weight: bold');
// 		}
// 	}
// });

document.getElementById('submit').addEventListener('click', (event) => {
	event.preventDefault();
	const titulo = document.getElementById('titulo');
	const area = document.getElementById('area');
	const resultado = document.getElementById('result');
	let el;
	let elTitulo;
	let elContent;
	let hr;

	if (titulo.value === '' || area.value === '') {
		alert('Por favor, rellena todos los campos');
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