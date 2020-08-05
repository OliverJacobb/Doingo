var app = angular.module('ToDoListApp', []);

//controller for home page

app.controller('homePageCtrl', function ($scope) {


    $scope.toDoList = [];

    $scope.addNewToDoTask = function () {
        $scope.toDoList.push({
            project: $scope.projectInput,
            task: $scope.taskInput,
            done: false
        });
        $scope.projectInput = "";
        $scope.taskInput = "";
    };

    //counts current tasks to show on UI 
    $scope.toDoListCount = 0;

    $scope.getTaskCount = function () {
        $scope.toDoListCount = $scope.toDoList.length;
    };

    //counts current completed tasks to show on the UI 

    $scope.completedToDoListCount = 0;

    $scope.getCompletedTaskCount = function () {
        $scope.completedToDoListCount = $scope.toDoList.reduce((a, b) => b.done ? ++a : a, 0);
    };

    //deletes item from toDoList

    $scope.deleteItem = function (index) {
        $scope.toDoList.splice(index, 1);
    };

});