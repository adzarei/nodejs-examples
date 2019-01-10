var getUser = (id, callback) => {
    //Simulate DBA
    var user = {
        id: id,
        name: 'Adrian'
    };

    setTimeout( () => {
        callback(user);
    },2000);

};

getUser(6, (userObject) =>{
    console.log(userObject);
});
