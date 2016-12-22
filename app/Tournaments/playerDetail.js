/**
 * Created by Dennis on 21-12-2016.
 */
angular.module('myApp')
.component('playerDetail',{
    templateUrl:'Tournaments/playerDetail.html',
    controller: PlayerDetailController,
    bindings:{
        player: '<',
        onUpdate: '&',
        onDelete: '&'
    }
});

function PlayerDetailController(){
    var vm = this;

    vm.updatePlayer = upDatePlayer;
    vm.deletePlayer = deletePlayer;

    //Function imp

    function upDatePlayer(prop,value) {
        vm.onUpdate({
            player: vm.player,
            prop: prop,
            value: value
        })

    };

    function deletePlayer(){
        vm.onDelete({
            player: vm.player
        })
    }

}