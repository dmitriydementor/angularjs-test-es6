import { Phone } from './phone.js';

class PhoneListController {
    constructor($scope) {
        this.init($scope);
    }

    init($scope) {
        $scope.phones = [
            new Phone('Asus Zenfone 2', 'Sec phone'),
            new Phone('Sony Xperia Z5 Dual', 'Third phone'),
            new Phone('Fly IQ446', '1st phone'),
        ]
    }
}

PhoneListController.$inject = ['$scope'];


export {
    PhoneListController
}
