import React from 'react';
import {LessonType, ManTypeStreet} from './destructuring.test';

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: ManTypeStreet
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}


function useDimychState(m: string) {
    return [m, function(){}]
}

//


export const ManComponent: React.FC<PropsType> = ({title, man, ...restProps}) => {

    const [message, setMessage] = useDimychState('hello')
    // const [message, setMessage] = useDimychState2('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
            {restProps.car.model}
            {restProps.food}
        </div>
    </div>
}