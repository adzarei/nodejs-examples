var getUser = (id, callback) => {
    //Simulate DBA
    var user = {
        id: id,
        name: 'Adrian'
    };

    callback(user);
};

getUser(6, (userObject) =>{
    console.log(userObject);
});
