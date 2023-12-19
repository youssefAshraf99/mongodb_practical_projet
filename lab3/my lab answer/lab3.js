db.sales.aggregate([
 {
   $match: {
     "date": {
       $gt: ISODate("2020-01-01"),
       $lt: ISODate("2023-01-01")
     }
     
   }
 },
 {
   $group: {
     _id: "$_id",
     totalrevenue :{$sum:{$multiply:["$quantity","$price"]}}
     
     
   }
 },{
     $sort:{
         "totalrevenue":-1
     }
 }
])
Q4
db.employees.find({})
db.employees.aggregate([{
   $group:{
       _id:"department",
       averageSalary:{
           $avg: "$salary"
       }
   }
}])
Q5
db.likes.find({})
db.likes.aggregate([{
   $group: {
     _id: "$title",          
     maxLikes: { $max: "$likes" },  
     minLikes: { $min: "$likes" }   
   }
}])
Q6
db.inventory.find({}).count()
Q7
db.inventory.find({}).limit(5)
Q8
db.orders.find({})
db.orders.aggregate([{
   $match: {
     size: "large" 
   }
   
},{
       $count :"largePizzaCount"
   }])