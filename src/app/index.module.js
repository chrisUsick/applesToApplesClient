/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
// controllers
import { MainController } from './main/main.controller';

// directives
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { LobbyDirective } from '../app/components/lobby/lobby.directive';

// services
import {LobbyService} from '../app/components/lobby/lobby.service';
angular.module('applesToApplesClient', ['ngSails', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('lobbyRegister', LobbyDirective)
  .service('lobbyService', LobbyService);
