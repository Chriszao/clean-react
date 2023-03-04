import { faker } from '@faker-js/faker';

import { InvalidFieldError } from '~/validation/errors';

import { EmailValidation } from './email-validation';

function makeSut(field: string = faker.random.word()): EmailValidation {
	return new EmailValidation(field);
}

describe('EmailValidation', () => {
	it('should return error if email is invalid', () => {
		const field = faker.random.word();
		const sut = makeSut(field);
		const error = sut.validate(faker.random.word());

		expect(error).toEqual(new InvalidFieldError(field));
	});

	it('should return falsy if email is valid', () => {
		const sut = makeSut();
		const error = sut.validate(faker.internet.email());

		expect(error).toBeFalsy();
	});
});
