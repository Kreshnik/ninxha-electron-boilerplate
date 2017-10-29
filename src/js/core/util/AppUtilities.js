const path = require('path');

class AppUtilities {
    static getPlainObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    static isWindows() {
        return (path.sep === "\\");
    }
}

module.exports = AppUtilities;