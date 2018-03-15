const mongoose=require('mongoose');

module.exports=()=>{
    mongoose.connect('mongodb://movie_user:abcd1234@ds261088.mlab.com:61088/movie-api',{userMongoClient:true});
    mongoose.connection.on('open',()=>{
        console.log('MongoDB:Connected')
    });

    mongoose.connection.on('error',(err)=>{
        console.log('MongoDB:Error',err)
    });

    mongoose.Promise=global.Promise;
}
