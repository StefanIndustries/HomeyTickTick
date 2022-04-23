'use strict';

const { OAuth2App } = require('homey-oauth2app');
const TickTickOAuth2Client = require('./lib/TickTickOAuth2Client');

class TickTickApp extends OAuth2App {

  static OAUTH2_CLIENT = TickTickOAuth2Client; // Default: OAuth2Client
  static OAUTH2_DEBUG = true; // Default: false
  static OAUTH2_MULTI_SESSION = true; // Default: false

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    await super.onInit();
    this.log('TickTickApp has been initialized');
    await this.onOAuth2Init();
  }

}

module.exports = TickTickApp;
