import {CityType, governmentBuildingsType} from '../02/02_02';


export function demolishHousesOnTheStreet(c: CityType, happyStreet: string) {
    c.houses = c.houses.filter(h => h.address.street.title !== 'Happy street')
}


export function getBuildingsWithStaffCountGreaterThan(buildings: Array<governmentBuildingsType>, number: number) {
    return buildings.filter(b => b.staffCount > 500)
}
