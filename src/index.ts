import './scss/styles.scss';
// import { Component } from './components/component';
import axios from 'axios';

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

const url = 'https://jsonplaceholder.cypress.io/todos/';

axios.get(url).then(response => {
	const todo = response.data;
	let index = 0;
	for (const key in todo){
		if (todo[key].completed){
			index++;
			// eslint-disable-next-line no-undef
			console.log(`%c ${index}.- ${todo[key].title}`, 'color:yellow;');
		}
	}
});


// interface Api {
// 	userId: number,
// 	id: number,
// 	title: string,
// 	completed: boolean
// 	}

// const api: Api = (objeto) => {
// 	let 
// }