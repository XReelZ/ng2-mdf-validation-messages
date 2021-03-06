import { ValidatorFn } from '@angular/forms';
export declare class ValidationExtensions {
    /**
     * Set the input as required.
     * @param message Custom error message that will be shown to the user.
     */
    static required(message?: string): ValidatorFn;
    /**
     * Will not accept input containing only empty spaces.
     * @param message Custom error message that will be shown to the user.
     */
    static noEmpty(message?: string): ValidatorFn;
    /**
     * Set the minimal required length of the input value
     * @param length Minimal length.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static minLength(length: number, message?: string): ValidatorFn;
    /**
     * Set the maximal required length of the input value
     * @param length Maximal length.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static maxLength(length: number, message?: string): ValidatorFn;
    /**
     * Set the minimal required value of the number input
     * @param min Minimal value.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static minNumber(min: number, message?: string): ValidatorFn;
    /**
     * Set the maximal required value of the number input
     * @param max Maximal value.
     * @param message Custom error message that will be shown to the user. Supports placeholders.
     */
    static maxNumber(max: number, message?: string): ValidatorFn;
    /**
     * Requires a valid email input.
     * @param message Custom error message that will be shown to the user.
     */
    static email(message?: string): ValidatorFn;
    /**
     * Requires the input to follow a specific pattern.
     * @param pattern The required pattern.
     * @param message Custom error message that will be shown to the user.
     */
    static pattern(pattern: string, message?: string): ValidatorFn;
}
