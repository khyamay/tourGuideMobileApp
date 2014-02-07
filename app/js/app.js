var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.MainRouter();
    app.utils.templates.load(["MainView", "BuildingView", "BuildingListItemView", "MapView"],
        function () {
            app.router = new app.routers.MainRouter();
            Backbone.history.start();
        });
});