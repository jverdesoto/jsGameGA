import './scss/styles.scss';
// import { Component } from './components/component';
// import axios from 'axios';

// const component = new Component();
// component.hello();
// component.testMultiplyMethod(5,25);

// interface Vehiculos {
// 	marca: string,
// 	year: number,
// 	color: string,
// 	modelo: string,
// 	puertas: number,
// 	}

// const vehiculos: Vehiculos = {
// 	marca: 'Fiat',
// 	year: 1982,
// 	color: 'blue',
// 	modelo: '500',
// 	puertas: 4
// }

// eslint-disable-next-line no-undef
// console.log(vehiculos);

// const url = 'https://jsonplaceholder.cypress.io/todos/';

// axios.get(url).then(response => {
// 	const todo = response.data;
// 	let index = 0;
// 	for (const key in todo){
// 		if (todo[key].completed){
// 			index++;
// 			// eslint-disable-next-line no-undef
// 			console.log(`%c ${index}.- ${todo[key].title}`, 'color:yellow;');
// 		}
// 	}
// });


// interface Api {
// 	userId: number,
// 	id: number,
// 	title: string,
// 	completed: boolean
// 	}

// const api: Api = (objeto) => {
// 	let 
// }

document.getElementById('submit').addEventListener('click', (event) => {
	//funcion de js que previene cualquier accion por defecto: event.preventDefault();
	event.preventDefault();
	const titulo = document.getElementById('titulo');
	const area = document.getElementById('area');
	const resultado = document.getElementById('result');
	let el;
	let elTitulo;
	let elContent;
	let hr;
	//por si quedan elementos vacíos
	if ( titulo.value === '' || area.value === '') {
		alert ('Por favor ingresa todos los campos');
		 return;
	}

	//crear los elementos html
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
	elTitulo.value = '';
	area.value = '';

});

