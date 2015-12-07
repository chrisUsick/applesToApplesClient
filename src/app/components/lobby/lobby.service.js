export class LobbyService {
  constructor($sails) {
    'ngInject';
    this.$sails = $sails;
  }

  register (name) {
    return this.$sails.post('/lobby/join', {name:name})
      .then((data) => {
        // comment
        if (data.statusCode == 200 && !data.data.error) {
          return data.data;
        } else {
          throw data.data;
        }
      });
  }
}
