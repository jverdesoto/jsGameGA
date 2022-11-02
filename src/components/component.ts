
export class Component {
	testMultiplyMethod(num1: number, num2: number): void {  // Los parám. deben ser nºs. El método es VOID porque no devuelve nada.
		// eslint-disable-next-line no-undef
		console.log( num1 * num2 );
	}

	hello(): void {                          // Tipo VOID porque no devuelve nada, no tiene un RETURN.
		// eslint-disable-next-line no-undef
		console.log('Hola!');
	}
	// Ejemplo de tipo STRING:
	// 		hello(): string {                          // Tipo VOID porque no devuelve nada, no tiene un RETURN.
	// 		// eslint-disable-next-line no-undef
	// 		return 'Hola!';
	// 		}
}