'use strict';

describe('myApp.players module', function() {

  beforeEach(module('myApp.players'));

  describe('players controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var PlayerCtrl = $controller('PlayerCtrl');
      expect(PlayerCtrl).toBeDefined();
    }));

  });
});