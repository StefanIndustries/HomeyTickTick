'use strict';

const { OAuth2Driver } = require('homey-oauth2app');

class MyDriver extends OAuth2Driver {

  async onOAuth2Init() {
    // Register Flow Cards etc.
  }

  async onPairListDevices({ oAuth2Client }) {
    //const initialBatchCheck = await oAuth2Client.getBatchCheck();
    const tickTickProfile = await oAuth2Client.getProfile();
    //console.log(initialBatchCheck);
    //console.log('-----------');
    console.log(tickTickProfile);
    return [
      {
        name: tickTickProfile.name !== null ? tickTickProfile.name : tickTickProfile.username,
        data: {
          id: tickTickProfile.username,
          // inboxId: initialBatchCheck.inboxId,
        },
      },
    ];
  }

}

module.exports = MyDriver;
