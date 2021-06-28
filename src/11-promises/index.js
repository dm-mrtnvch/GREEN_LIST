//
setTimeout(() => {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
        }, 1000)
    }, 1000)
}, 1000)

// const findUserinDBbyMyself = () => {



const api = {
    save() {

    },
    read(){
        return {name: 'IT-KAMASUTRA'}
    }
}

async function apiRun(){
    await api.save()
    const data = await api.read()
    console.log('read: ', data);
}

apiRun()


const findUserInDB = (id) => {
    const users = [{id: 1, name: 'raz', friend: 3}, {id: 2, name: 'dva', friend: null}, {id: 1, name: 'tri', friend: 2}];
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = users.find(u => u.id == id)
            if(user == null) {
                reject('no usfffer')
            } else {
                resolve(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
};


const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


findUserInDB(1).
then((user) => {
    console.log(user.name);
    return user.friend
})
    .then((friendId) => {findUserInDB(friendId)})
    .catch(error => {
        return {name: 'bot', friend: null}
    })
    .then((friend1) => {
        console.log(friend1.name);
        return friend1.friend
    })
    .then((friendId) => {findUserInDB(friendId)})
    .then(friend2 => console.log(friend2))
    .catch(error => console.warn(error))


async function run23(){
    try {
        const user = await findUserInDB(1)
        console.log(user.name)
        let friend1
        try {
            friend1 = await findUserInDB(user.name)
        } catch (error) {
            friend1 = {name: 'bot', friend: null}
        }
        const friend12 = await findUserInDB(user.name)
        console.log(friend1.name);
        const friend2 = await findUserInDB(friend1.friend)
        console.log(friend2.name + ' ' + user.name);
    }
    catch (error) {
        alert(error)
    }
}
run23()



const axios = {
    _fake(url, data){
        return this._fake(url, data)
    },
    post(url, data){
        return this._fake(url, data)
    },
    get(url, data){
        return this._fake(url, data)
    }
}



function wait(timer) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timer);
        // resolve(setTimeout(() => {
        // }, number))
    });
}

async function run() {
    await wait(1000);
    console.log('1');
    await wait(2000);
    console.log('2');
    await wait(3000);
    console.log('3');

}

run();


const repo = {
    save(data) {
        try {
            localStorage.setItem('some key', JSON.stringify(data))
        }
        catch (error) {
            return false
        }
        return true
    },
    read(){
        const data = localStorage.getItem('some-key')
        if(!data){
            return null
        }else {
            return JSON.parse(data)
        }
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some key', JSON.stringify(data))
                resolve()
            }
            catch (error) {
                reject()
            }
            return promise
        })
    },
    readAsync(){
        return new Promise((resolve, reject) => {
            const data = localStorage.getItem('some-key')
            if(!data){
                resolve(null)
            } else  {
                resolve(JSON.parse(data))
            }
        })
    }
}

const result = repo.save({name: 'IT-KAMASUTRA'})
if(result){
    console.log('SAVED')
} else {
    console.warn('NOT SAVED');
}




const run2 = async () => {
    await repo.saveAsync({name: 'IT-KAMASUTRA'})
    console.log('SAVED');

}


//
// const axios = () => {
//
// };

// const findUserInDB = () => {
//     return 1;
// };

const obj1 = {
    name: '',
    say(message) {
        // alert(message);
    }
};

obj1.name = 'ky';
obj1.say('hello ' + 'ky');

const promise1 = axios.get('');
promise1.then((data) => {
    console.log(data);
});

axios.get('https://google.com')
    .then(() => {

    });

const promise2 = findUserInDB(1);
promise2
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.warn(error);
    });
console.log('finish');


const otherPromise = Promise.all([promise1, promise2]);
otherPromise
    .then((results) => {
        const dataFromGoogle =
            results[0].status === 'fulfilled'
                ? results[0].value
                : {data: {vacancies: null}};
        const userFromDB =
            results[1].status === 'fulfilled'
                ? results[1].value
                : {name: results[1].reason};
        console.log(dataFromGoogle.data + ';' + userFromDB.data);
    })
    .catch(() => {
        console.log('initialization failed. try again later');
    });

const resolvedPromise = Promise.resolve(100);

const rejectedPromise = Promise.reject({message: 'some error'});

rejectedPromise
    .then((data) => console.log(data))
    .catch((error) => console.warn(error));

const usersAPI = {
    getAllUsers: () => {
        return Promise.resolve([{name: '0'}, {name: '1'}]);
    },
    login(login, password) {
        if (login !== '123' && password !== '123') {
            return Promise.reject({message: 'incorrect login or password'});
        } else {
            return Promise.resolve({
                name: 'raz',
                age: 12,
                height: 111
            });
        }
    }
};

const promise3 = usersAPI.getAllUsers()
    .then(users => console.log(users));


// const promise2 = findUserInDB(100)
// const promise2_2 = promise2.then((user) => {return 100})
// console.log(promise2_2);
// promise2_2.then(name => console.log(name))


findUserInDB(1)
    .then(user => user.name)
    .then(name => console.log(name));


axios.get('http://google.com')
    .then(res => res.data)
    .then(data => console.log(data));

const getGoogleVacancies = () => {
    // const pr = axios.get('http://google.com')
    // const pr2 = pr.then(res => res.data)
    // return pr2
    return axios.get('http://google.com')
        .then(res => res.data)
        .then(data => data.vacancies);
};

getGoogleVacancies()
    .then(count => console.log(count));


// const lastPromise = findUserInDB(1)
//     .then(user => user.name)
//     .then(name => {
//         console.log(name);
//         return 100;
//     })
//     .then(number => {
//         console.log(number);
//         return {value: number +1};
//     })
//     .then(obj => {
//         console.log(obj.value)
//         const pr = findUserInDB(2)
//         return pr
//     })
//     .then(user => {
//         console.log(user.name)
//     });

const lastPromise = findUserInDB(1)
    .then(user => {
        console.log(user);
        return user;
    })
    .then(user => findUserInDB(user.friend))
    .then(friend1 => {
        console.log(friend1)
        return friend1
    })
    .then(friend1 => findUserInDB(friend1.friend))
    .then(friend2 => console.log(friend2.name))



async function run() {
    let user = await findUserInDB(1)
    console.log(user.name);
    let friend1 = await findUserInDB(user.friend)
    console.log(friend1.name);
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name);
}

run()

// findUserInDB().then(user => {
//     console.log(user.name);
// })

function getNumber(){
    // const promise =  Promise.resolve(Math.random())
    const promise = new Promise((resolve, reject) => {
        reject('some error')

        setTimeout(() => {
            resolve(Math.random())
        }, 2000)
    })
    return promise
}

getNumber().then(n => console.log(n))
getNumber().then(n => console.log(n))
