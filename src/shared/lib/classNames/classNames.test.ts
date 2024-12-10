import {describe} from "@jest/globals"
import {classNames} from "./classNames";

describe("classNames", () => {
    test('return one parameter', () => {
        expect(classNames('cls', {}, [])).toBe("cls")
    })
    test('return two parameters', () => {
        expect(classNames('params', {}, ['modify'])).toBe("params modify")
    })
    test('return three parameters and one false', () => {
        expect(classNames('params', {hovered: true, scrollable: false}, ['modify'])).toBe("params modify hovered")
    })
    test('return fo parameters', () => {
        const result = 'params modify hovered scrollable'
        expect(classNames('params', {hovered: true, scrollable: true}, ['modify'])).toBe(result)
    })
})
