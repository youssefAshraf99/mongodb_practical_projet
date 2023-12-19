//1-To create a collection named “Staff

db.createCollection("Staff")

//2.	Insert one document into the "Staff" collection: {_id, name, age, gender, department}.
db.Staff.insertOne(
   { _id: 1, name: "youssef", age: 23, gender: "male", department: "IT" }
)
//3.	Insert many documents into the "Staff" collection:
//•	   Object: {_id, name, age: 20, gender: "male", department}
//•	   Object: {_id, name, age: 25, gender: "female", managerName, department}
//•	   Object: {_id, name, age: 15, gender, DOB}
db.Staff.insertMany([
   { _id: 2, name: "ali", age: 20, gender: "male", department: "HR" },
   { _id: 3, name: "khaled", age: 25, gender: "male", managerName: "ali", department: "Marketing" },
   { _id: 4, name: "sara", age: 15, gender: "female", DOB: new Date("2024-01-01") }
])

//4.	Query to find data from the "Staff" collection:
//•	1) Find all documents.

db.Staff.find({})

//•	2) Find documents where gender is "male".
db.Staff.find({ gender: "male" })

//•	3) Find documents with age between 20 and 25.
db.Staff.find({ age: { $gte: 20, $lte: 25 } })

//•	4) Find documents where age is 25 and gender is "female".
db.Staff.find({ age: 25, gender: "female" })

//•	5) Find documents where age is 20 or gender is "female".
db.Staff.find({ $or: [ { age: 20 }, { gender: "female" } ] })

//5.	Update one document in the "Staff" collection where age is 15, set the name to "new student".
db.Staff.updateOne(
   { age: 15 },
   { $set: { name: "new student" } }
)

//6.	Update many documents in the "Staff" collection, setting the department to "AI".
db.Staff.updateMany(
   {},
   { $set: { department: "AI" } }
)

//7.	Create a new collection called "test" and insert documents from Question 3.
db.createCollection("test")
db.test.insertMany([
   { _id: 1, name: "John ", age: 30, gender: "male", department: "IT" },
   { _id: 2, name: "mohamed", age: 20, gender: "male", department: "HR" },
   { _id: 3, name: "Bob Smith", age: 25, gender: "female", managerName: "John", department: "Marketing" },
   { _id: 4, name: "malak", age: 15, gender: "female", DOB:new Date("2008-01-01") }
])

//8.	Try to delete one document from the "test" collection where age is 15.
db.test.deleteOne({ age :15 })

//9.	 try to delete all male gender
db.test.deleteMany({ gender : 'male' })

//10.	Try to delete all documents in the "test" collection.
db.test.deleteMany({})



