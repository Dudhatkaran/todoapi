const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://karanvd2002:crud1234@crud.wlkawoa.mongodb.net/crud", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection Done');
}).catch((error) => {
    console.log(error);
})