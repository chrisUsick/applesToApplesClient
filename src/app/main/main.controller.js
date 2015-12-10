export class MainController {
  constructor (lobbyService, $log) {
    'ngInject';

    this.connected = false;
    this.$log = $log;
    this.mainScope = true;
    this.lobbyService = lobbyService;

  }


  registered (ticket) {
    this.$log.log('registered', ticket, this.mainScope);
    this.myTicket = ticket;
  }

}
