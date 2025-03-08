 const models = [
     {
         name: '"Monti" Bergspider',
         year: '1967-1968',
         image: '../../img/BMWMontiBergspider.jpg',
     },
     {
         name: '02 Series',
         year: '1966-1977',
         image: '../../img/BMW02Series.jpg',
     },
     {
         name: '1 Series',
         year: '2004-н.в.',
         image: '../../img/BMW1Series.jpg',
     },
     {
         name: '1600 GT',
         year: '1967-1968',
         image: '../../img/BMW1600GT.jpg',
     },
     {
         name: '2 Series',
         year: '2014-н.в.',
         image: '../../img/BMW2Series.jpg',
     },
     {
         name: '3 Series',
         year: '1975-н.в.',
         image: '../../img/BMW3Series.jpg',
     },
     {
         name: '3.0 CSL',
         year: '1971-2023',
         image: '../../img/BMW3.0CSL.jpg',
     },
     {
         name: '3/15 PS',
         year: '1928-1932',
         image: '../../img/BMW315PS.jpg',
     },
     {
         name: '3/15 PS',
         year: '1928-1932',
         image: '../../img/BMW315PS.jpg',
     },
     {
         name: '303',
         year: '1933-1934',
         image: '../../img/BMW303.jpg',
     },
     {
         name: '309',
         year: '1934-1936',
         image: '../../img/BMW309.jpg',
     },
     {
         name: '315',
         year: '1934-1937',
         image: '../../img/BMW315.jpg',
     },








        ];

        function createModelCard(model) {
            const card = document.createElement('div');
            card.className = 'model-card';
            card.innerHTML = `
                <img src="${model.image}" class="model-image" alt="${model.name}">
                <div class="model-info">
                    <h3 class="model-name">${model.name}</h3>
                    <p class="model-year">${model.year}</p>
                </div>
            `;

            card.addEventListener('click', () => {
                window.location.href = `model.html?name=${encodeURIComponent(model.name)}`;
            });

            return card;
        }

        function initPage() {
            const grid = document.querySelector('.container-grid');
            models.forEach(model => {
                grid.appendChild(createModelCard(model));
            });
        }

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelector('.header').style.transform =
                `translateY(${scrolled * 0.4}px)`;
        });














const manufacturers = [
    {
        name: 'Alfa Romeo',
        logo: '../../img/brands/alfaromeologo.png',
        popularModels: ['Giulia'],
    },
    {
        name: 'Audi',
        logo: '../../img/brands/audilogo.png',
        popularModels: ['RS7', 'e-tron GT'],
    },
    {
        name: 'Bugatti',
        logo: '../../img/brands/bugattilogo.png',
        popularModels: ['Veyron'],
    },
    {
        name: 'Cadillac',
        logo: '../../img/brands/cadillaclogo.png',
        popularModels: ['Escalade'],
    },
    {
        name: 'Dodge',
        logo: '../../img/brands/dodgelogo.png',
        popularModels: ['Charger'],
    },
    {
        name: 'Ferrari',
        logo: '../../img/brands/ferrarilogo.png',
        popularModels: ['SF90 Stradale'],
    },
    {
        name: 'Kia',
        logo: '../../img/brands/kialogo.png',
        popularModels: ['K5'],
    },
    {
        name: 'Lamborghini',
        logo: '../../img/brands/lamborghinilogo.png',
        popularModels: ['Temerario'],
    },
    {
        name: 'Mercedes-Benz',
        logo: '../../img/brands/merslogo.png',
        popularModels: ['GLE 63 AMG', 'CLS 63 AMG', 'V-Class', 'G-Wagon'],
    },
    {
        name: 'Porsche',
        logo: '../../img/brands/porschelogo.png',
        popularModels: ['911 Carrera 4 GTS'],
    },
    {
        name: 'Rolls-Royce',
        logo: '../../img/brands/rollsroycelogo.png',
        popularModels: ['Cullinan'],
    },
    {
        name: 'Skoda',
        logo: '../../img/brands/skodalogo.png',
        popularModels: ['Octavia'],
    },
    {
        name: 'Toyota',
        logo: '../../img/brands/toyotalogo.png',
        popularModels: ['Camry', 'Land Cruiser'],
    },
    {
        name: 'Volkswagen',
        logo: '../../img/brands/volkswagenlogo.png',
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
    window.location.href = `../${slug}/index.html`;
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

function preloadBrandLogos() {
    manufacturers.forEach(brand => {
        const img = new Image();
        img.src = brand.logo;
        img.decode().catch(() => {
            // Обработка ошибок
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    preloadBrandLogos();
});

// Добавить в основной скрипт
// Добавить после initPage()
// Обновленная функция анимации временной шкалы
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-50px 0px' // Срабатывает на 50px раньше
    });

    timelineItems.forEach((item, index) => {
        // Добавляем задержку для последовательной анимации
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initPage();
    animateTimeline();
});
