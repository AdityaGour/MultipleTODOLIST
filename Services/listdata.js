angular.module("multipletodolist")
 .factory("listdata",listdata)

 function listdata(){
     return[
         {
         name:"Test",
         products:[{
             name:"abc",status:false
         }]
     },
    ]
 }