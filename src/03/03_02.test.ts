import {CityType} from '../02/02_02';
import {toHireStaff, addMoneyToBudget, repairHouse, toFireStaff, createMessage} from './03';

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildedAt: 2012, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {street: {title: 'Central str'}}
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {street: {title: 'South str'}}
            }
        ],
        citizensNumber: 100000
    }
})


test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})


test('Houses should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})


test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20)
    toHireStaff(city.governmentBuildings[1], 100)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1100)
})


test('Staff should be decreased', () => {
    toFireStaff(city.governmentBuildings[0], 20)
    toFireStaff(city.governmentBuildings[1], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
    expect(city.governmentBuildings[1].staffCount).toBe(980)
})



test('Greeting message should be correct', () => {
    createMessage(city)

    expect(createMessage(city)).toBe('hello New York citizens')
})