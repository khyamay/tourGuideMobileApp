app.views.MapView = Backbone.View.extend({
  
  initialize: function(){
   // this.buildingList = new app.models.BuildingCollection({model: this.model}); 
    this.render();
  },

  initMap: function () {
        var lat = this.model.get('lat');
        var lng = this.model.get('lng');
        var directionsService = new google.maps.DirectionsService();  
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var myLatlng = new google.maps.LatLng(51.903679, -8.468274);
        var mapOptions = {
            center: myLatlng,
            zoom: 12,
            };

        this.map = new google.maps.Map(this.$el.find('#map-canvas')[0], mapOptions);
        directionsDisplay.setMap(this.map);
        directionsDisplay.setPanel(this.$el.find('#directions-panel')[0]);
        


        //ToDo Add error handling
        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
                var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var start = start;
                var end = new google.maps.LatLng(lat, lng);

                var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.WALKING
                };

                 directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                        }
                    });
            });

        } else{
            handleNoGeolocation(false);
        }
       
    },
    
    resize: function() {
        google.maps.event.trigger(this.map, 'resize');
    },

    render: function () {
        console.log(this.model.get('lng'));
        this.$el.html(this.template(this.attributes));
        this.initMap();
        return this;

    }


});