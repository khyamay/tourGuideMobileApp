app.models.Building = Backbone.Model.extend({
	
	initailize: function(){
		this.building = new app.models.BuildingCollection();
		this.building.parent = this;
	},

	sync: function(method, model, options){
		if(method === "read"){
			app.adapters.building.findById(parseInt(this.id)).done(function(data){
				options.success(data);
			});
		}
	}


});

app.models.BuildingCollection = Backbone.Collection.extend({
	model: app.models.Building,

	sync: function(method, model, options){
		if(method === "read"){
			app.adapters.building.findByName(options.data.name).done(function(data){
				options.success(data);
			});
		}
	}
});