Lab 1: MongoDB Basics with MongoDB Compass and Robo 3T Studio
MongoDB Compass Instructions:
Open MongoDB Compass and ensure it's the latest version.

Create a Database:

Database Name: ITI_Mongo
Create a Collection:

Collection Name: Students
Insert Single Document:

Use an online JSON formatter to validate this object:
json
Copy code
{_id, name, age: 25, track}
Insert Bulk Documents:
a. Object: {_id, firstName, lastName, age: 25, email, gender}
b. Object: {_id, name, age: 35, type, gender}

Find Documents with Age > 15:

Execute a query to find documents with age greater than 15.
Update a Single Document:

Execute an update operation on a document in the "Students" collection.
Delete a Document:

Execute a delete operation on a document in the "Students" collection.
Robo 3T Studio Instructions:
Create a Collection:

Collection Name: Staff
Insert One Document:

Object: {_id, name, age, gender, department}
Insert Many Documents:

Object: {_id, name, age: 20, gender: "male", department}
Object: {_id, name, age: 25, gender: "female", managerName, department}
Object: {_id, name, age: 15, gender, DOB}
Query to Find Data:

Find all documents.
Find documents where gender is "male".
Find documents with age between 20 and 25.
Find documents where age is 25 and gender is "female".
Find documents where age is 20 or gender is "female".
Update Documents:

Update one document where age is 15, set the name to "new student".
Update many documents, setting the department to "AI".
Create a New Collection:

Collection Name: test
Insert documents from Question 3.
Delete Document from "test" Collection:

Execute a delete operation where age is 15.
Delete All Male Documents:

Execute a delete operation for all documents with male gender in "test" collection.
Delete All Documents in "test" Collection:

Execute a delete operation to remove all documents in the "test" collection.
Lab 2: NoSQL-Mongo Lab2 with Robo 3T Studio
MongoDB Code for Schema Validation:

Enforce JSON schema validation for a collection named "employees" with required fields "name," "age" (min. 18), and "department" (limited to ["HR," "Engineering," "Finance"]).
Find Documents:

Find documents where the "tags" field exists.
Find Documents with Multiple Conditions:

Find documents where the "status" field has a value in [A, B] using both $in and $or operators.
Find Documents with Exclusions:

Find documents where the "tags" field does not contain values "ssl" or "security."
Find Documents by Field Value:

Find documents where the "qty" field is equal to 85.
Find Documents by Field Range:

Find documents where the "qty" field is greater than 95.
Find Documents by Field Range:

Find documents where the "qty" field is less than or equal to 45.
Find Documents by Field Pattern:

Find documents where the "item" field does not start with "note."
Find Documents with Array Criteria:

Find documents where the "tags" array contains all of the values [ssl, security] using the $all operator.
Find Documents with Array Criteria:

Find documents where the "dim_cm" array contains values between 20 and 30 using $elemMatch.
Find Documents by Array Size:

Find documents where the "tags" array has a size of 3.
Find Documents by Field Type:

Find documents where the "tags" field is of type array.
Update Document with $currentDate:

Update the "item" field in the "paper" document, setting "size.uom" to "meter" using $currentDate, $setOnInsert, and try updateOne, updateMany, and replaceOne.
Insert and Rename Fields:

Insert a document with incorrect field names "neme" and "ege," then rename them to "name" and "age."
Unset Document Fields:

Try to reset any document field using the $unset function.
Update Operators:

Try update operators like $inc, $min, $max, and $mul to modify document fields.
Lab 3: NoSQL-Mongo Lab3 with Robo 3T Studio
Export and Import Collection:

Export any collection and import it into a new collection using Mongo Compass or Robo 3T, ensuring the new collection doesn't contain _id as ObjectId (if using Compass).
Calculate Total Revenue:

Calculate the total revenue for sales collection documents within the date range '01-01-2020' to '01-01-2023' and sort them in descending order by total revenue.
Query 2 using Aggregate Wizard:

Try Query 2 using Robo 3T aggregate wizard and insert the result into a new collection named "newColl."
Calculate Average Salary:

Calculate the average salary for employees for each department from the employee’s collection.
Calculate Max and Min Likes:

Use the "likes" collection to calculate max and min likes per title.
Get Inventory Collection Count:

Display the count of documents in the inventory collection.
Display Documents from Inventory Collection:

Display 5 documents only from the inventory collection.
Count Large Pizza Size:

Count the number of large Pizza size from the orders collection using $count inside an aggregate function.
