import {UserType} from './10_01';
import makeHairStyle from './10_01'


test('change address', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = moveUser(user, 2)

    user = awesomeUser

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})