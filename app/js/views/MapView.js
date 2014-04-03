app.views.MapView = Backbone.View.extend({
    // render: function () {
    //     this.$el.html(this.template());

    //     setTimeout(function() {
    //         // create a map in the "map" div, set the view to a given place and zoom
    //         var map = L.map('map', {zoomControl:false}).setView([42.35996, -71.05579], 16);
    //         // add an OpenStreetMap tile layer
    //         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //             attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //         }).addTo(map);

    //         // add a marker in the given location, attach some popup content to it and open the popup
    //         L.marker([42.35996, -71.05579]).addTo(map);
    //     });

    //     return this;
    // }
    
    // initialize: function () {          
    //     this.render(); 



    // },

    initMap: function () {
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

        var start = new google.maps.LatLng(50.797780, -1.096246);
        var end = new google.maps.LatLng(50.79769531954814, -1.0982452630996);

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
       
    },
    
    resize: function() {
        google.maps.event.trigger(this.map, 'resize');
    },

    render: function () {
        this.$el.html(this.template(this.attributes));
        this.initMap();
        return this;

    }


});