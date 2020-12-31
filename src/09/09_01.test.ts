function increaseAge(u: UserType) {
        u.age = u.age + 1
}

type UserType = {
    name: string
    age: number
    address?: {title: string}
}

test('big test', () => {

    var user: UserType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {
    var users = [
        {name: 'Dimych',
        age: 32
        },
        {name: 'Dimych',
            age: 32
        }
    ]

    var admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
    var userCount = 100
    var adminsCount = userCount

    adminsCount = adminsCount + 1
    adminsCount++

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('ref type test', ()=> {
    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    // let adr = user.address

    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    expect(user.age).toBe(1000)
    expect(user.address).toBe('Kanary')

})


test('ref type array test', ()=> {
    const address = {
        title: 'Minsk'
    }

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    // let adr = user.address

    var user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('', () => {
    const letters = ['a', 'c', 'd', 'e']

    passportist(letters)

    expect(letters).toEqual(['a', 'c', 'd', 'e'])
})

function passportist(letters: any) {

    letters.sor()
    console.log()
}