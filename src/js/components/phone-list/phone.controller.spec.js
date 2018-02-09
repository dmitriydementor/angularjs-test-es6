'use strict';

import { PhoneListController } from './phone.controller.js';

describe('PhoneListController', function() {

    it('should create a `phones` model with 3 phones', function() {
        var scope = {};
        var ctrl = new PhoneListController(scope);

        expect(scope.phones.length).toBe(3);
    });

});
