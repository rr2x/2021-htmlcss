// google maps
function initMap() {
  const loc = { lat: 0, lng: 0 }; // lookup lat/lng at: https://latlong.net
  const map = new google.maps.Map(document.querySelector('.map'), { zoom: 14, center: loc });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.5;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// jquery smooth scrolling
$('#navbar a, .btn').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800);
  }
});