import './scss/styles.scss';
import { Component } from './components/component';
import axios from 'axios';

const component = new Component();
component.hello();
component.testMultiplyMethod(5, 25);

const vehiculos = {
	maraca: 'ford',
	color: 'red',
	año: 1982
}
/* eslint-disable no-undef */
console.log(vehiculos);

const url = 'https://jsonplaceholder.cypress.io/todos/1';

axios.get(url).then(response => {
	const todo = response.data;
	/* eslint-disable no-undef */
	console.log(todo);
})