import users, {userObj} from './08_01'


beforeEach(() => {

})


test('select users= from obj', () => {
    expect(userObj[0]).toBe('Dimych')
    expect(userObj[1]).toBe('Natasha')
    expect(userObj[2]).toBe('Valera')
    expect(userObj[3]).toBe('Katya')
})