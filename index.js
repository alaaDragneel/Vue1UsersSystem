var Vue = require('Vue'); // if installed pakage
Vue.use(require('vue-moment')); // mement library
// vue-router
var VueRouter = require('vue-router');
Vue.use(VueRouter);
// vue-resource
var VueResource = require('vue-resource');
Vue.use(VueResource);

Vue.filter("addDote", function (val, com) {
    return val + ' ' + com;
});

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
// !! Note that the App is not a Vue instance.
var App = Vue.extend({});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter();

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/home': {
        component: require('./home.vue')

    },
    '/users': {
        component: require('./user.vue')
    },
    '/about': {
        component: require('./about.vue')
    },
    '/contact-us': {
        component: require('./contact-us.vue')
    },
    '/login': {
        component: require('./login.vue')
    }
});


// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector body.
router.start(App, 'body');
