export class MainController {
  constructor (lobbyService, $log) {
    'ngInject';

    this.connected = false;
    this.$log = $log;
    this.mainScope = true;
    this.lobbyService = lobbyService;

    this.tickets = lobbyService.getTickets();

    lobbyService.on('ticket', (msg) => {
      this.$log.log('ticket msg', msg);
      if (msg.verb == 'created') {
        this.tickets.push(msg.data);
      }
    });

  }


  registered (ticket) {
    this.$log.log('registered', ticket, this.mainScope);
    this.myTicket = ticket;
  }

}
