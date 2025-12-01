let listings = [];

$(document).ready(function() {
    loadListings();
    setupAllEvents();
    showPage('home');
});

function loadListings() {
    const saved = localStorage.getItem('listings');
    listings = saved ? JSON.parse(saved) : [
        { id: 1, brand: 'BMW', model: 'X5', year: 2022, price: 185000, mileage: 25000, fuel: 'Diesel', description: 'Piękny BMW X5 w doskonałym stanie. Zadbany, serwis regularny, wszystkie wyposażenie opcyjne. Bezwypadkowy.', contact: '+48 555 123 456', image: 'bmw.jpeg" width="500" height="300"%3E%3Crect fill="%236B4423" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3EBMW X5 2022%3C/text%3E%3C/svg%3E' },
        { id: 2, brand: 'Audi', model: 'A4', year: 2023, price: 125000, mileage: 15000, fuel: 'Benzyna', description: 'Audi A4 nowy model. Salon polska, gwarancja producenta, wszystkie sprzęty elektroniczne.', contact: '+48 555 234 567', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="300"%3E%3Crect fill="%232C3E50" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3EAudi A4 2023%3C/text%3E%3C/svg%3E' },
        { id: 3, brand: 'Mercedes-Benz', model: 'C-Klasa', year: 2021, price: 145000, mileage: 45000, fuel: 'Diesel', description: 'Mercedes C-Klasa, luksusowy sedan. Serwis w AS, clima, skóra, alarmator.', contact: '+48 555 345 678', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="300"%3E%3Crect fill="%23C0A080" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3EMercedes C 2021%3C/text%3E%3C/svg%3E' },
        { id: 4, brand: 'Volkswagen', model: 'Golf', year: 2020, price: 75000, mileage: 85000, fuel: 'Benzyna', description: 'VW Golf - niezawodne auto do codziennego użytku. Stan techniczny dobry, opony letnie i zimowe.', contact: '+48 555 456 789', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="300"%3E%3Crect fill="%23DC143C" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3EVW Golf 2020%3C/text%3E%3C/svg%3E' },
        { id: 5, brand: 'Toyota', model: 'Corolla', year: 2019, price: 65000, mileage: 120000, fuel: 'Hybrid', description: 'Toyota Corolla - niezawodne auto japońskie. Oszczędne paliwo, serwis regularny, bez wypadków.', contact: '+48 555 567 890', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="300"%3E%3Crect fill="%235DADE2" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="20" fill="white" text-anchor="middle" dy=".3em"%3EToyota Corolla 2019%3C/text%3E%3C/svg%3E' }
    ];
    displayHomeListings();
}

function setupAllEvents() {
    $(document).on('click', '.nav-link', function(e) {
        e.preventDefault();
        showPage($(this).data('page'));
    });
    $('#search-btn').on('click', search);
    $('#reset-btn').on('click', resetSearch);
    $('#add-listing-form').on('submit', e => { e.preventDefault(); addListing(); });
    $('.close, #listing-modal').on('click', function(e) {
        if (e.target === this || e.target.classList.contains('close')) $('#listing-modal').hide();
    });
    $(document).on('mouseenter', '.listing-card', function() { $(this).animate({ opacity: 0.95 }, 200); })
              .on('mouseleave', '.listing-card', function() { $(this).animate({ opacity: 1 }, 200); });
}

function showPage(page) {
    $('.nav-link').removeClass('active').filter(`[data-page="${page}"]`).addClass('active');
    $('.page-content').removeClass('active');
    $(`#${page}-page`).addClass('active');
    if (page === 'listings') displayAllListings();
    $('html, body').animate({ scrollTop: 0 }, 300);
}

function displayHomeListings() {
    displayListings('#home-listings', listings.slice(-3).reverse());
}

function displayAllListings() {
    displayListings('#listings-container', listings);
}

function displayListings(selector, data) {
    const container = $(selector).empty();
    if (!data.length) return container.html('<div class="no-results">Brak ogłoszeń</div>');
    data.forEach(car => {
        const card = `<div class="listing-card" data-id="${car.id}">
            <img src="${car.image}" alt="${car.brand} ${car.model}" class="listing-image">
            <div class="listing-header"><div class="listing-title">${car.brand} ${car.model}</div><div class="listing-model">${car.year}</div></div>
            <div class="listing-body">
                <div class="listing-info">
                    <div class="info-item"><span class="info-label">Przebieg</span><span class="info-value">${formatNumber(car.mileage)} km</span></div>
                    <div class="info-item"><span class="info-label">Paliwo</span><span class="info-value">${car.fuel}</span></div>
                </div>
                <div class="listing-price">zł ${formatNumber(car.price)}</div>
                <div class="listing-footer"><button class="btn-details">Szczegóły</button><button class="btn-remove" data-id="${car.id}">✕</button></div>
            </div>
        </div>`;
        container.append(card);
    });
    container.on('click', '.listing-card', function() { showDetails($(this).data('id')); })
            .on('click', '.btn-remove', function(e) { e.stopPropagation(); removeListing($(this).data('id')); });
}

function showDetails(id) {
    const car = listings.find(l => l.id === id);
    if (!car) return alert('Ogłoszenie nie znalezione!');
    $('#modal-body').html(`
        <img src="${car.image}" style="width:100%;border-radius:8px;margin-bottom:15px;max-height:350px;">
        <h2>${car.brand} ${car.model} (${car.year})</h2>
        <div class="modal-detail"><span class="modal-detail-label">Marka:</span><span class="modal-detail-value">${car.brand}</span></div>
        <div class="modal-detail"><span class="modal-detail-label">Model:</span><span class="modal-detail-value">${car.model}</span></div>
        <div class="modal-detail"><span class="modal-detail-label">Rok:</span><span class="modal-detail-value">${car.year}</span></div>
        <div class="modal-detail"><span class="modal-detail-label">Przebieg:</span><span class="modal-detail-value">${formatNumber(car.mileage)} km</span></div>
        <div class="modal-detail"><span class="modal-detail-label">Paliwo:</span><span class="modal-detail-value">${car.fuel}</span></div>
        <div class="modal-price">zł ${formatNumber(car.price)}</div>
        <div class="modal-description"><strong>Opis:</strong><br>${car.description}</div>
        <div class="modal-contact"><div>Telefon:</div><div class="modal-contact-phone">${car.contact}</div></div>
    `);
    $('#listing-modal').show();
}

function search() {
    const b = $('#search-brand').val().toLowerCase().trim(), m = $('#search-model').val().toLowerCase().trim(), y = $('#search-year').val(), p = $('#search-price-max').val();
    const results = listings.filter(car => (!b || car.brand.toLowerCase().includes(b)) && (!m || car.model.toLowerCase().includes(m)) && (!y || car.year === parseInt(y)) && (!p || car.price <= parseInt(p)));
    showPage('listings');
    displayListings('#listings-container', results);
}

function resetSearch() {
    $('#search-brand, #search-model, #search-year, #search-price-max').val('');
    displayAllListings();
}

function addListing() {
    const brand = $('#car-brand').val().trim(), model = $('#car-model').val().trim(), contact = $('#car-contact').val().trim(), image = $('#car-image').val().trim();
    if (!brand || !model || !contact || !image) return alert('Wypełnij wymagane pola!');
    listings.push({
        id: Math.max(...listings.map(l => l.id), 0) + 1,
        brand, model,
        year: parseInt($('#car-year').val()),
        price: parseInt($('#car-price').val()),
        mileage: parseInt($('#car-mileage').val()),
        fuel: $('#car-fuel').val(),
        description: $('#car-description').val().trim(),
        contact, image
    });
    saveListing();
    $('#add-listing-form')[0].reset();
    showPage('listings');
}

function removeListing(id) {
    if (confirm('Usunąć to ogłoszenie?')) {
        listings = listings.filter(l => l.id !== id);
        saveListing();
        const page = $('.page-content.active').attr('id').replace('-page', '');
        page === 'home' ? displayHomeListings() : displayAllListings();
    }
}

function formatNumber(num) { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
function saveListing() { localStorage.setItem('listings', JSON.stringify(listings)); }



