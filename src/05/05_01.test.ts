import {createGreetingMessage, ManType} from './05_01';

let people: Array<ManType>


beforeEach(() => {
    people = [
        {name: 'one', age: 33},
        {name: 'two', age: 24},
        {name: 'three', age: 18},
    ]
})


test('greeting messages', () => {

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello one. Welcome to IT-Incubator')
    expect(messages[1]).toBe('Hello two. Welcome to IT-Incubator')
    expect(messages[2]).toBe('Hello three. Welcome to IT-Incubator')
})