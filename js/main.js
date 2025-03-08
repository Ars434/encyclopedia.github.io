const cars = [
    {
        id: 33,
        brand: 'Alfa Romeo',
        model: '156',
        year: 2003,
        engine: {
            power: '250 л.с.',
            volume: '3.5 л.',
        },
        image: "img/AlfaRomeo156.jpg",
        specs: {
            speed: '250 km/h',
            acceleration: '6.3с',
            drive: 'FWD'
        },
        price: '$6.000',
        rating: '8.6',
        weight: '1485 кг',
        description: 'Элегантный и динамичный седан с уникальным дизайном и превосходной управляемостью, воплощающий дух итальянского автомобилестроения.',
    },
    {
        id: 32,
        brand: 'Alfa Romeo',
        model: '155',
        year: 1996,
        engine: {
            power: '150 л.с.',
            volume: '2.0 л.',
        },
        image: "img/AlfaRomeo155.jpg",
        specs: {
            speed: '210 km/h',
            acceleration: '9.0с',
            drive: 'FWD'
        },
        price: '$2.000',
        rating: '8.3',
        weight: '1250 кг',
        description: 'Спортивный седан с выразительным итальянским дизайном и отличным сочетанием динамики и комфорта.',
    },
    {
        id: 31,
        brand: 'Alfa Romeo',
        model: '147',
        year: 2004,
        engine: {
            power: '150 л.с.',
            volume: '2.0 л.',
        },
        image: "img/AlfaRomeo147.jpeg",
        specs: {
            speed: '208 km/h',
            acceleration: '9.3с',
            drive: 'FWD'
        },
        price: '$8.000',
        rating: '8.6',
        weight: '1320 кг',
        description: 'Стильный итальянский хэтчбек с характерным дизайном и спортивным характером, популярный среди любителей динамичной езды.',
    },
    {
        id: 30,
        brand: 'Alfa Romeo',
        model: '146',
        year: 1997,
        engine: {
            power: '150 л.с.',
            volume: '2.0 л.',
        },
        image: "img/AlfaRomeo146.webp",
        specs: {
            speed: '215 km/h',
            acceleration: '8.5с',
            drive: 'FWD'
        },
        price: '$3.000',
        rating: '8.1',
        weight: '1237 кг',
        description: 'Спортивный седан с выразительным дизайном, отличным управлением и фирменной страстью бренда, предлагающий комфорт и динамику в одном автомобиле.',
    },
    {
        id: 29,
        brand: 'Alfa Romeo',
        model: '145',
        year: 1997,
        engine: {
            power: '150 л.с.',
            volume: '2.0 л.',
        },
        image: "img/AlfaRomeo145.jpg",
        specs: {
            speed: '210 km/h',
            acceleration: '8.4с',
            drive: 'FWD'
        },
        price: '$2.000',
        rating: '8.6',
        weight: '1200 кг',
        description: 'Компактный спортивный хэтчбек с характерным итальянским дизайном и динамичными характеристиками, сочетающий стильный внешний вид и удовольствие от вождения.',
    },
    {
        id: 28,
        brand: 'Alfa Romeo',
        model: '15 HP',
        year: 1911,
        engine: {
            power: '24 л.с.',
            volume: '2.4 л.',
        },
        image: "img/AlfaRomeo15HP.jpeg",
        specs: {
            speed: '95 km/h',
            acceleration: '-',
            drive: 'RWD'
        },
        price: '-',
        rating: '-',
        weight: '920 кг',
        description: 'Один из первых автомобилей компании Alfa Romeo, представляющий собой элегантный и мощный транспорт начала XX века с 4-цилиндровым двигателем.',
    },
    {
        id: 27,
        brand: 'Alfa Romeo',
        model: '12C',
        year: 1936,
        engine: {
            power: '370 л.с.',
            volume: '4.1 л.',
        },
        image: "img/AlfaRomeo12C.jpg",
        specs: {
            speed: '290 km/h',
            acceleration: '-',
            drive: 'RWD'
        },
        price: '-',
        rating: '-',
        weight: '818 кг',
        description: 'Легендарный гоночный автомобиль 1930-х годов, оснащённый 12-цилиндровым двигателем объёмом 4 литра и разработанный для участия в автогонках Гран-при.',
    },
    {
        id: 26,
        brand: 'Alfa Romeo',
        model: '33 Stradale',
        year: 2023,
        engine: {
            power: '750 л.с.',
            volume: '-',
        },
        image: "img/AlfaRomeo33Stradale.jpg",
        specs: {
            speed: '310 km/h',
            acceleration: '2.5с',
            drive: '4WD'
        },
        price: '$2.000.000',
        rating: '-',
        weight: '2100 кг',
        description: 'Современное воплощение легендарного итальянского спорткара с ярким дизайном, высокими технологиями и впечатляющей динамикой.',
    },
    {
        id: 25,
        brand: 'Alfa Romeo',
        model: '33',
        year: 1990,
        engine: {
            power: '84 л.с.',
            volume: '1.8 л',
        },
        image: "img/AlfaRomeo33.webp",
        specs: {
            speed: '188 km/h',
            acceleration: '9.5с',
            drive: 'FWD'
        },
        price: '$3.000',
        rating: '8.0',
        weight: '950 кг',
        description: 'Компактный итальянский хэтчбек, известный своей управляемостью и динамикой.',
    },
    {
        id: 24,
        brand: 'Subaru',
        model: 'Impreza WRX STI',
        year: 2006,
        engine: {
            power: '280 л.с.',
            volume: '2.5 л',
        },
        image: "img/ImprezaWRXSTI.jpg",
        specs: {
            speed: '255 km/h',
            acceleration: '5.9с',
            drive: '4WD'
        },
        price: '$18.000',
        rating: '9.2',
        weight: '1495 кг',
        description: 'Культовый полноприводный спортивно-тюнингованный седан с мощным турбированным двигателем, известным своей скоростью, управляемостью и раллийной родословной.',
    },
    {
        id: 23,
        brand: 'BMW',
        model: 'X5',
        year: 2023,
        engine: {
            power: '625 л.с.',
            volume: '4.4 л',
        },
        image: "img/BMWX5.jpg",
        specs: {
            speed: '290 km/h',
            acceleration: '3.9с',
            drive: '4WD'
        },
        price: '$205.000',
        rating: '9.6',
        weight: '2400 кг',
        description: 'Высокопроизводительный внедорожник с мощнейшим двигателем V8, агрессивным дизайном и роскошным салоном, сочетающий динамику спорткара с комфортом премиального SUV.',
    },
    {
        id: 22,
        brand: 'Nissan',
        model: 'GT-R',
        year: 2010,
        engine: {
            power: '540 л.с.',
            volume: '3.8 л',
        },
        image: "img/NissanGTR.jpg",
        specs: {
            speed: '315 km/h',
            acceleration: '2.8с',
            drive: '4WD'
        },
        price: '$50.000',
        rating: '9.1',
        weight: '1740 кг',
        description: 'Мощный спортивный автомобиль с передовыми технологиями, выдающейся динамикой и легендарной репутацией, продолжающий традиции высоких скоростей и управляемости.',
    },
    {
        id: 21,
        brand: 'Dodge',
        model: 'Charger',
        year: 2018,
        engine: {
            power: '492 л.с.',
            volume: '6.4 л',
        },
        image: "img/DodgeCharger.avif",
        specs: {
            speed: '290 km/h',
            acceleration: '4.5с',
            drive: 'RWD'
        },
        price: '$65.000',
        rating: '8.8',
        weight: '1990 кг',
        description: 'Мощный мускул-кар с мотором V8 6.4 л, автоматом и агрессивным дизайном для фанатов динамики и американского стиля.',
    },
    {
        id: 20,
        brand: 'Cadillac',
        model: 'CT5',
        year: 2019,
        engine: {
            power: '355 л.с.',
            volume: '3.0 л',
        },
        image: "img/CadillacCT5.jpg",
        specs: {
            speed: '275 km/h',
            acceleration: '5.0с',
            drive: 'RWD'
        },
        price: '$75.000',
        rating: '-',
        weight: '1805 кг',
        description: 'Спортивный седан премиум-класса с мощным двигателем, отличной динамикой и роскошным салоном, олицетворяющий сочетание высоких технологий и комфорта.',
    },
    {
        id: 19,
        brand: 'Ferrari',
        model: 'SF90 Stradale',
        year: 2019,
        engine: {
            power: '780 л.с.',
            volume: '4.0 л',
        },
        image: "img/SF90.jpg",
        specs: {
            speed: '340 km/h',
            acceleration: '2.5с',
            drive: '4WD'
        },
        price: '$600.000',
        rating: '-',
        weight: '1570 кг',
        description: 'Гибридный суперкар, сочетающий невероятную мощность, передовые технологии и неповторимый дизайн Ferrari.',
    },
    {
        id: 18,
        brand: 'Alfa Romeo',
        model: 'Giulia',
        year: 2020,
        engine: {
            power: '510 л.с.',
            volume: '2.9 л',
        },
        image: "img/Gulia.jpg",
        specs: {
            speed: '307 km/h',
            acceleration: '3.9с',
            drive: 'RWD'
        },
        price: '$65.000',
        rating: '8.9',
        weight: '1695 кг',
        description: 'Стильный итальянский седан с спортивным характером, отличным дизайном и превосходной динамикой.',
    },
    {
        id: 17,
        brand: 'Volkswagen',
        model: 'Golf R',
        year: 2022,
        engine: {
            power: '333 л.с.',
            volume: '2.0 л',
        },
        image: "img/VolkswagenGolfR.webp",
        specs: {
            speed: '270 km/h',
            acceleration: '4.6с',
            drive: '4WD'
        },
        price: '$70.000',
        rating: '8.9',
        weight: '1555 кг',
        description: 'Компактный горячий хэтчбек с выдающейся динамикой, полным приводом и спортивной настройкой, идеально сочетающий удовольствие от вождения и повседневную практичность.',
    },
    {
        id: 16,
        brand: 'Skoda',
        model: 'Octavia RS',
        year: 2008,
        engine: {
            power: '200 л.с.',
            volume: '2.0 л',
        },
        image: "img/SkodaOctaviaRS2008.jpg",
        specs: {
            speed: '242 km/h',
            acceleration: '7.2с',
            drive: 'FWD'
        },
        price: '$10.000',
        rating: '9.0',
        weight: '1300 кг',
        description: 'Спортивная версия модели с мощным бензиновым двигателем, агрессивным дизайном и отличной управляемостью, совмещающая динамику с практичностью семейного автомобиля.',
    },
    {
        id: 15,
        brand: 'Skoda',
        model: 'Octavia RS',
        year: 2021,
        engine: {
            power: '245 л.с.',
            volume: '2.0 л',
        },
        image: "img/SkodaOctaviaRS.jpg",
        specs: {
            speed: '250 km/h',
            acceleration: '6.7с',
            drive: 'FWD'
        },
        price: '$50.000',
        rating: '9.1',
        weight: '1520 кг',
        description: 'Спортивный седан с мощным турбированным двигателем, отличным управлением и современным дизайном, сочетающий динамику и практичность.',
    },
    {
        id: 14,
        brand: 'Audi',
        model: 'RS7',
        year: 2022,
        engine: {
            power: '630 л.с.',
            volume: '4.0 л',
        },
        image: "img/AudiRS7.avif",
        specs: {
            speed: '280 km/h',
            acceleration: '3.4с',
            drive: '4WD'
        },
        price: '$750.000',
        rating: '8.6',
        weight: '2140 кг',
        description: 'Мощный и высокотехнологичный спортивный седан с агрессивным дизайном, выдающейся динамикой и премиальным комфортом.',
    },
    {
        id: 13,
        brand: 'BMW',
        model: 'M5 CS',
        year: 2021,
        engine: {
            power: '635 л.с.',
            volume: '4.4 л',
        },
        image: "img/BMWM5CS.jpg",
        specs: {
            speed: '305 km/h',
            acceleration: '3.1с',
            drive: '4WD'
        },
        price: '$125.000',
        rating: 9.2,
        weight: '1865 кг',
        description: 'Седан с мощным двигателем V8, улучшенной аэродинамикой, сниженной массой и эксклюзивным оформлением.',
    },
    {
        id: 12,
        brand: 'BMW',
        model: 'M8',
        year: 2020,
        engine: {
            power: '625 л.с.',
            volume: '4.4 л',
        },
        image: "img/BMWM8.jpg",
        specs: {
            speed: '250 km/h',
            acceleration: '3.2с',
            drive: '4WD',
        },
        price: '$135.000',
        rating: 9.6,
        weight: '2055 кг',
        description: 'Спортивный автомобиль с мощным двигателем V8, агрессивным дизайном и передовыми технологиями.',
    },
    {
        id: 11,
        brand: 'Mercedes-Benz',
        model: 'GLE 63 AMG',
        year: 2023,
        engine: {
            power: '612 л.с.',
            volume: '4.0 л',
        },
        image: "img/Mercedes-BenzGLE63AMG.jpg",
        specs: {
            speed: '280 km/h',
            acceleration: '3.9с',
            drive: '4WD'
        },
        price: '$255.000',
        rating: 9.4,
        weight: '2495 кг',
        description: 'Мощный среднеразмерный кроссовер премиум-класса с агрессивным дизайном.',
    },
    {
        id: 10,
        brand: 'Lamborghini',
        model: 'Temerario',
        year: 2024,
        engine: {
            power: '920 л.с.',
            volume: '4.0 л',
        },
        image: "img/LamborghiniTemerario.webp",
        specs: {
            speed: '343 km/h',
            acceleration: '2.7с',
            drive: '4WD'
        },
        price: '$495.000',
        rating: '-',
        weight: '1690 кг',
        description: 'Cуперкар, сочетающий в себе агрессивный дизайн и великолепные технические характеристики.',
    },
    {
        id: 9,
        brand: 'Porsche',
        model: '911 Carrera 4 GTS',
        year: 2024,
        engine: {
            power: '541 л.с.',
            volume: '3.6 л',
        },
        image: "img/Porsche911Carrera4GTS.webp",
        specs: {
            speed: '312 km/h',
            acceleration: '3.0с',
            drive: '4WD'
        },
        price: '$380.000',
        rating: 8.7,
        weight: '1645 кг',
        description: 'Спортивный автомобиль с полным приводом, предлагающий выдающуюся динамику, элегантный дизайн и удобство.',
    },
    {
        id: 8,
        brand: 'Toyota',
        model: 'Camry',
        year: 2006,
        engine: {
            power: '277 л.с.',
            volume: '3.5 л',
        },
        image: "img/ToyotaCamry2006.webp",
        specs: {
            speed: '230 km/h',
            acceleration: '7.4с',
            drive: 'FWD'
        },
        price: '$11.000',
        rating: 9.1,
        weight: '1540 кг',
        description: 'Надежный и комфортный седан, сочетающий хорошую экономию топлива, просторный салон и высокую степень безопасности.',
    },
        {
        id: 7,
        brand: 'Mercedes-Benz',
        model: 'V-class',
        year: 2023,
        engine: {
            power: '237 л.с.',
            volume: '2.0 л',
        },
        image: "img/MercedesBenzVclass.webp",
        specs: {
            speed: '220 km/h',
            acceleration: '7.9с',
            drive: 'FWD'
        },
        price: '$175.000',
        rating: 9.0,
        weight: '2315 кг',
        description: 'Элегантный и вместительный мультивэн, сочетающий в себе роскошь, современные технологии и комфорт.',
    },
    {
        id: 6,
        brand: 'Mercedes-Benz',
        model: 'CLS 63 AMG',
        year: 2014,
        engine: {
            power: '585 л.с.',
            volume: '5.5 л',
        },
        image: "img/MercedesBenzCLS63AMG.jpg",
        specs: {
            speed: '250 km/h',
            acceleration: '3.6с',
            drive: '4WD'
        },
        price: '$50.000',
        rating: 9.4,
        weight: '1945 кг',
        description: 'Мощный и стильный четырехдверный купе с великолепной динамикой и агрессивным дизайном.',
    },
    {
        id: 5,
        brand: 'Toyota',
        model: 'Land Cruiser',
        year: 2021,
        engine: {
            power: '415 л.с.',
            volume: '3.5 л',
        },
        image: "img/ToyotaCruser2023.jpg",
        specs: {
            speed: '210 km/h',
            acceleration: '6.8с',
            drive: '4WD'
        },
        price: '$130.000',
        rating: 9.2,
        weight: '2485 кг',
        description: 'Роскошный внедорожник с надежной системой полного привода, мощным двигателем и современными технологиями.',
    },
    {
        id: 4,
        brand: 'Bugatti',
        model: 'Veyron',
        year: 2011,
        engine: {
            power: '1200 л.с.',
            volume: '8.0 л',
        },
        image: "img/BugattiVeyron.jpg",
        specs: {
            speed: '415 km/h',
            acceleration: '2.5с',
            drive: '4WD'
        },
        price: '$2.000.000',
        rating: '-',
        weight: '1838 кг',
        description: 'Суперкар с впечатляющей мощностью, достигающий скорости более 400 км/ч, сочетающий в себе исключительный дизайн и передовые инженерные решения.',
    },
    {
        id: 3,
        brand: 'Audi',
        model: 'e-tron GT',
        year: 2024,
        engine: {
            power: '679 л.с.',
            volume: '-',
        },
        image: "img/AudiEtronGT.webp",
        specs: {
            speed: '245 km/h',
            acceleration: '3.4с',
            drive: '4WD'
        },
        price: '$220.000',
        rating: '-',
        weight: '2351 кг',
        description: 'Электрический гран-турер с элегантным дизайном и высокими динамическими характеристиками.',
    },
    {
        id: 2,
        brand: 'Kia',
        model: 'K5',
        year: 2019,
        engine: {
            power: '194 л.с.',
            volume: '2.5 л',
        },
        image: "img/KiaK5.jpg",
        specs: {
            speed: '210 km/h',
            acceleration: '8.6с',
            drive: 'FWD'
        },
        price: '$30.000',
        rating: '9.6',
        weight: '1496 кг',
        description: 'Стильный седан с современным дизайном, комфортным интерьером и разнообразными технологическими опциями.',
    },
    {
        id: 1,
        brand: 'Rolls-Royce',
        model: 'Cullinan',
        year: 2024,
        engine: {
            power: '600 л.с.',
            volume: '6.7 л',
        },
        image: "img/RollsRoyceCullinan.jpg",
        specs: {
            speed: '250 km/h',
            acceleration: '4.9с',
            drive: '4WD'
        },
        price: '$750.000',
        rating: '8.4',
        weight: '2710 кг',
        description: 'Роскошный внедорожник с уникальным сочетанием мощного двигателя, высококачественных материалов и исключительного дизайна.',
    },
];

