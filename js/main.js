// Пример данных (обычно берутся из API)
const cars = [
    {
        id: 1,
        brand: 'BMW',
        model: 'M5 CS',
        year: 2021,
        engine: {
            power: 635,
            volume: 4.4,
        },
        image: "img/BMWM5CS.jpg",
        specs: {
            speed: 305,
            acceleration: '3.1с',
            drive: '4WD'
        },
        price: '$125,000',
        rating: 9.2,
        weight: 1865,
        description: 'Седан с мощным двигателем V8, улучшенной аэродинамикой, сниженной массой и эксклюзивным оформлением.',
    },
    {
        id: 2,
        brand: 'Tesla',
        model: 'Model S Plaid',
        year: 2023,
        engine: {
            power: 1020,
            volume: 4.4,
        },
        image: "img/TeslaModelS.jpg",
        specs: {
            speed: 300,
            acceleration: '2.1с',
            drive: 'AWD',
        },
        price: '$135,000',
        rating: 4.9,
    },
    // ... больше данных
];

// Генератор карточек
function renderCars(carsArray) {
    const grid = document.getElementById('catalog');
    grid.innerHTML = ''; // Очищаем сетку перед рендерингом

    carsArray.forEach(car => {
        const card = document.createElement('article');
        card.className = 'car-card';
        card.innerHTML = `
            <div class="card-grid">
            <article class="car-card">
            <div class="card-header">
                <span class="car-badge">NEW</span>
                <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image">
            </div>
            <div class="card-body">
                <h3 class="car-title">
                    <span class="car-brand">${car.brand} &nbsp; </span>
                    <span class="car-model">${car.model} ${car.year}</span>
                </h3>
                <p class="car-description">
                    ${car.description}
                </p>
                <div class="spec-grid">
                    <div class="spec-item">
                        <span class="spec-label" data-label="Двигатель">Двигатель</span>
                        <span class="spec-value">
                            <span class="spec-power">Мощность:</span>
                        ${car.engine.power} л.с. <br>
                        </span>
                        <span class="spec-value">
                            <span class="spec-volume">Объём:</span>
                        ${car.engine.volume} л
                        </span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label" data-label="Разгон">Скорость</span>
                        <span class="spec-value">
                            <span class="spec-acc">0-100 km/h: </span>${car.specs.acceleration} <br>
                        </span>
                    <span class="spec-value">
                        <span class="spec-speed">
                        <span class="spec-max">MAX:</span>
                        ${car.specs.speed} km/h
                        </span>
                    </span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label" data-label="Привод">Привод</span>
                        <span class="spec-value">${car.specs.drive}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label" data-label="Вес">Вес</span>
                        <span class="spec-value">${car.weight} кг</span>
                    </div>
                </div>
                <div class="additional-info">
                    <span class="car-price">${car.price}</span>
                    <span class="car-rating">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        ${car.rating}
                    </span>
                </div>
            </div>
            <div class="action-bar">
                <button class="action-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Обзор
                </button>
                <button class="action-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    Избранное
                </button>
            </div>
</article>
</div>
        `;
        grid.appendChild(card);
    });
}

// Поиск
document.querySelector('.search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCars = cars.filter(car =>
        car.brand.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm)
    );
    renderCars(filteredCars); // Рендерим отфильтрованные автомобили
});

// Инициализация
window.addEventListener('DOMContentLoaded', () => renderCars(cars));
