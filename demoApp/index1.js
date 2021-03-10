/// <reference path="angular.js" />

//json-server --watch db.json
//https://www.youtube.com/watch?v=C9soEIBDZMA

var app = angular.module("myModule",[]);

app.controller("myController",function(myFactory){
    
    this.name = "pramod";
    this.factorymethod = myFactory.Dosome();
    
});

app.factory("myFactory",function(){
    var objFact = {};
    objFact.Dosome = function(){
            return "Lawate"
        };

    return objFact;
});



app.controller('calcController',function(calcFactory){
    
    this.ProcessSum = function(){
        this.sum = calcFactory.Addition(this.num1,this.num2);
    };
});

app.factory('calcFactory',function(){

    var objCal = {};

    objCal.Addition = function(a,b){
        return parseInt(a) + parseInt(b);
    }
    
    return objCal;
});

