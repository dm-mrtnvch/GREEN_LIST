export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'one', age: 33},
    {name: 'two', age: 24},
    {name: 'three', age: 18},
]

const dymuchTransformator = (man: ManType) => ({
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
})

    const devs = [
        {
            stack: ['css, html', 'js', 'tdd', 'react'],
            firstName: 'one', lastName: 'eno'
        },
        {
            stack: ['css, html', 'js', 'tdd', 'react'],
            firstName: 'two', lastName: 'owt'
        },
        {
            stack: ['css, html', 'js', 'tdd', 'react'],
            firstName: 'three', lastName: 'eerht'
        }
    ]

let d1 = dymuchTransformator( people[0])
let d2 = dymuchTransformator( people[1])
let d3 = dymuchTransformator( people[2])

const devs2 = [
    dymuchTransformator( people[0]),
    dymuchTransformator( people[1]),
    dymuchTransformator( people[2])
]

const devs3 = people.map(dymuchTransformator)

const devs4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
   return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)

}