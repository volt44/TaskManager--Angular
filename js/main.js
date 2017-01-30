var app = angular.module('tskMngr', ['ngRoute']);

app.controller('tMngrCtrl', function($scope){
   $scope.tasks = [
    {item : "Read", status : false, comment : "Reading a text file from disk, load it on to a string"},
    {item : "Save", status : false, comment : "Saving a string to a text file"},
    {item : "Serialize", status : false, comment : "Serialize a business object to XML"},
    {item : "Deserialize", status : false, comment : "Deserialize XML from string and/or disk to a business object"},
    {item : "Validate", status : false, comment : "Validate an XML string against an XSD schema"}
   ];

    $scope.addTask = function(newTask, newComment){
        if (!(newTask === undefined || newTask === "" && newComment === undefined || newComment === "")){
            $scope.tasks.push({
               item: newTask, status: false, comment: newComment 
            });
            $scope.missingNewTaskError = "";
        } else {
            $scope.missingNewTaskError = "Must Enter a New Task"
        }
    };
});

app.controller('userCtrl', function($scope){
    $scope.user = [{
        fName: "Johan",
        lName: "Ellis"
    }];
    
    $scope.saveUser = function(userInfo){
        if($scope.userForm.$valid){
            $scope.user.push({
                fName: userInfo.fName,
                lName: userInfo.lName
            });
            console.log("User Saved");
        } else {
            console.log("Error. Could Not Save User.")
        }
   }; 
});