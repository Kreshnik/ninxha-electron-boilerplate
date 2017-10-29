<template>
    <div id="App">
     
    </div>
</template>
<script>
    const Global = require('../mixins/Global');
    Vue.use(Global);
    export default {
        mounted() {
            this.$nextTick(function () {
                EventBus.fire(EventKeys.app.started, true);
            }.bind(this));
        },
        data() {
            return {
                store: window.ApplicationStore
            }
        },
        events: {},
        methods: {}
    }
</script>