const itemsPerPage = 9; // Количество машин на одной странице
let currentPage = 1; // Текущая страница
let currentCars = [...cars]; // Текущий отображаемый список машин

// Функция для отображения машин на текущей странице
function renderCars(carsArray, page) {
    const grid = document.getElementById('catalog');
    grid.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const carsToShow = carsArray.slice(startIndex, endIndex);

    carsToShow.forEach(car => {
        const card = document.createElement('article');
        card.className = 'car-card';
        card.innerHTML = `
            <div class="card-header">
                <span class="car-badge">NEW</span>
                <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image">
            </div>
            <div class="card-body">
                <h3 class="car-title">
                    <span class="car-brand">${car.brand} &nbsp</span>
                    <span class="car-model">${car.model} ${car.year}</span>
                </h3>
                <p class="car-description">${car.description}</p>
                <div class="spec-grid">
                    <div class="spec-item">
                        <span class="spec-label" data-label="Двигатель">Двигатель</span>
                        <span class="spec-value">
                            <span class="spec-power">Мощность:</span>
                        ${car.engine.power}<br>
                        </span>
                        <span class="spec-value">
                            <span class="spec-volume">Объём:</span>
                        ${car.engine.volume}
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
                        ${car.specs.speed}
                        </span>
                    </span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label" data-label="Привод">Привод</span>
                        <span class="spec-value">${car.specs.drive}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label" data-label="Вес">Вес</span>
                        <span class="spec-value">${car.weight}</span>
                    </div>
                </div>
                <div class="additional-info">
                    <span class="car-price">${car.price}</span>
                    <span class="car-rating">
                        <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
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
        `;
        grid.appendChild(card);
    });
}

