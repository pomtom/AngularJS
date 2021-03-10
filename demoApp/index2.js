/// <reference path="angular.js" />

var app = angular.module("myModule",[]);

app.controller('employeeCtrl',function(employeeFactory){
    this.message = "Get all Employees";
    var vm = this;
    employeeFactory.getAllEmployee(function(callback){
        vm.employees = callback;
    });
});

app.factory('employeeFactory',function($http, $log){
$log.log('initialize emp factory');
    var objEmployee = {};

    objEmployee.getAllEmployee = function(cb){
        $http({
            url:"http://localhost:3000/employees",
            method:"GET"
        }).then(function(response){
            $log.log(response.data);
            cb(response.data);
        },function(reason){
            $log.log(reason.data);
            return reason.data;    
        });
    }
    return objEmployee;
});