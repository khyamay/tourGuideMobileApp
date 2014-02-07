app.views.BuildingListView = Backbone.View.extend({
	tagName: 'ul',
	attributes: {class: 'topcoat-list list'},

	initialize:function(){
		this.model.on("reset", this.render, this);
	},

	render: function(){
		this.$el.empty();
		_.each(this.model.models, function(building){
			tihs.$el.append(new app.views.BuildingListItemView({model: building}).render().el);
		}, this);
		return this;
	}
});

app.views.BuildingListItemView = Backbone.View.extend({
	tagName: "li",
	className: "topcoat-list__item",

	initialize: function(){
		this.model.on("change", this.render, this);
		this.model.on("destory", this.close, this);

	},

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});