// Функция для обновления пагинации
function updatePagination() {
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';
    const totalPages = Math.ceil(currentCars.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => updatePage(i));
        pageNumbers.appendChild(pageButton);
    }
}

// Обработчик поиска
document.querySelector('.search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    currentCars = cars.filter(car =>
        car.brand.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm)
    );
    currentPage = 1; // Сбрасываем на первую страницу
    renderCars(currentCars, currentPage);
    updatePagination();
});

// Обработчики для кнопок "Назад" и "Вперед"


// Функция для обновления страницы
function updatePage(newPage) {
    const totalPages = Math.ceil(currentCars.length / itemsPerPage);
    if (newPage < 1 || newPage > totalPages) return;
    currentPage = newPage;
    renderCars(currentCars, currentPage);
    updatePagination();
}
// Инициализация
window.addEventListener('DOMContentLoaded', () => {
    currentCars = [...cars];
    renderCars(currentCars, currentPage);
    updatePagination();
});



const manufacturers = [
    {
        name: 'Alfa Romeo',
        logo: 'img/brands/alfaromeologo.png',
        popularModels: ['Giulia'],
    },
    {
        name: 'Audi',
        logo: 'img/brands/audilogo.png',
        popularModels: ['RS7', 'e-tron GT'],
    },
    {
        name: 'BMW',
        logo: 'img/brands/bmwlogo.png',
        popularModels: ['M5 CS', 'M8', 'X5', 'i8'],
    },
    {
        name: 'Bugatti',
        logo: 'img/brands/bugattilogo.png',
        popularModels: ['Veyron'],
    },
    {
        name: 'Cadillac',
        logo: 'img/brands/cadillaclogo.png',
        popularModels: ['Escalade'],
    },
    {
        name: 'Dodge',
        logo: 'img/brands/dodgelogo.png',
        popularModels: ['Charger'],
    },
    {
        name: 'Ferrari',
        logo: 'img/brands/ferrarilogo.png',
        popularModels: ['SF90 Stradale'],
    },
    {
        name: 'Kia',
        logo: 'img/brands/kialogo.png',
        popularModels: ['K5'],
    },
    {
        name: 'Lamborghini',
        logo: 'img/brands/lamborghinilogo.png',
        popularModels: ['Temerario'],
    },
    {
        name: 'Mercedes-Benz',
        logo: 'img/brands/merslogo.png',
        popularModels: ['GLE 63 AMG', 'CLS 63 AMG', 'V-Class', 'G-Wagon'],
    },
    {
        name: 'Nissan',
        logo: 'img/brands/nissanlogo.png',
        popularModels: ['GT-R'],
    },
    {
        name: 'Porsche',
        logo: 'img/brands/porschelogo.png',
        popularModels: ['911 Carrera 4 GTS'],
    },
    {
        name: 'Rolls-Royce',
        logo: 'img/brands/rollsroycelogo.png',
        popularModels: ['Cullinan'],
    },
    {
        name: 'Skoda',
        logo: 'img/brands/skodalogo.png',
        popularModels: ['Octavia'],
    },
    {
        name: 'Subaru',
        logo: 'img/brands/subarulogo.png',
        popularModels: ['Impreza'],
    },
    {
        name: 'Toyota',
        logo: 'img/brands/toyotalogo.png',
        popularModels: ['Camry', 'Land Cruiser'],
    },
    {
        name: 'Volkswagen',
        logo: 'img/brands/volkswagenlogo.png',
        popularModels: ['Golf'],
    },
];

