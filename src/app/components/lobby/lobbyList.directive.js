export function LobbyListDirective() {

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/lobby/list.html',
    scope: {
    },
    controller: LobbyListController,
    controllerAs: 'c',
    bindToController: true
  }

  return directive;
}

class LobbyListController {
  constructor($log, lobbyService) {
    'ngInject';
    this.tickets = lobbyService.getTickets();

    lobbyService.on('created', (ticket) => {
      this.tickets.push(ticket);
    });
  }
}
