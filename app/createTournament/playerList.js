/**
 * Created by Dennis on 22-12-2016.
 */
angular.module('myApp')
.component('playerList',{
    templateUrl: 'createTournament/playerList.html',
    controller: playerListController
});

function playerListController(tournamentFactory) {
    var vm = this;

    vm.playerList = tournamentFactory.getPlayers();



    //Function declarations
    vm.updatePlayer = updatePlayer;
    vm.deletePlayer = deletePlayer;

    //Function implementations
    function updatePlayer(player,prop,value) {
        player[prop] = value;

    }

    function deletePlayer(player) {
        var idx = vm.playerList.indexOf(player);
        if (idx>=0){
            vm.playerList.splice(idx,1);
        }

    }
}