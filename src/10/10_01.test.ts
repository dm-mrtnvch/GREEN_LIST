import {
    moveUserToAnotherHouse,
    moveUser,
    upgradeLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    addNewBooksToUser,
    updateBook,
    removeBook,
    WithCompaniesType,
    CompanyType,
    addCompany,
    updateCompanyTitle,
    updateCompanyTitleMoreDifficultVersion
} from './10_01'


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    return copy
}

test('hair cut ', () => {
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


test('user with books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    let userCopy = moveUserToAnotherHouse(user, 14)

    expect(user.laptop.title).toBe('ZenBook')
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(14)
    expect(user.books).toBe(userCopy.books)
})



test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    let userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')


})



test('update js book to ts book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    let userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books[2]).toBe('js')


})





test('remove JS book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']

    }

    let userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.books.length).toBe(4)
    expect(userCopy.books.length).toBe(3)
    expect(user.books[2]).toBe('js')
    expect(userCopy.books[2]).toBe('react')
    expect(user.address).toBe(user.address)
    expect(user.laptop).toBe(user.laptop)
    expect(user.hair).toBe(userCopy.hair)


})



test('user in comoanies', () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
        companies: [
            {id: 1, title: 'raz'},
            {id: 2, title: 'dva'},
            {id: 3, title: 'tri'},
            {id: 4, title: 'che'}
        ]
    }

    let newCompany: CompanyType = {
        id: '5',
        title: 'google'
    }
    let userCopy = addCompany(user, newCompany)

    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.companies.length).toBe(4)
    expect(userCopy.companies.length).toBe(5)
})


test('change company', () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'iT-INCUBATOR'}
        ]
    }



    let userCopy = updateCompanyTitle(user, 1, 'ITRANSITION') as UserWithLaptopType & WithCompaniesType


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('ITRANSITION')
    expect(user.companies.length).toBe(2)
    expect(userCopy.companies.length).toBe(2)
})


test('update company', () => {


    let companies = {
        'Dimych' :  [
            {id: 1, title: 'enam'},
            {id: 2, title: 'iT-INCUBATOR'}
        ],
        'Artem' :  [
            {id: 2, title: 'iT-INCUBATOR'}
        ]
    }

    const copy = updateCompanyTitleMoreDifficultVersion(companies, 'Dimych',
        1, 'EPAM')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})