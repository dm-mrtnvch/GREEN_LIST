import {CourseType} from './04';

test('should take men older 90 years', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    // const predicator = (a: number) => a > 90
    // const oldAges = ages.filter(predicator)

    const oldAges = ages.filter(a => a > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)


})

test('only courses under 160', () => {
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    // const cheapPredicator = (c: CourseType) => c.price < 160
    // const cheapCourses = courses.filter(cheapPredicator)

    const cheapCourses = courses.filter(c  => c.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('REACT')
})


test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'one', isDone: true},
        {id: 2, title: 'two', isDone: false},
        {id: 3, title: 'three', isDone: true},
        {id: 4, title: 'four', isDone: false}
    ]

    const completedTasks = tasks.filter(t => t.isDone)


    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].title).toBe('three')

})


test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'one', isDone: true},
        {id: 2, title: 'two', isDone: false},
        {id: 3, title: 'three', isDone: true},
        {id: 4, title: 'four', isDone: false}
    ]

    const uncompletedTasks = tasks.filter(t => !t.isDone)


    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(2)
    expect(uncompletedTasks[1].title).toBe('four')

})
