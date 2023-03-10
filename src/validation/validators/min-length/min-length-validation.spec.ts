import { faker } from '@faker-js/faker';

import { InvalidFieldError } from '~/validation/errors';

import { MinLengthValidation } from './min-length-validation';

function makeSut(
	field = faker.database.column(),
	minLength = 5,
): MinLengthValidation {
	return new MinLengthValidation(field, minLength);
}

describe('MinLengthValidation', () => {
	it('should return error if value is invalid', () => {
		const field = faker.database.column();
		const sut = makeSut(field);

		const error = sut.validate(faker.random.alphaNumeric(3));

		expect(error).toEqual(new InvalidFieldError(field));
	});

	it('should return falsy if value is valid', () => {
		const sut = makeSut();

		const error = sut.validate(faker.random.alphaNumeric(5));

		expect(error).toBeFalsy();
	});
});
