const { OAuth2Client, OAuth2Error, OAuth2Token } = require('homey-oauth2app');

module.exports = class TickTickOAuth2Client extends OAuth2Client {

  // Required:
  static API_URL = 'https://api.ticktick.com/api/v1';
  static TOKEN_URL = 'https://ticktick.com/oauth/token';
  static AUTHORIZATION_URL = 'https://ticktick.com/oauth/authorize';
  static SCOPES = ['tasks:write tasks:read'];

  // Optional:
  static TOKEN = OAuth2Token; // Default: OAuth2Token
  static REDIRECT_URL = 'https://callback.athom.com/oauth2/callback'; // Default: 'https://callback.athom.com/oauth2/callback'

  async onHandleNotOK({ body }) {
    throw new OAuth2Error(body.error);
  }

  async getBatchCheck() {
    return this.get({
      path: '/batch/check/0',
    });
  }

  async getProfile() {
    return this.get({
      path: '/user/profile',
    });
  }
};
