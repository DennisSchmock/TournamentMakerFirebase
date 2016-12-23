/**
 * Created by Dennis on 21-12-2016.
 */
angular.module('myApp').component('teamList', {
    templateUrl: 'createTournament/teamList.html',
    controller: TeamListController
});

function TeamListController(tournamentFactory) {
    var vm = this;

    vm.teamList = tournamentFactory.getTeams();

    //Function declarations
    vm.updateTeam = updateTeam;
    vm.deleteTeam = deleteTeam;


    //Function implementations

    function updateTeam(team,prop,value) {
        team[prop] = value;

    }

    function deleteTeam(team) {
        var idx = vm.teamList.indexOf(team);
        if (idx >=0){
            vm.teamList.splice(idx,1);
        }

    }
}