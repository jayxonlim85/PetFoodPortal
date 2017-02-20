var cities = [
    {
        city: 'Toronto',
        desc: 'This is the best city in the world!',
        lat: 43.7000,
        long: -79.4000
    },
    {
        city: 'New York',
        desc: 'This city is aiiiiite!',
        lat: 40.6700,
        long: -73.9400
    },
    {
        city: 'Chicago',
        desc: 'This is the second best city in the world!',
        lat: 41.8819,
        long: -87.6278
    },
    {
        city: 'Los Angeles',
        desc: 'This city is live!',
        lat: 34.0500,
        long: -118.2500
    },
    {
        city: 'Las Vegas',
        desc: 'Sin City...\'nuff said!',
        lat: 36.0800,
        long: -115.1522
    }
];


var app = angular.module('myApp', ['ngMap']);
app.controller('myCtrl', function ($scope, NgMap) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.newMarker = null;

    $scope.setMarker = function (lat, lng) {

        if ($scope.newMarker !== null) {
            console.log('clearing marker....');
            $scope.clearMarker();
        }

        $scope.newMarker = new google.maps.Marker({ title: "YouStole: Map " });
        var loc1 = new google.maps.LatLng(lat, lng);
        $scope.newMarker.setPosition(loc1);
  
        NgMap.getMap().then(function (map) { $scope.newMarker.setMap(map) });
    };

    $scope.clearMarker = function () {
        $scope.newMarker.setMap(null);
    }

    //var mapOptions = {
    //    zoom: 4,
    //    center: new google.maps.LatLng(40.0000, -98.0000),
    //    mapTypeId: google.maps.MapTypeId.TERRAIN
    //}

    //console.log('is me super pippo...');
    //$scope.map = new google.maps.Map(document.getElementById('map123'), mapOptions);
    //$scope.markers = [];
    //var infoWindow = new google.maps.InfoWindow();

    //var createMarker = function (info) {

    //    var marker = new google.maps.Marker({
    //        map: $scope.map,
    //        position: new google.maps.LatLng(info.lat, info.long),
    //        title: info.city
    //    });
    //    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

    //    google.maps.event.addListener(marker, 'click', function () {
    //        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
    //        infoWindow.open($scope.map, marker);
    //    });

    //    $scope.markers.push(marker);

    //}
    //for (i = 0; i < cities.length; i++) {
    //    createMarker(cities[i]);
    //}

    //$scope.openInfoWindow = function (e, selectedMarker) {
    //    e.preventDefault();
    //    google.maps.event.trigger(selectedMarker, 'click');
    //}
    ////-----------------------------------------------//
    //$scope.setMapMarker = function (lat, lng) {

    //    alert('u done it...');
    //};
});
//angular.bootstrap(document.getElementById('mapcontainer'), ['myApp']);
//http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory/40334829
// https://developers.google.com/maps/documentation/javascript/markers
// https://developers.google.com/maps/documentation/javascript/reference#Marker
//http://jsfiddle.net/pc7Uu/854/

// ng-map
//https://github.com/allenhwkim/angularjs-google-maps
//https://rawgit.com/allenhwkim/angularjs-google-maps/master/build/docs/index.html

//time management
// https://www.scribd.com/document/19210358/Time-Management-Anthony-Robbins


// dynamic angular map
//https://www.reonomy.com/creating-custom-google-map-markers-with-angular/

//browserfify
//https://github.com/substack/browserify-handbook

//sample signup
// https://members.123helpme.com/sign-up