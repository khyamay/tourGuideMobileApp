app.routers.MainRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"building/:id" : "buildingDetails",
		"building/:id/map": "map" 
	},

	initialize: function(){
		app.slider = new PageSlider($('body'));
	},

	home: function(){
		if(!app.homeView){
			app.mainView = new app.view.MainView();
			app.mainView.render()
		} else {
			app.homeView.delegateEvents();
		}
		app.slider.slidePage(app.mainView.$el);
	},

	buildingDetails: function(id){
		var building = new  app.models.Building({id : id});
		building.fetch({
			success: function(data){
				//var buildingView = app.views.BuildingView({model: data});
				//app.slider.slidePage(buildingView.render().$el);
				app.slider.slidePage(new app.views.BuildingView({model: data}).render().$el);
			}

		});
	},

	map: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);

    }

    //Backbone.history.back();
});