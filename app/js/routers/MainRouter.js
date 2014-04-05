app.routers.MainRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"buildings/:id" : "buildingDetails",
		"buildings/:id/map": "map" 
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
		var building = new  app.models.Building({id: id});
		building.fetch({
			success: function(data){
				var buildingView = new app.views.BuildingView({model: data});
				app.slider.slidePage(buildingView.render().$el);
			},
			error: function(response){
				console.log(error,'There was some error in accessing data');
			}

		});
	},

	map: function (id) {
		// var container = $('#content');
		// container.empty();
		var building = new  app.models.Building({id: id});
		building.fetch({
			success: function(data){
			var mapView = new app.views.MapView({model: data});
			// container.append(mapView.render().$el);
			// mapView.resize();
			// mapView.render();
			app.slider.slidePage(mapView.$el);
			mapView.render();
			},
			error: function(response){
				console.log(error,'There was some error in accessing data');
			}
		});
   }

});