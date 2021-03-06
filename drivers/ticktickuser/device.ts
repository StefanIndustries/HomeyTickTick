import Homey from 'homey';
import { CryptoClient } from '../../lib/CryptoClient';
import { TickTickClient } from '../../lib/TickTickClient';

class TickTickUserDevice extends Homey.Device {

  public client!: TickTickClient;

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    const data = this.getData();
    const cryptoClient = new CryptoClient(Homey.env.CRYPTO_KEY);
    if (data) {
      this.client = new TickTickClient(cryptoClient.decrypt(data.username), cryptoClient.decrypt(data.password));
    }
    this.log('TickTickUserDevice has been initialized');
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('TickTickUserDevice has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings: {}, newSettings: {}, changedKeys: {} }): Promise<string|void> {
    this.log('TickTickUserDevice settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name: string) {
    this.log('TickTickUserDevice was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('TickTickUserDevice has been deleted');
  }

}

module.exports = TickTickUserDevice;
