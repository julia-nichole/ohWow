var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true});

//database connection 

 mongoose.connection.on('connected',function(){
     console.log(`connected to: ${process.env.DATABASE_URL}`);
});

 module.exports = mongoose;