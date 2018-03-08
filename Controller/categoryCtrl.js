angular.module("multipletodolist")
    .controller("categoryCtrl",categoryCtrl)

    function categoryCtrl(listdata,$routeParams){
        console.log("categoryCtrl")
        var category = this;
        category.list = listdata
        var Namecategory = $routeParams
        console.log($routeParams)

        for(var i=0;i<category.list.length;i++){
            if( $routeParams.category == category.list[i].name){
                console.log(category.list[i].name)
                category.productsList = category.list[i].products
                console.log(category.productsList)
                /* Pick the i value */
                category.number = i ;
                /* end of pick i value */            }
        }

        category.Add = function(){

            category.addName
            console.log(category.addName)
            for(var i =0;i<category.list.length;i++){
                if( $routeParams.category == category.list[i].name){
                    console.log(category.list[i].name)
                   
                     category.list[i].products.push({name:category.addName,status:false})
                    console.log(category.list)

                    category.addName ="";
                    console.log(category.number)
                }
            }

        }


        category.check = function(index){
            // category.list[index]
            console.log(category.number)
             category.list[category.number].products[index].status =! category.list[category.number].products[index].status
             console.log(category.list[category.number].products[index])
        
            }

        category.remove = function(index){
            
            console.log(index)
            category.list[category.number].products.splice(index,1)

           
            console.log(category.list)
        }
         
        //   for(var i=0;i<category.list.length;i++){
        //       for(var j=0;j<category.list.length;j++){
        //           console.log("adadad"+j)
        //       }
             
        //   }
         


    }