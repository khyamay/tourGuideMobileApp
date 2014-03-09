app.views.MainView = Backbone.View.extend({
	initialize: function(){
		this.searchResults = new app.models.BuildingCollection();
		//this.searchResultsView = new app.views.BuildingListView({model: this.searchResults});
		
		this.buildingList = new app.models.BuildingCollection();       
        this.buildingList.fetch({reset: true, data:{name:""}});
       	this.buildingListView = new app.views.BuildingListView({model: this.buildingList});
	},

	render: function(){
		this.$el.html(this.template());
		//$('.scroller', this.el).append(this.searchResultsView.render().el);
		$('.scroller', this.el).append(this.buildingListView.render().el);
		return this;
	},

	events: {
		"keyup .search-key" : "search",
		"keypress .search-key" : "onkeypress"
	},

	search: function (event){
		event.preventDefault();
		//this.searchResults = new app.models.BuildingCollection();
		//this.searchResultsView = new app.views.BuildingListView({model: this.searchResults});
		//this.buildingListView = new app.views.BuildingListView({model: this.searchResults});
		var key = $('.search-key').val();
		search = this.searchResults.fetch({reset: true, data: {name: key}});
		console.log(this.searchResults.toJSON());
		//this.searchResults.reset(search)
		 //this.searchResults.on("reset", this.render, this);

	},

	onkeypress: function(event){
		if(event.keyCode === 13){
			event.preventDefault();
		}
	}
});