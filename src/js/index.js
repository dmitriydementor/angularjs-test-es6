'use strict';
import angular from 'angular';

import '../scss/style.scss';
import { PhoneListComponent } from './components/phone-list/phone-list.component.js'

let phoneApp = angular.module('phoneApp', []);
phoneApp.component('phoneList', PhoneListComponent);
