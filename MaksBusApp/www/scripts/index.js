// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    var latitudeRange = [
        {
            latFrom: 50.0975,
            latTo: 50.0040,
            longFrom: 19.8272,
            longTo: 20.0792,
            city: "Kraków"
        },
        {
            latFrom: 49.9881,
            latTo: 49.9075,
            longFrom: 19.9944,
            longTo: 20.2615,
            city: "Wieliczka"
        },
        {
            latFrom: 49.9179,
            latTo: 49.8809,
            longFrom: 20.3120,
            longTo: 20.1620,
            city: "Gdów"
        },
        {
            latFrom: 49.8701,
            latTo: 49.8368,
            longFrom: 20.2579,
            longTo: 20.3280,
            city: "Łapanów"
        },
        {
            latFrom: 49.8112,
            latTo: 49.7405,
            longFrom: 20.2921,
            longTo: 20.3910,
            city: "Rybie"
        },
        {
            latFrom: 49.8289,
            latTo: 49.7822,
            longFrom: 20.3800,
            longTo: 20.4775,
            city: "Żegocina"
        },
        {
            latFrom: 49.8341,
            latTo: 49.7775,
            longFrom: 20.2166,
            longTo: 20.3130,
            city: "Szyk"
        },
        {
            latFrom: 49.8548,
            latTo: 49.8311,
            longFrom: 20.3323,
            longTo: 20.4435,
            city: "Trzciana"
        },
        {
            latFrom: 49.7629,
            latTo: 49.7387,
            longFrom: 20.3827,
            longTo: 20.5022,
            city: "Laskowa"
        },
        {
            latFrom: 49.7604,
            latTo: 49.5758,
            longFrom: 20.2866,
            longTo: 20.6450,
            city: "Limanowa"
        }
    ];
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
 
    function exitFromApp()
    {
        navigator.notification.confirm(
            'Czy chcesz wyjść?',  // message
            function (buttonIndex) {
                if (buttonIndex === 1)
                    cordova.plugins.exit();
                else return;

            },              // callback to invoke with index of button pressed
            'Zamknij',            // title
            'Tak,Nie'          // buttonLabels
        );
       
    }



    function onDeviceReady() {

        //cordova.plugins.notification.local.schedule({
        //    title: 'MaxBus',
        //    text: 'Kolejny przystanek za:',
        //    foreground: true
        //});
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", exitFromApp, false);
        console.log("location");
        //cordova.plugins.diagnostic.isGpsLocationEnabled(function (enabled) {
        //    console.log("GPS location is " + (enabled ? "enabled" : "disabled"));
        //    var htt = document.getElementById("mapa");
        //        htt.innerHTML = enabled;
        //}, function (error) {
        //    console.error("The following error occurred: " + error);
        //});   
        //var watchId = navigator.geolocation.watchPosition(function (data) {
        //    var lat = data.coords.latitude;
        //    var leng = data.coords.longitude;
        //    var htt = document.getElementById("mapa");
        //    htt.innerHTML = lat;
        //    for (let i = 0; i < latitudeRange.length; i++) {
        //        if (lat < latitudeRange[i].latFrom && lat > latitudeRange[i].latTo && leng > latitudeRange[i].longFrom && leng < latitudeRange[i].longTo) {
        //            console.log(latitudeRange[i].city);
        //        }
        //    }
        //});
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //var parentElement = document.getElementById('deviceready');
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

   
} )();