
import './scss/styles.scss';
import { Component } from './components/component';
import axios from 'axios';  // Componente de Node que permite importar información. Es como FETCH, pero AXIOS permite configurar autenticaciones hacia una API y es más fácil.

const component: Component = new Component();  // Es tipo componente porque será un componente de la clase Componente
component.hello();
component.testMultiplyMethod(5,25);

// let variable: any = '55';   // Evitar el tipo ANY a toda costa.

// interface Vehiculos {
// 	color: string,
// 	marca: string,
// 	year: number,
// 	modelo: string,
// 	puertas: number,
// }
// const vehiculos: Vehiculos = {
// 	color: 'Azul',
// 	marca: 'Fiat',
// 	year: 1982,
// 	modelo: 'Palio',
// 	puertas: 5,
// }
// // eslint-disable-next-line no-undef
// console.log(vehiculos);

const url = 'https://jsonplaceholder.cypress.io/todos';

axios.get(url).then(response => {  // Conecta con la API
	const todo = response.data;
	// eslint-disable-next-line no-undef
	console.log(todo);
});


axios.get(url).then(response => {
	const todo = response.data;
	// eslint-disable-next-line no-undef
	console.log(todo);
	let index = 0;
	for (const key in todo) {
		if (todo[key].completed) {
			index++
			// eslint-disable-next-line no-undef
			console.log(`%c ${index}.- ${todo[key].title}`, 'color: purple; font-weight:bold');  //%c significa que lo que le sigue tiene estilos.
		}
	}
});
