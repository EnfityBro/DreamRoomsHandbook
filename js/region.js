const ruLanguageRegions = ['BY', 'UA', 'KZ', 'KG', 'TJ'];//['RU', 'BY', 'UA', 'KZ', 'KG', 'TJ'];

function detectRegion() {
    return new Promise((resolve) => {
        fetch('http://ip-api.com/json/')
            .then(res => res.json())
            .then(data => {
                let countryCode = data.countryCode;
                console.log(`User's region is ${countryCode}`);

                if (ruLanguageRegions.includes(countryCode)) {
                	translateTexts(guideDataRu, staticTextsDictRu);
                    console.log('Current language is Russian');
                } else {
                    translateTexts(guideDataEn, staticTextsDictEn);
                    console.log('Current language is English');
                }

                resolve();
            })
            .catch(() => {
                translateTexts(guideDataEn, staticTextsDictEn);
                console.log('Region detection error, set language to English');
                resolve();
            });
    });
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