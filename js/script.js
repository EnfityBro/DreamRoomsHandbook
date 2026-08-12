let guideData;
let emptyStateText;
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

    if (isMobileDevice()){
        scrollTo('content-area');
    }
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
    container.innerHTML = emptyStateText;
}

// Scroll to guide
function scrollToGuide(){
    scrollTo('guide');
}

// Scroll to target
function scrollTo(id){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Mobile device simple detection
function isMobileDevice() {
    return window.innerWidth <= 1024;
}

// Initialize
function init() {
    if (guideData.length > 0) {
        currentMainSection = guideData[0];
        renderMainSections();
        renderSubsections();
        clearContent();
    }

    console.log('Dream Rooms Handbook initialized');
}

document.addEventListener('DOMContentLoaded', async function() {
    const overlay = document.getElementById('loading-overlay');

    await detectRegion();

    if (typeof init === 'function') {
        console.log('Start Dream Rooms Handbook initialization');
        init();
    }

    if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(() => overlay.remove(), 450);
    }
});