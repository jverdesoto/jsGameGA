export class Component {
	testMultiplyMethod(num1: number, num2: number): number {
		return num1 * num2;
	}

	hello(): void {
		// eslint-disable-next-line no-undef
		console.log('Hola!');
	}
}