import { getTypescriptTester } from './utils';
const ruleName = '@typescript-eslint/explicit-member-accessibility';

const { test, validate } = getTypescriptTester(ruleName);

test('should allow classes with explicitly defined member accessibility (except on public constructors)', () =>
	validate(`
	class Animal {
		private animalName: string; // Property
		public get name(): string {
			// get accessor
			return this.animalName;
		}
		public set name(value: string) {
			// set accessor
			this.animalName = value;
		}
		public walk() {
			// method
		}
	}
	`));

test('should allow classes with explicitly defined non-public constructors ', () =>
	validate(`
	class Animal {
		private constructor(public breed, name) {
			// Parameter property and constructor
			this.animalName = name;
		}
		private animalName: string; // Property
	}
	`));

test('should disallow classes with explicitly defined public constructors', () =>
	validate(
		`
	class Animal {
		public constructor(public breed, name) {
			// Parameter property and constructor
			this.animalName = name;
		}
		private animalName: string; // Property
	}
	`,
		['Public accessibility modifier on method definition constructor.']
	));

test('should disallow classes without explicitly defined accessibility on accessors', () =>
	validate(
		`
		class Animal {
			constructor(public breed, name) {
				// Parameter property and constructor
				this.animalName = name;
			}
			private animalName: string; // Property
			get name(): string {
				// get accessor
				return this.animalName;
			}
			set name(value: string) {
				// set accessor
				this.animalName = value;
			}
		}
	`,
		[
			'Missing accessibility modifier on get property accessor name.',
			'Missing accessibility modifier on set property accessor name.',
		]
	));

test('should disallow classes without explicitly defined accessibility on properties', () =>
	validate(
		`
		class Animal {
			constructor(public breed, name) {
				// Parameter property and constructor
				this.animalName = name;
			}
			animalName: string; // Property
		}
	`,
		['Missing accessibility modifier on class property animalName.']
	));

test('should disallow classes without explicitly defined accessibility on methods', () =>
	validate(
		`
	class Animal {
		walk() {
			// method
		}
	}
	`,
		['Missing accessibility modifier on method definition walk.']
	));

test.run();
