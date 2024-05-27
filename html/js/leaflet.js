document.addEventListener('DOMContentLoaded', function () {
    let map = L.map('map').setView([51.130108, 4.214556], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

   
    let customIcon = L.icon({
        iconUrl: '/assets/images/Logo.webp',
        iconSize: [40, 40], 
        iconAnchor: [20, 40], 
        popupAnchor: [0, -40] 
    });

    let marker = L.marker([51.130108, 4.214556], { icon: customIcon }).addTo(map);

    var contactForm = document.getElementById('contactform');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Formulier verstuurd! U kunt ook telefonisch contact opnemen op het nummer: +32 432 / 45 43 89');
        });
    }
});