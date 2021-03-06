define(["knockout", "crossroads", "hasher"], function(ko, crossroads, hasher) {

//routing for home page, new post page and edit page
    return new Router({
        routes: [
            { url: '/', params: { page: 'home' } },
            { url: '/post', params: { page: 'post' } },
            { url: '/post/{id}', params: { page: 'post' }, title: 'Edit post' }
            ]
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function(route) {
            crossroads.addRoute(route.url, function(requestParams) {
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });

        activateCrossroads();
    }

    function activateCrossroads() {
        function parseHash(newHash, oldHash) { crossroads.parse(newHash); }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
});