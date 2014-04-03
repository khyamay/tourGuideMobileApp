app.views.MainView = Backbone.View.extend({
	initialize: function(){
		className: '.scroller',
		this.buildingList = new app.models.BuildingCollection(); 
        this.buildingList.fetch({reset: true, data:{name:""}});
       	this.buildingListView = new app.views.BuildingListView({model: this.buildingList});
	},

	render: function(){
	// _.each(this.buildingList.models, function(building){
	// 		console.log(building.get('lng'));
	// 	}, this);

		this.$el.html(this.template());
		this.$el.append(this.buildingListView.render().el);
		return this;
	},

	events: {
		"keyup .search-key" : "search",
		"keypress .search-key" : "onkeypress"
	},

	search: function (event){
		event.preventDefault();
		var key = $('.search-key').val();
		this.buildingList.fetch({reset: true, data: {name: key}});
		this.BuildingListView = new app.views.BuildingListView({model: this.buildingList});

	},

	onkeypress: function(event){
		if(event.keyCode === 13){
			event.preventDefault();
		}
	}
});