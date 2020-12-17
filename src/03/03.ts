import {student, StudentType} from '../02/02'
import {CityType, governmentBuildingsType, HouseType} from '../02/02_02';


export const sum = (a: number, b: number) => {
    return a + b;
}

const res = sum(sum(1,2), sum(1,3))


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(),
    title: skill
    })

}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}


export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget;
}


export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toHireStaff = (building: governmentBuildingsType, staff: number) => {
    building.staffCount += staff
}


export const toFireStaff = (building: governmentBuildingsType, staff: number) => {
    building.staffCount -= staff
}


export const createMessage = (city: CityType) => {
    return `hello ${city.title} citizens`
}