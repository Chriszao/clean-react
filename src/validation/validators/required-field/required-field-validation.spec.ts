import { faker } from '@faker-js/faker';

import { RequiredFieldError } from '~/validation/errors';

import { RequiredFieldValidation } from './required-field-validation';

function makeSut(): RequiredFieldValidation {
	return new RequiredFieldValidation(faker.database.column());
}

describe('RequiredFieldValidation', () => {
	it('should return error if field is empty', () => {
		const sut = makeSut();
		const error = sut.validate('');

		expect(error).toEqual(new RequiredFieldError());
	});

	it('should return falsy if field is not empty', () => {
		const sut = makeSut();
		const error = sut.validate(faker.random.word());

		expect(error).toBeFalsy();
	});
});
