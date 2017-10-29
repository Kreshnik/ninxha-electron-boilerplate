// Vendor
window._ = require('lodash');
window.Promise = require('promise');

window.Vue = require("vue");
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
Vue.use(ElementUI);
Vue.use(VueRouter);

// Local
window.EventKeys = require("./util/EventKeys");
window.AppUtilities = require("./util/AppUtilities");
window.AppSettings = require("./util/AppSettings");

window.EventBus = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        if (typeof callback === "function")
            this.vue.$on(event, callback);
    }
};