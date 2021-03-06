﻿import { FormControl } from '@angular/forms';

import { ValidationExtensions } from '../src/validation.extensions.ts';

const CUSTOM_MESSAGE = 'Lorem ipsum';

describe('Testing The Validation Extensions', () => {
    describe('Testing "required" Validation', () => {
        it('should return required error with empty message', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual({
                required: {
                    message: null,
                }
            });
        });

        it('should return required error with empty message', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual({
                required: {
                    message: null,
                }
            });
        });

        it('should return required error with custom message', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.required(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                required: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null', () => {
            let control = new FormControl('SOME_VALUE');
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual(null);
        });

        it('should return null', () => {
            let control = new FormControl(' ');
            let actual = ValidationExtensions.required()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "noEmpty" Validation', () => {
        it('should return noEmpty error with empty message', () => {
            let control = new FormControl(' ');
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual({
                noEmpty: {
                    message: null,
                }
            });
        });

        it('should return noEmpty error with custom message', () => {
            let control = new FormControl(' ');
            let actual = ValidationExtensions.noEmpty(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                noEmpty: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when empty', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null value', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.noEmpty()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "minLength" Validation', () => {
        it('should return minLength error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual({
                minlength: {
                    requiredLength: 5,
                    actualLength: 3,
                    message: null,
                }
            });
        });

        it('should return minLength error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.minLength(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                minlength: {
                    requiredLength: 5,
                    actualLength: 3,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact', () => {
            let control = new FormControl('abcde');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when more', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.minLength(5)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "maxLength" Validation', () => {
        it('should return maxLength error with empty message', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual({
                maxlength: {
                    requiredLength: 5,
                    actualLength: 6,
                    message: null,
                }
            });
        });

        it('should return maxLength error with custom message', () => {
            let control = new FormControl('abcdef');
            let actual = ValidationExtensions.maxLength(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                maxlength: {
                    requiredLength: 5,
                    actualLength: 6,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when less', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when exact', () => {
            let control = new FormControl('abcde');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.maxLength(5)(control);

            expect(actual).toEqual(null);
        });

    });

    describe('Testing "minNumber" Validation', () => {
        it('should return minNumber error with empty message', () => {
            let control = new FormControl(3);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual({
                minNumber: {
                    requiredRange: 5,
                    message: null,
                }
            });
        });

        it('should return minNumber error with custom message', () => {
            let control = new FormControl(3);
            let actual = ValidationExtensions.minNumber(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                minNumber: {
                    requiredRange: 5,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact value', () => {
            let control = new FormControl(5);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when higher value', () => {
            let control = new FormControl(6);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.minNumber(5)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "maxNumber" Validation', () => {
        it('should return maxNumber error with empty message', () => {
            let control = new FormControl(6);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual({
                maxNumber: {
                    requiredRange: 5,
                    message: null,
                }
            });
        });

        it('should return maxNumber error with custom message', () => {
            let control = new FormControl(6);
            let actual = ValidationExtensions.maxNumber(5, CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                maxNumber: {
                    requiredRange: 5,
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when exact value', () => {
            let control = new FormControl(5);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when value is less', () => {
            let control = new FormControl(4);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.maxNumber(5)(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "email" Validation', () => {
        it('should return email error with empty message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual({
                email: {
                    message: null,
                }
            });
        });

        it('should return email error with empty message', () => {
            let control = new FormControl('me@example');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual({
                email: {
                    message: null,
                }
            });
        });

        it('should return email error with custom message', () => {
            let control = new FormControl('abc');
            let actual = ValidationExtensions.email(CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                email: {
                    message: CUSTOM_MESSAGE,
                }
            });
        });

        it('should return null when valid email', () => {
            let control = new FormControl('me@example.com');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.email()(control);

            expect(actual).toEqual(null);
        });
    });

    describe('Testing "pattern" Validation', () => {
        it('should return pattern error with empty message', () => {
            let control = new FormControl('abc1');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual({
                pattern: {
                    requiredPattern: '^[a-zA-Z ]*$',
                    actualValue: 'abc1',
                    message: null
                }
            });
        });

        it('should return pattern error with custom message', () => {
            let control = new FormControl('abc1');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*', CUSTOM_MESSAGE)(control);

            expect(actual).toEqual({
                pattern: {
                    requiredPattern: '^[a-zA-Z ]*$',
                    actualValue: 'abc1',
                    message: CUSTOM_MESSAGE
                }
            });
        });

        it('should return null when valid', () => {
            let control = new FormControl('aBcD');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual(null);
        });

        it('should return null when null input', () => {
            let control = new FormControl(null);
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual(null);
        });

        it('should return null when empty input', () => {
            let control = new FormControl('');
            let actual = ValidationExtensions.pattern('[a-zA-Z ]*')(control);

            expect(actual).toEqual(null);
        });
    });
});
