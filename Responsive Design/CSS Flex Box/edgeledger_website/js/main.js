// JQuery is good for animations and smooth scrolling
// https://code.jquery.com/
// Beginning to be used less (Can just use JavaScript)
// Can just use a CDN instead of downloading it (Look for CDN on JQuery)

// Initialize and add the map
function initMap() {
  // Used in the HTML-embedded Google Map
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Can get locations here: latlong.net
  // Centered map on location

  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // Targets the "map" class in the HTML (that you created)
 
  const marker = new google.maps.Marker({ position: loc, map: map });
   // The marker, positioned at location (Places a marker on the map)
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
//Used to scroll when you click a tab
$('#navbar a,').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
      // Millisecond scroll speed
    );
  }
});