const ruLanguageRegions = ['RU', 'BY', 'UA', 'KZ', 'KG', 'TJ'];

function detectRegion() {
    return new Promise((resolve) => {
        fetch('https://api.country.is/')
            .then(res => res.json())
            .then(data => {
                let countryCode = data.country;
                console.log(`User's region is ${countryCode}`);

                if (/^[A-Z]{2}$/.test(countryCode)) {
                    if (ruLanguageRegions.includes(countryCode)) {
                        translateTexts(guideDataRu, staticTextsDictRu);
                        console.log('Current language is Russian');
                    }
                    else {
                        regionFallback('Current language is English');
                    }
                }
                else {
                    regionFallback('Region API response error, set language to English');
                }

                resolve();
            })
            .catch(() => {
                regionFallback('Region detection error, set language to English');
                resolve();
            });
    });
}

function regionFallback(message){
    translateTexts(guideDataEn, staticTextsDictEn);
    console.log(message ?? 'Fallback region to English for some reason');
}

function translateTexts(data, staticTextsDict){
	guideData = data;
	emptyStateText = staticTextsDict['empty-state'];

	document.getElementById('hero-desc').innerHTML = staticTextsDict['hero-desc'];
	document.getElementById('enter-btn').textContent = staticTextsDict['enter-btn'];
	document.getElementById('main-section').textContent = staticTextsDict['main-section'];
	document.getElementById('sub-section').textContent = staticTextsDict['sub-section'];
	document.getElementById('content-section').textContent = staticTextsDict['content-section'];
	document.getElementById('footer-text').textContent = staticTextsDict['footer-text'];
}