'use strict';

const { OAuth2Device } = require('homey-oauth2app');

class MyDevice extends OAuth2Device {

  async onOAuth2Init() {
    await this.oAuth2Client.getThingState()
      .then(async state => {
        await this.setCapabilityValue('onoff', !!state.on);
      });
  }

  async onOAuth2Deleted() {
    // Clean up here
  }

}

module.exports = MyDevice;
