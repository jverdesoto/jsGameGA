import { sources } from 'webpack';
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

/* ******************** AÑADIR TITULO Y TEXTO A LAS NOTAS ****************** */

document.getElementById('submit').addEventListener('click', (event) => {
	event.preventDefault();
	const titulo = <HTMLInputElement>document.getElementById('titulo');
	const area = <HTMLInputElement>document.getElementById('area');
	const resultado = document.getElementById('result');
	let el;
	let elTitulo;
	let elContent;
	let hr;
	let titYNot;
	let iconos;

	if (titulo.value === '' || area.value === '') {
		alert('Por favor, rellena todos los campos');
		return;
	}

	el = document.createElement('div');				/* Creamos un DIV y le asignamos la variable "el" */
	el.classList.add('nota');						/* Le asignamos la clase NOTA */
	
	iconos = document.createElement('div');			/* Creamos un DIV y le asignamos la variable "titYNot" */
	iconos.classList.add('iconos');					/* Le asignamos la clase TN */
	el.appendChild(iconos);							/* Metemos el DIV dentro del DIV "el" */

	const pencil = document.createElement('i');	/* Creamos un IMG y le asignamos la constante "pencil" */
	pencil.classList.add('lapiz');
	pencil.innerHTML = '✎';
	// pencil.src = './assets/images/lapiz.png';	/* A IMG le añadimos el atributo SRC y le metemos la ruta a la imagen */
	iconos.appendChild(pencil);						/* Metemos el IMG con su contenido dentro del DIV "el" */

	const trash = document.createElement('i');	/* Creamos un IMG y le asignamos la constante "trush" */
	trash.classList.add('cubo');
	trash.innerHTML = '🗑';
	// trush.src = './assets/images/papelera.png';	/* A IMG le añadimos el atributo SRC y le metemos la ruta a la imagen */
	iconos.appendChild(trash);						/* Metemos el IMG con su contenido dentro del DIV "el" */

	titYNot = document.createElement('div');		/* Creamos un DIV y le asignamos la variable "titYNot" */
	titYNot.classList.add('tn');					/* Le asignamos la clase TN */
	el.appendChild(titYNot);						/* Metemos el DIV dentro del DIV "el" */

	elTitulo = document.createElement('h3');		/* Creamos un H3 y le asignamos la variable "elTitulo" */
	elTitulo.innerHTML = titulo.value;				/* Le adjudicamos el valor de "titulo" que es un input text */
	titYNot.appendChild(elTitulo);					/* Metemos el H3 con su contenido dentro del DIV "titYNot" */

	elContent = document.createElement('div');		/* Creamos un DIV y le asignamos la variable "elContent" */
	elContent.innerHTML = area.value;				/* Le adjudicamos el valor de "area" que es un textarea */
	titYNot.appendChild(elContent);					/* Metemos el DIV con su contenido dentro del DIV "titYNot" */


	hr = document.createElement('hr');				/* Creamos un HR y le asignamos la variable "hr" */
	el.appendChild(hr);								/* Metemos el HR dentro del DIV "el" */

	resultado.appendChild(el); 						/* En caso de querer que incorpore la ultima nota al inicio de Mis Notas cambiamos appendChild por prepend */
	titulo.value = '';								/* Ponemos el input text en blanco */
	area.value = '';								/* Ponemos el textarea en blanco */
});

/* ******************** MODIFICAR TITULO Y TEXTO A LAS NOTAS ****************** */

// document.getElementById('modificar').addEventListener('click', (event) => {
// 	event.preventDefault();

// 	let erase;

// 	erase = prompt('Que nota quieres eliminar?');
	
// });
