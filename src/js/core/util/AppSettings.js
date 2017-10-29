const ElectronSettings = require('electron-settings');

class AppSettings {

    constructor() {
        this.settingsKey = 'settings';
        this.checkIfSettingsExist();
    }

    checkIfSettingsExist() {
        if (!ElectronSettings.has(this.settingsKey)) {
            this.updateSettings();
        }
    }

    checkIfEqual() {
        if (!_.isEqual(ElectronSettings.get(this.settingsKey), window.ApplicationStore.settings)) {
            this.updateSettings();
        }
    }

    getSettings() {
        if (!ElectronSettings.has(this.settingsKey)) return window.ApplicationStore.settings;
        const settings = _.assign({}, AppUtilities.getPlainObject(window.ApplicationStore.settings), ElectronSettings.get(this.settingsKey));
        return settings;
    }

    updateSettings() {
        const settings = AppUtilities.getPlainObject(window.ApplicationStore.settings);
        ElectronSettings.setAll({
            settings: settings
        });
        EventBus.fire(EventKeys.settings.stored, true);
    }

}

module.exports = AppSettings;