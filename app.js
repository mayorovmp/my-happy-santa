var app = angular.module("my-happy-santa", []);

app.controller("nameController", function($scope) {
    $scope.names = ["Марусю", "Макса", "Семена", "Галю", "Аню"];
    $scope.orders = {"МАРУСЯ":2,"МАКС":3, "СЕМЕН":1,  "ГАЛЯ":4, "АНЯ":0};
});