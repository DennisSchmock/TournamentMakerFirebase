/**
 * Created by Dennis on 21-12-2016.
 */
angular.module('myApp').component('editableField',{
    templateUrl: 'components/globalComponents/editableField.html',
    controller: EditableFieldController,
    bindings : {
        fieldValue: '<',
        fieldType: '@?',
        onUpdate: '&'
    }
});

function EditableFieldController($element,$attrs) {
    var self = this;
    self.editMode = false;

    //Function Declarations
    self.handleModeChange = handleModeChange;
    self.reset = reset;
    self.$onInit = $onInit;

    //Function Implementations
    function handleModeChange() {
        if(self.editMode){
            self.onUpdate({value: self.fieldValue});
            self.fieldValueCopy = self.fieldValue;
        }
        self.editMode = !self.editMode;
    }


    function reset(){
        self.fieldValue = self.fieldValueCopy;
    }
    function $onInit(){
        self.fieldValueCopy = self.fieldValue;
        if (!self.fieldType){
            self.fieldType = 'text';
        }

    };
}