const axios = () => {

};

const findUserInDB = () => {
    return 1;
};

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


findUserInDB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name);
        return 100;
    })
    .then(number => {
        console.log(number);
        return number + 1;
    })
    .then(number => {
        console.log(number);
        return number + 1;
    })
    .then(number => {
        console.log(number);
        return number + 1;
    });