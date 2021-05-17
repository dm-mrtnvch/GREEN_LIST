const findUserInDB = (id) => {
    console.log(id);
};

const promises1 = axios.get('');
promises1.then((data) => {
    console.log(data);
});

// axios.get('').then((data) => {console.log(data)})

const promises2 = findUserInDB(100);

promises2
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.warn(error);
    })
    .finally(() => {
        console.log('finished');
    })

findUserInDB(1).then((user) => {
});

console.log('finish');