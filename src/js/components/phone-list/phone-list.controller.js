'use strict';

import {
    Phone
} from './phone.js';

class InjectorController {
    /**
     * constructor - Takes angularjs scope variable and assigns it to object
     *
     * @param  {Object} $scope angularjs $scope variable
     * @return {void}
     */
    constructor($scope) {
        this.$scope = $scope;
        this.injectMethods();
    }

    /**
     * injectMethods - Injects all methods in class in scope variable.
     * After calling this function you can use this.<yourScopeVariable> directly
     *
     * @return {void}
     */
    injectMethods() {
        Object.getOwnPropertyNames(this.__proto__).filter((pr) => {
                return typeof this.__proto__[pr] === 'function' && pr !== 'constructor' && pr !== 'injectMethods';
            })
            .forEach((f) => {
                this.$scope[f] = this.__proto__[f];
            });
    }

}

class PhoneListController extends InjectorController {
    constructor($scope) {
        super($scope); // injecting methods in $scope. Now "this" points to $scope object
        $scope.phones = [
            new Phone('Asus Zenfone 2', 'Sec phone'),
            new Phone('Sony Xperia Z5 Dual', 'Third phone'),
            new Phone('Fly IQ446', '1st phone'),
        ];
        $scope.isTestButtonClicked = false;
        $scope.amountOfClicks = 0;
    }

    onTestButtonClick() {
        this.amountOfClicks++;
        this.isTestButtonClicked = true;
    }
}

PhoneListController.$inject = ['$scope'];


export {
    PhoneListController
}
