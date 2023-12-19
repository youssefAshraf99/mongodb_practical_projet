//b.	collections named trainningCenter1 , trainningCenter2 
//NOTE: trainningCenter2 will apply all quries
//2.	Insert documents into trainningCenter1 collection contains _id , name as firstName lastName , age , address as array , status
//Using Variable and insert ONE
var Datainsert = [
    {
        _id: 1,
        name: {firstName: "mohammed", lastName: "ashraf"},
        age: 25,
        address: ["123 Main St", "Apt 4B", "New York, NY 10001"],
        status: "active"
    },
    {
        _id:2,
        name: {firstName: "mohammed", lastName: "ashraf"},
        age: 25,
        address: ["123 Main St", "Apt 4B", "New York, NY 10001"],
        status: "active"
    },
    {
        _id:3,
        name: {firstName: "mohammed", lastName: "ashraf"},
        age: 25,
        address: ["123 Main St", "Apt 4B", "New York, NY 10001"],
        status: "active"
    }
];

//insert the one record
db.trainningCenter1.insertOne(Datainsert)

db.trainningCenter2.insertMany(Datainsert)
//{
//    "acknowledged" : true,
//    "insertedIds" : {
//        "0" : 1.0,
//        "1" : 2.0,
//        "2" : 3.0
//    }
//}


//Argument "docs" must be an array of documents

db.trainningCenter2.insertMany([
    {
        _id: ObjectId(),
        name: {firstName: "ali", lastName: "mohamed"},
        age: 30,
        address: ["456 Elm St", "Apt 7C", "Los Angeles, CA 90001"],
        status: "active"
    },
    {
        _id: ObjectId(),
        name: {firstName: "sara", lastName: "mohamed"},
        age: 35,
        address: ["789 Oak St", "Apt 10D", "Chicago, IL 60007"],
        status: "inactive"
    }
])


//4 Use find. explain function (find by age field) and mention scanning type

db.trainningCenter2.find({age: {$eq: 30}}).explain("executionStats")

//5.	Create index on created collection named it “IX_age” on age field 

db.trainningCenter2.createIndex({age: 1}, {name: "IX_age"})


//6.	Use find. explain view winning plan for index created (find by age field) and mention scanning type

db.trainningCenter2.find({age: {$eq: 30}}).explain("executionStats")

//7.	Create index on created collection named it “compound” on firstNsme and lastName

db.trainningCenter2.createIndex({ firstName:1, lastName: 1}, {name: "compound"})



//a.	Try find().explain before create index and mention scanning type

//b.	Try find().explain after create index and mention scanning type

// Before creating the index

db.trainningCenter2.find({age: {$eq: 30}}).explain("executionStats")
// Scanning type is COLLSCAN

// After creating the index
db.trainningCenter2.createIndex({firstName: 1, lastName: 1}, {name: "compound"})

db.trainningCenter2.find({age: {$eq: 30}}).explain("executionStats")

// Scanning type is IXSCAN


//8.	Try to delete from your collection where _id = 5 [insert it if not exists]

//db.trainningCenter2.deleteOne({_id: ObjectId("5")})


//9.	Delete all documents from the trainingCenter collection.

//db.trainningCenter1.deleteMany({})
//db.trainningCenter2.deleteMany({})

//10.	Drop the database and confirm its removal. Which command do you use to ensure the deletion?

//db.dropDatabase()

show dbs


