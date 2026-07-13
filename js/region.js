const ruLanguageRegions = ['BY', 'UA', 'KZ', 'KG', 'TJ'];//['RU', 'BY', 'UA', 'KZ', 'KG', 'TJ'];

function detectRegion() {
    return new Promise((resolve) => {
        fetch('http://ip-api.com/json/')
            .then(res => res.json())
            .then(data => {
                let countryCode = data.countryCode;
                console.log(`User's region is ${countryCode}`);

                if (ruLanguageRegions.includes(countryCode)) {
                    guideData = guideDataRu;
                    console.log('Current language is Russian');
                } else {
                    guideData = guideDataEn;
                    console.log('Current language is English');
                }
                resolve();
            })
            .catch(() => {
                console.log('Region detection error');
                guideData = guideDataEn;
                resolve();
            });
    });
}