// Обновленная функция initManufacturersMenu
function initManufacturersMenu() {
    const container = document.querySelector('.manufacturers-list');
    container.innerHTML = '';

    manufacturers.forEach(brand => {
        const item = document.createElement('div');
        item.className = 'manufacturer-item';
        item.innerHTML = `
            <img src="${brand.logo}" alt="${brand.name}">
            <span class="manufacturer-name">${brand.name}</span>
        `;

        item.querySelector('img').addEventListener('error', function() {
            this.src = 'img/fallback-logo.png';
        });

        item.addEventListener('click', (e) => {
            e.preventDefault();
            showBrandDetails(brand);
        });

        container.appendChild(item);
    });
}

function showBrandDetails(brand) {
    const megaMenu = document.querySelector('.mega-menu');
    const listContainer = document.querySelector('.manufacturers-list');
    const detailContainer = document.querySelector('.manufacturer-detail');
    const brandContent = document.querySelector('.brand-content');

    brandContent.innerHTML = `
        <div class="brand-header">
            <img src="${brand.logo}" alt="${brand.name}" class="brand-logo">
            <h2>${brand.name}</h2>
        </div>
            <button class="all-models-button">
                Все модели ${brand.name}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        <div class="popular-models">
            <h3>Популярные модели</h3>
            <div class="models-grid">
                ${brand.popularModels.map(model => `
                    <div class="model-item" data-model="${model}">${model}</div>
                `).join('')}
            </div>
        </div>
    `;

    // Обработчики событий
    detailContainer.querySelectorAll('.model-item').forEach(item => {
        item.addEventListener('click', () => {
            const model = item.dataset.model;
            currentCars = cars.filter(car =>
                car.brand === brand.name && car.model === model
            );
            currentPage = 1;
            renderCars(currentCars, currentPage);
            updatePagination();
            megaMenu.classList.remove('visible');
        });
    });

// Обновленный обработчик для кнопки
// Функция для генерации SEO-friendly URL
const generateBrandSlug = (brandName) => {
    return brandName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
};

// Обновленный обработчик кнопки "Все модели"
brandContent.querySelector('.all-models-button').addEventListener('click', () => {
    const slug = generateBrandSlug(brand.name);
    window.location.href = `./brand/${slug}/index.html`;
});

    listContainer.style.display = 'none';
    detailContainer.style.display = 'block';
    megaMenu.style.height = '500px';
}

