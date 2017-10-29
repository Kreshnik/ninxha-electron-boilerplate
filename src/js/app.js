"use strict";
require('./core/bootstrap');
require('./core/plugins');

// Mixins
const GlobalMixin = require('./mixins/Global');
Vue.use(GlobalMixin);

window.ApplicationStore = {
    screens: {
        current: null
    },
    settings: {}
};

window.appSettings = new AppSettings();
window.ApplicationStore.settings = appSettings.getSettings();

EventBus.listen(EventKeys.settings.updated, function () {
    appSettings.updateSettings();
});


// Components
Vue.component('app', require('./components/App'));

const App = new Vue({
    el: 'main',
    mounted() {
        this.$nextTick(function () {
            
        }.bind(this));
    },
    data: {},
    events: {},
    methods: {}
});