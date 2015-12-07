export function LobbyDirective() {

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/lobby/register.html',
    scope: {
      name: '=',
      registered: '&'
    },
    controller: LobbyController,
    controllerAs: 'c',
    bindToController: true
  }

  return directive;
}

class LobbyController {
  constructor($log, lobbyService) {
    'ngInject';
    this.lobbyService = lobbyService;
    this.name = 'enter a name';
    this.$log = $log;
  }

  submit () {
    this.uniqueError = false;
    this.lobbyService.register(this.name)
      .then((data) => {
        this.$log.log('from directive', data);
        this.registered({ticket:data});
      })
      .catch((err) => {
        this.$log.log(err);
        this.uniqueError = true;
      });
  }
}