// Обработчик кнопки "Назад"
document.querySelector('.back-button').addEventListener('click', () => {
    const listContainer = document.querySelector('.manufacturers-list');
    const detailContainer = document.querySelector('.manufacturer-detail');

    listContainer.style.display = 'grid';
    detailContainer.style.display = 'none';
});

// Инициализация
window.addEventListener('DOMContentLoaded', () => {
    initManufacturersMenu();
    updateMenuPosition();
});

// Обновление позиции меню
function updateMenuPosition() {
    const navItem = document.querySelector('.with-mega-menu');
    if (!navItem) return;

    const navItemRect = navItem.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const maxHeight = viewportHeight - navItemRect.bottom - 30;

    megaMenu.style.left = `${navItemRect.left}px`;
    megaMenu.style.top = `${navItemRect.bottom + 10}px`;
    megaMenu.style.maxHeight = `${Math.min(500, maxHeight)}px`;
}

// Обработчик скролла
window.addEventListener('scroll', () => {
    if (megaMenu.classList.contains('visible')) {
        updateMenuPosition();
    }
});



// Добавим делегирование событий для моделей
document.querySelector('.brand-content').addEventListener('click', (e) => {
    const modelItem = e.target.closest('.model-item');
    if (modelItem) {
        const brandName = document.querySelector('.brand-header h2').textContent;
        const model = modelItem.dataset.model;

        currentCars = cars.filter(car =>
            car.brand === brandName && car.model === model
        );
        currentPage = 1;
        renderCars(currentCars, currentPage);
        megaMenu.classList.remove('visible');
    }
});

// Добавим обработку ошибок изображений
const addImageFallback = (img) => {
    img.onerror = () => {
        img.src = 'img/fallback-logo.png';
        img.onerror = null;
    };
};

// Дебаунс для обработчика скролла
let isScrolling;
window.addEventListener('scroll', () => {
    if (megaMenu.classList.contains('visible')) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            updateMenuPosition();
        }, 100);
    }
});
