// Data structure for easy extension
const guideData = [
    {
        id: "section1",
        title: "Главный Раздел 1",
        subsections: [
            {
                id: "sub1-1",
                title: "Подраздел 1.1",
                content: `
                    <img src="https://picsum.photos/id/1015/800/400" alt="Лиминальное пространство" class="content-image">
                    <p>В этом подразделе описывается базовая структура первого уровня. Стены покрыты старыми обоями с повторяющимся узором, который вызывает головокружение при долгом взгляде.</p>
                    <p>Опасности: Случайные шумы, которые могут привлечь сущностей. Рекомендуется двигаться бесшумно.</p>
                    <p>Полезные советы: Ищите жёлтые двери — они часто ведут к безопасным зонам.</p>
                `,
                image: "https://picsum.photos/id/1015/800/400"
            },
            {
                id: "sub1-2",
                title: "Подраздел 1.2",
                content: `
                    <img src="https://picsum.photos/id/102/800/400" alt="Заброшенный коридор" class="content-image">
                    <p>Более сложная зона с бесконечными коридорами. Здесь часто встречаются "пустые" комнаты.</p>
                    <p>Характеристики: Низкое освещение, влажные пятна на потолке.</p>
                `,
                image: "https://picsum.photos/id/102/800/400"
            },
            {
                id: "sub1-3",
                title: "Подраздел 1.3",
                content: `
                    <img src="https://picsum.photos/id/133/800/400" alt="Комната с мебелью" class="content-image">
                    <p>Офисные помещения с устаревшей техникой 90-х. Некоторые компьютеры всё ещё работают и показывают странные сообщения.</p>
                `,
                image: "https://picsum.photos/id/133/800/400"
            },
            {
                id: "sub1-4",
                title: "Подраздел 1.4",
                content: `
                    <img src="https://picsum.photos/id/201/800/400" alt="Подвал" class="content-image">
                    <p>Глубокие уровни с повышенной опасностью. Здесь обитают более агрессивные формы.</p>
                `,
                image: "https://picsum.photos/id/201/800/400"
            }
        ]
    },
    {
        id: "section2",
        title: "Главный Раздел 2",
        subsections: [
            {
                id: "sub2-1",
                title: "Подраздел 2.1",
                content: `<img src="https://picsum.photos/id/237/800/400" alt="Сущность" class="content-image"><p>Описание первой сущности. Избегайте прямого взгляда.</p>`,
                image: "https://picsum.photos/id/237/800/400"
            },
            {
                id: "sub2-2",
                title: "Подраздел 2.2",
                content: `<img src="https://picsum.photos/id/251/800/400" alt="Вторая сущность" class="content-image"><p>Быстрые передвижения в темноте.</p>`
            },
            {
                id: "sub2-3",
                title: "Подраздел 2.3",
                content: `<img src="https://picsum.photos/id/180/800/400" alt="Третья" class="content-image"><p>Мимикрия под предметы.</p>`
            }
        ]
    },
    {
        id: "section3",
        title: "Главный Раздел 3",
        subsections: [
            { id: "sub3-1", title: "Подраздел 3.1", content: `<img src="https://picsum.photos/id/314/800/400" class="content-image"><p>Инвентарь и предметы.</p>` },
            { id: "sub3-2", title: "Подраздел 3.2", content: `<img src="https://picsum.photos/id/367/800/400" class="content-image"><p>Оружие и защита.</p>` },
            { id: "sub3-3", title: "Подраздел 3.3", content: `<img src="https://picsum.photos/id/399/800/400" class="content-image"><p>Выживание в долгосрочной перспективе.</p>` }
        ]
    },
    {
        id: "section4",
        title: "Главный Раздел 4",
        subsections: [
            { id: "sub4-1", title: "Подраздел 4.1", content: `<img src="https://picsum.photos/id/433/800/400" class="content-image"><p>Механики выхода.</p>` },
            { id: "sub4-2", title: "Подраздел 4.2", content: `<img src="https://picsum.photos/id/488/800/400" class="content-image"><p>Секретные зоны.</p>` }
        ]
    },
    {
        id: "section5",
        title: "Главный Раздел 5",
        subsections: [
            { id: "sub5-1", title: "Подраздел 5.1", content: `<img src="https://picsum.photos/id/669/800/400" class="content-image"><p>Лор игры.</p>` },
            { id: "sub5-2", title: "Подраздел 5.2", content: `<img src="https://picsum.photos/id/870/800/400" class="content-image"><p>Разработчики и пасхалки.</p>` },
            { id: "sub5-3", title: "Подраздел 5.3", content: `<img src="https://picsum.photos/id/1016/800/400" class="content-image"><p>Будущие обновления.</p>` }
        ]
    }
];

// Current state
let currentMainSection = null;
let currentSubsection = null;

// Render main sections
function renderMainSections() {
    const container = document.getElementById('main-sections');
    container.innerHTML = '';
    
    guideData.forEach(section => {
        const btn = document.createElement('button');
        btn.className = `section-btn ${currentMainSection && currentMainSection.id === section.id ? 'active' : ''}`;
        btn.textContent = section.title;
        btn.onclick = () => selectMainSection(section);
        container.appendChild(btn);
    });
}

// Select main section
function selectMainSection(section) {
    currentMainSection = section;
    currentSubsection = null;
    
    renderMainSections();
    renderSubsections();
    clearContent();
}

// Render subsections
function renderSubsections() {
    const container = document.getElementById('subsections');
    container.innerHTML = '';
    
    if (!currentMainSection) return;
    
    currentMainSection.subsections.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = `subsection-btn ${currentSubsection && currentSubsection.id === sub.id ? 'active' : ''}`;
        btn.textContent = sub.title;
        btn.onclick = () => selectSubsection(sub);
        container.appendChild(btn);
    });
}

// Select subsection
function selectSubsection(sub) {
    currentSubsection = sub;
    renderSubsections();
    renderContent();
}

// Render content
function renderContent() {
    const container = document.getElementById('content-area');
    
    if (!currentSubsection) {
        clearContent();
        return;
    }

    container.innerHTML = `
        <h2 class="content-title">${currentSubsection.title}</h2>
        <div class="content-body">
            ${currentSubsection.content}
        </div>
    `;
}

// Clear content
function clearContent() {
    const container = document.getElementById('content-area');
    container.innerHTML = `
        <div class="empty-state">
            <p>Выберите подраздел для просмотра детальной информации...</p>
        </div>
    `;
}

// Scroll to guide
function scrollToGuide() {
    document.getElementById('guide').scrollIntoView({ behavior: 'smooth' });
}

// Initialize
function init() {
    // Select first section by default
    if (guideData.length > 0) {
        currentMainSection = guideData[0];
        renderMainSections();
        renderSubsections();
        // Do not select subsection initially
        clearContent();
    }
    
    console.log('%cDream Rooms Handbook loaded.', 'color: #D4B36A; font-family: monospace');
}

document.addEventListener('DOMContentLoaded', init);