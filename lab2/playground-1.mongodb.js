//Use Robo 3T to create the following: Use Inventory Collection or any Collection
//1.	Provide the MongoDB code for enforcing JSON schema 
//validation when creating a collection named "employees" with 
//required fields "name," "age" (min. 18), and "department" (limited to ["HR," "Engineering," "Finance"]).
db.createCollection("employees", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "age", "department" ],
          properties: {
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             age: {
                bsonType: [ "int", "long", "double" ],
                minimum: 18,
                description: "must be an integer greater than or equal to 18"
             }
             
          }
       }
    }
 })
 db.createCollection("employee",{
    validator:{
       $jsonSchema:{
          
          bsonType:"oblect",
          required:["name","age","department"],
          properties: {
             name: {
                bsonType:"string",
                description:"must be a string",
 
             },
             age:{
                bsonType: [ "int", "long", "double" ],
                minimum: 18,
                description: "must be an integer greater than or equal to 18"
             }
 
           }
 
       }
 
    }
 })
 
 //2.	Find documents where the "tags" field exists.
 use("ITI_Momgo")
 
 db.inventory.find({ tags: { $exists: true } })
 
 //3.	Find documents where the "status" field has a value in [A, B] using both the `$in` , `$or` operators.
 db.inventory.find({ $or: [ { status: "A" }, { status: "B" } ] })
 
 //4.	Find documents where the "tags" field does not contain values "ssl" or "security."
 db.inventory.find({ tags: { $nin: [ "ssl", "security" ] } })
 
 //5.	Find documents where the "qty" field is equal to 85.
 db.inventory.find({ qty: 85 })
 
 //6.	Find documents where the "qty" field is greater than 95.
 db.inventory.find({ qty: {$gt:95} })
 
 //7.	Find documents where the "qty" field is less than or equal to 45.
 db.inventory.find({ qty: { $lte: 45 } })
 
 //8.	Find documents where the "item" field does not start with "note."
 db.inventory.find({ item: { $not: /^note/ } })
 
 //9.	Find documents where the "tags" array contains all of the values [ssl, security] using the `$all` operator.
 db.inventory.find({ tags: { $all: [ "ssl", "security" ] } })
 
 //10.	Find documents where the "dim_cm" array contains values between 20 and 30 using `$elemMatch`.
 db.inventory.find({ dim_cm: { $elemMatch: { $gt: 20, $lt: 30 } } })
 
 //11.	Find documents where the "tags" array has a size of 3.
 db.inventory.find({ tags: { $size: 3 } })
 
 //12.	Find documents where the "tags" field is of type array.
 db.inventory.find({ tags: { $type: "array" } })
 
 //13.	Update the "item" field in the "paper" document, setting "size.uom" to "meter" and using the `$currentDate` operator.
 
 
 //a.	Also, use the upsert option and change filter condition item:”paper”.
 //لو مفيش دوكيمينت هيعمل ون انسيرت
 
 db.inventory.updateOne(
    { item: "paper" },
    {
       $set: { "size.uom": "meter" },
       $currentDate: { lastModified: true }
    },
    { upsert: true }
 )
 
 //b.	Use the `$setOnInsert` operator.
 //هيغير وهيضيف الريكورد الجديد موديفي
 db.inventory.update(
    { item: "paper" },
    {
      $setOnInsert: {
        "size.uom": "meter",
        modified: { $currentDate: { $type: "date" } }
      }
    },
    { upsert: true }
 )
 
 //c.	Try `updateOne`, `updateMany`, and `replaceOne`.
 
 db.inventory.updateOne(
    { item: "paper" },
    {
       $setOnInsert: { status: "A" }
    },
    { upsert: true }
 )
 
 db.inventory.updateMany(
    { item: "paper" },
    {
       $set: { "size.uom": "meter" },
       $currentDate: { lastModified: true }
    }
 )
 //This code replaces at most one document that matches a specified filter with a new document.
 // If no documents match, it inserts a new document. It uses replaceOne() method in MongoDB 1. In this case
 // , it replaces a document with an item value of "paper" with a new document containing "item": paper, "status": A, "size"
 //: {"h": 28, w": 35.5, uom": cm}", and "lastModified": 2023-08-31.
 
 db.inventory.replaceOne(
    { item: "paper" },
    {
       item: "paper",
       status: "A",
       size: { h: 28, w: 35.5, uom: "cm" },
       lastModified: new Date("2023-08-31")
    },
    { upsert: true }
 )
 
 //14.	Insert a document with incorrect field names "neme" and "ege," then rename them to "name" and "age."
 db.inventory.insertOne({ neme: "John Doe", ege: 25 })
 
 db.collection.updateOne(
    {},
    {
       $rename: {
          neme: "name",
          ege: "age"
       }
    },
    false,
    true
 )
 db.inventory.find({})
 //15.	Try to reset any document field using the `$unset` function.
 db.inventory.updateMany({}, { $unset : { "color" : "" } })
 
 //16.	Try update operators like `$inc`, `$min`, `$max`, and `$mul` to modify document fields.
 db.inventory.updateMany({}, { $inc : { qty : 10 } })
 
 db.inventory.updateMany({}, { $min : { price : 10 } })
 
 db.inventory.updateMany({}, { $max : { price : 100 } })
 
 db.inventory.updateMany({}, { $mul : { qty : 2 } })

  //12.	Find documents where the "tags" field is of type array.
db.inventory.find({"tags":{$type:"array"}})