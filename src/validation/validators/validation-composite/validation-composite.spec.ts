import { faker } from '@faker-js/faker';

import { FieldValidationSpy } from '~/validation/test';

import { ValidationComposite } from './validation-composite';

type SutTypes = {
	sut: ValidationComposite;
	fieldValidationsSpy: FieldValidationSpy[];
};

function makeSut(field: string): SutTypes {
	const fieldValidationsSpy = [
		new FieldValidationSpy(field),
		new FieldValidationSpy(field),
	];

	const sut = ValidationComposite.build(fieldValidationsSpy);

	return {
		sut,
		fieldValidationsSpy,
	};
}

describe('ValidationComposite', () => {
	it('should return error if any validation fails', () => {
		const field = faker.database.column();
		const { sut, fieldValidationsSpy } = makeSut(field);

		const errorMessage = faker.random.words();

		fieldValidationsSpy[0].error = new Error(errorMessage);
		fieldValidationsSpy[1].error = new Error(faker.random.words());

		const error = sut.validate(field, faker.random.word());

		expect(error).toBe(errorMessage);
	});

	it('should return error if any validation fails', () => {
		const field = faker.database.column();
		const { sut } = makeSut(field);

		const error = sut.validate(field, faker.random.word());

		expect(error).toBeFalsy();
	});
});
