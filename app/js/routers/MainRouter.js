app.routers.MainRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"buildings/:id" : "buildingDetails",
		//"building/:id/map": "map" 
	},

	initialize: function(){
		app.slider = new PageSlider($('body'));
	},

	home: function(){
		if(!app.mainView){
			app.mainView = new app.views.MainView();
			app.mainView.render()
		} else {
			app.mainView.delegateEvents();
		}
		app.slider.slidePage(app.mainView.$el);
	},

	buildingDetails: function(id){
		console.log("clicked");
		var building = new  app.models.Building({id: id});
		building.fetch({
			success: function(data){
				var buildingView = new app.views.BuildingView({model: data});
				app.slider.slidePage(buildingView.render().$el);
				//app.slider.slidePage(new app.views.BuildingView({model: data}).render().$el);
			}

		});
	},

	//map: function (id) {
      //  app.slider.slidePage(new app.views.MapView().render().$el);

   // }

});