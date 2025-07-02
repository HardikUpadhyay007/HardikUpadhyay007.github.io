// use admin
// db.createUser({
//   user: "admin",
//   pwd: "admin",
//   roles: [ { role: "root", db: "admin" } ]
// })

// add following settings in mongod.conf available in program files / mongodb

// security:
//   authorization: enabled

// go to services and restart mongodb server

// mongosh --username admin --authenticationDatabase admin  //for prompt
// mongosh --username admin --password admin --authenticationDatabase admin  //without prompt

// connect using mongodb compass using following connection string
// mongodb://admin:admin@localhost:27017/
// mongodb://admin:admin@localhost:27017/?authSource=admin
// mongodb://admin:admin@localhost:27017/mydb?authSource=admin

// use lpua

// db.createUser({
//   user: "user1",
//   pwd: "1234",
//   roles: [
//     { role: "read", db: "lpua" }
//   ]
// })
// mongosh --username user1 --authenticationDatabase lpua  //for prompt
