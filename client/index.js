angular.module('myApp', []).controller('ctrl', function ($scope, $http) {
    $scope.add = function () {
        $http.post("http://localhost:3000/login", {name: "umr"}).success(function (msg) {
            console.log("response", msg);
        });
    };
});