import React, {ChangeEvent, MouseEvent} from 'react';

// const callback = (): number => {
//     alert('hey')
//     return 12
// }
//
// window.setTimeout(callback, 1000)


export const User = () => {

    const search = (e: MouseEvent<HTMLButtonElement>) => {

        alert(e.currentTarget.name)
    }

    const saveUser = () => {

        alert('user was saved')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('focus was lost')
    }

    return <div><textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}>
        Dimych</textarea>

        <input onChange={onAgeChanged} type={"number"}/>
        <button name='delete' onClick={search}>search</button>
        <button name='save' onClick={search}>x</button>
    </div>
}