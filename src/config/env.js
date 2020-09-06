let connectionString = "mongodb+srv://olumide:ds6lJwJtsEklmyI5@cluster0.ylwxj.mongodb.net/test?authSource=admin&replicaSet=atlas-gg3pm5-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true"
 
module.exports = {

    node_env: process.env.NODE_ENV || 'development',
  
    port: process.env.PORT || 3000,
  
    mongodb: process.env.DATABASE_URL || connectionString,

    saltRounds: 14
  
  };