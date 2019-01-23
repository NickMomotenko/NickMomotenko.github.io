
ymaps.ready(init);

function init(){    
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 13
    });
    

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('inputSearch');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    
   
}; 
