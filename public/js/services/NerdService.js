angular.module('NerdService', []).factory('Nerd', ['$http', function($http){
    return {
        get: function(){
            return $http.get('api/nerds');
        }
        
    }
}]);