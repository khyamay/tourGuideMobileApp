app.views.MainView = Backbone.View.extend({
	initialize: function(){
		this.searchResults = new app.models.BuildingCollection();
		this.searchResultsView = new app.views.BuildingListView({model: this.searchResults});
	},

	render: function(){
		this.$el.html(this.template());
		$('.scroller', this.el).append(this.searchResultsView.render().el);
		return this;
	},

	events: {
		"keyup .search-key" : "search",
		"keypress .search-key" : "onkehpress"
	},

	search: function (event){
		var key = $('.search-key').val();
		this.searchResults.fetch({reset: true, data: {name: key}});
	},

	onkehpress: function(event){
		if(event.keyCode === 13){
			event.preventDefault();
		}
	}
});