/**
 * Created by Dennis on 20-12-2016.
 */
angular.module('myApp')
    .component('teamDetail', {
        templateUrl: 'createTournament/teamDetail.html',
        controller: TeamDetailController,
        bindings: {
            team: '<',
            onDelete: '&',
            onUpdate: '&'
        }
    });


function TeamDetailController(){
    var vm = this;

    //Function implementation
    vm.updateTeam = function (prop,value){
         vm.onUpdate({team: vm.team, prop: prop, value:value})
    }

    vm.deleteTeam = function (){

        vm.onDelete ({team: vm.team});
    }
}