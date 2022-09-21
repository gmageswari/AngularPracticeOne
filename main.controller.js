app.controller("practiceOneController",function($scope){
    $scope.students = [
        {
            name : "A",
            course : "AAA",
            show : false
        },
        {
            name : "B",
            course : "BBB",
            show : false
        },
        {
            name : "C",
            course : "CCC",
            show : false
        },
        {
            name : "D",
            course : "DDD",
            show : false
        }
    ];
    
    $scope.add = function(name,course,btnValue){
        $scope.students.push({
            name,
            course,
            show : false,
        });
        $scope.newName = "";
        $scope.newCourse = "";
    };

    $scope.delete = function(key){
        $scope.students = $scope.students.filter((eachStudent)=>eachStudent.$$hashKey !== key);
    }; 
   
    $scope.edit = function(key){
        $scope.students = $scope.students.map((eachStudent)=>{
            if(eachStudent.$$hashKey === key){
                eachStudent.show = true;
            }
            return eachStudent;
        })
    };

    $scope.ok = function(key){
        $scope.students = $scope.students.map((eachStudent)=>{
            if(eachStudent.$$hashKey === key){
                eachStudent.show = false;
            }
            return eachStudent;
        })
    };

   
    
});