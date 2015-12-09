export class LobbyService {
  constructor($sails, $q, $rootScope) {
    'ngInject';
    this.$sails = $sails;
    this.$q = $q;
    this.$rootScope = $rootScope;
  }

  register (name) {
    return this.$sails.post('/ticket', {name:name})
      .then((data) => {
        // comment
        // check if status code is in the 200 range
        if (Math.round(data.statusCode/100) == 2 && !data.data.error) {
          return data.data;
        } else {
          throw data.data;
        }
      });
  }

  on (event, callback) {
    this.$sails.on('ticket', (data) => {
      if (data.verb == event) {
        callback(data.data);
      }
    });
  }

  getTickets () {
    var tickets = [];
    tickets.$promise = this.$q((resolve) => {
      this.$sails.get('/ticket', (data) => {
        data.forEach((ticket) => tickets.push(ticket));
        this.$rootScope.$apply();
        resolve(data);
      });
    });
    return tickets;
  }
}
