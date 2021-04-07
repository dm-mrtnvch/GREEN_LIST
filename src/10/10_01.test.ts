import {moveUser, upgradeLaptop, UserType, UserWithLaptopType} from './10_01'

export function makeHairstyle(u: UserType, power: number){
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

test('hair cut ', () =>{
    let user: UserType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    let awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})


test('move User', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }

    let movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.address.city).toBe('Minsk')
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)
})


test('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }

    }

    let userWithNewLaptop = upgradeLaptop(user, 'MacBook')

    expect(user.laptop.title).toBe('ZenBook')
    expect(userWithNewLaptop.laptop.title).toBe('MacBook')
    expect(user.address).toBe(userWithNewLaptop.address)
})