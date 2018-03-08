angular.module("multipletodolist")
    .controller("homeCtrl",homeCtrl)

    function homeCtrl(listdata){
        console.log("HomeCtrl")
        var home = this;
        home.list = listdata;
        console.log(home.list)

        home.add =function(){
            home.category
            console.log(home.category)
            home.list.push({name:home.category,products:[]})
            console.log(home.list)
            home.category ="";
        }
    }