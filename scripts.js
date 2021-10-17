mapboxgl.accessToken = 
    'pk.eyJ1IjoicmV4Z3VlcnoiLCJhIjoiY2t1dTkzZHg3MHJtZTMxcDdoZTVzY3dsNSJ9.XvIbyZHThfZplU8htP2YOg'


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    /* Display navigation directions */
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    )

    /* Display zoom and rotate controls */
    map.addControl(new mapboxgl.NavigationControl()) 
    
}

