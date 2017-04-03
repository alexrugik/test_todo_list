var id = 1;

module.exports = 'app.main';

angular
    .module('app.main', [])
    .component('main', {
        templateUrl: "app/main/main.template.html",
        controller: MainController,
        controllerAs: '$ctrl'
    });

MainController.$inject = [];

function MainController() {
    var $ctrl = this;

    $ctrl.$onInit = init;
    $ctrl.$onDestroy = destroy;
    $ctrl.addItemToList = addItemToList;
    $ctrl.deleteItemFromList = deleteItemFromList;
    $ctrl.clearItemsFromList = clearItemsFromList;
    $ctrl.editItem = editItem;

    function init() {
        var defaultTodoListItems = [{id: id++, name: 'Item1'}, {id: id++, name: 'Item2'}];
        $ctrl.toDoList = [];
        Array.prototype.push.apply($ctrl.toDoList, defaultTodoListItems);
    }

    function destroy() {

    }

    function addItemToList(name) {
        if (!name) {
            return;
        }
        $ctrl.toDoList.push({id: id++, name: name});
        $ctrl.nameOfNewToDoItem = '';
        return this;
    }

    function deleteItemFromList(itemId) {

        if (!itemId) {
            return;
        }

        var index = $ctrl.toDoList.findIndex(function(item) {
            return itemId === item.id;
        });

        if (index === -1) {
            return;
        }

        $ctrl.toDoList.splice(index, 1);
    }

    function clearItemsFromList() {
        $ctrl.toDoList.length = 0;
    }

    function editItem(item) {
        if (!item) {
            return;
        }

        item.editMode = !item.editMode;
    }
}
