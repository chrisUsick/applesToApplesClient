export class MainController {
  constructor ($timeout, $sails, $log) {
    'ngInject';

    this.connected = false;
    this.$log = $log;
    this.mainScope = true;
  }


  registered (ticket) {
    this.$log.log('registered', ticket, this.mainScope);
    this.myTicket = ticket;
  }

}
