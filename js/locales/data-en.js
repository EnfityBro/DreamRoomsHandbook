const guideDataEn = [
    {
        id: "section1",
        title: "Levels",
        subsections: [
            {
                id: "sub1-1",
                title: "About levels",
                content: `
                    <img src="./img/section1/sub1-1.jpg" alt="Liminal space" class="content-image">
                    <p>There are 2 types of levels:</p>
                    <p>Safe – levels of this type contain no hostile entities or other threats. You can find Almond Water on these levels. Peaceful or neutral entities, various items, and weapons can also be found. Bulletproof vests cannot be found on safe levels.</p>
                    <p>Unsafe – levels of this type contain hostile or neutral entities and other threats. Almond Water and peaceful entities cannot be found here. Neutral entities, various items, weapons, and bulletproof vests can be found on unsafe levels.</p>
                    <p>Every level has the ability to move to another level (except the current one). Transition occurs by opening certain doors, entering empty spaces, or fulfilling specific level conditions.</p>
                `
            },
            {
                id: "sub1-2",
                title: "Level -1",
                content: `
                    <img src="./img/section1/sub1-2.jpg" alt="Level -1" class="content-image">
                    <p>Name: "The Entrance".<br>Type: safe.<br>Items: -.<br>Entities: -.</p>
                    <p>The level is a square room with two doors located on opposite walls. The lighter door leads to a random safe level, the darker one leads to a random unsafe level.</p>
                    <p>It is impossible to reach this level from any other level.</p>
                `
            },
            {
                id: "sub1-3",
                title: "Level 0",
                content: `
                    <img src="./img/section1/sub1-3.jpg" alt="Level 0" class="content-image">
                    <p>Name: "Office Labyrinth".<br>Type: unsafe.<br>Items: pistol, bulletproof vest 25%, battery, 9mm ammo box x30.<br>Entities: Smiling, Sneakering, Careerist.</p>
                    <p>The level is a monotonous, empty office-like space with darkened elements, numerous turns, and empty rooms. The level is minimally furnished.</p>
                    <p>There are 3 doors on the level that lead to random unsafe levels.</p>
                `
            },
            {
                id: "sub1-4",
                title: "Level 2",
                content: `
                    <img src="./img/section1/sub1-4.jpg" alt="Level 2" class="content-image">
                    <p>Name: "The Store".<br>Type: unsafe.<br>Items: 9mm ammo box х60, 12 gauge ammo box х10, flashlight, battery.<br>Entities: Cashier.</p>
                    <p>The level is a roadside store with various goods. In addition to shelves, there is a counter with a cash register against the wall, where the Cashier entity stands. The store appears small at first glance, but it is an anomalous place where you can get lost forever.</p>
                    <p>There is a door to the utility room that leads to a random unsafe level. If you manage to exit the store through the main entrance and walk into the darkness, you can reach a random safe level.</p>
                `
            },
            {
                id: "sub1-5",
                title: "Level 3",
                content: `
                    <img src="./img/section1/sub1-5.jpg" alt="Level 3" class="content-image">
                    <p>Name: "Ball of happiness".<br>Type: safe.<br>Items: almond water bottle 50% and 75%.<br>Entities: Balloon.</p>
                    <p>The level is an endless field with green grass, a blue sky, and white clouds. A large red balloon is visible on the horizon. Almond water bottles and lonely white doors are occasionally scattered across the field.</p>
                    <p>To exit this level to another random level, simply enter any of the white doors.</p>
                `
            },
            {
                id: "sub1-6",
                title: "Level 7",
                content: `
                    <img src="./img/section1/sub1-6.png" alt="Level 7" class="content-image">
                    <p>Name: "The Staircase".<br>Type: unsafe.<br>Items: -.<br>Entities: Errant.</p>
                    <p>The level is a dimly lit endless stairwell of a large office building. On each floor there is a door with a floor number that is always the same and equal to 19. You can go both up and down.</p>
                    <p>On some floors the door will have no floor number. Such a door may lead to a random unsafe level.</p>
                `
            },
            {
                id: "sub1-7",
                title: "Level 8",
                content: `
                    <img src="./img/section1/sub1-7.png" alt="Level 8" class="content-image">
                    <p>Name: "The Office".<br>Type: unsafe.<br>Items: red tie, battery, shotgun, 12 gauge ammo box x20, documents.<br>Entities: Careerist.</p>
                    <p>The level consists of huge endless office spaces. The offices look like typical American offices in New York from the late 90s and early 2000s. In the corridors and offices you can meet many employees in the form of Careerist entities. There is an elevator in the building, but its operation is unknown.</p>
                    <p>To leave the level, you need to find the fire exit and go down the stairs. With a 50% chance you will transition to Level 7. In other cases, you will transition to a random level.</p>
                `
            },
            {
                id: "sub1-8",
                title: "Level 10",
                content: `
                    <img src="./img/section1/sub1-8.png" alt="Level 10" class="content-image">
                    <p>Name: "Hub №1".<br>Type: safe.<br>Items: -.<br>Entities: -.</p>
                    <p>The level is an endless road tunnel with many numbered iron doors on the sides. The tunnel has weak yellow lighting from lamps, and only emptiness is visible in the distance, which cannot be entered.</p>
                    <p>If you travel through different levels for a long time, you can accidentally reach this level. To move to any specific level, simply enter the corresponding door.</p>
                `
            }
        ]
    },
    {
        id: "section2",
        title: "Entities",
        subsections: [
            {
                id: "sub2-1",
                title: "About entities",
                content: `
                    <img src="./img/section2/sub2-1.png" alt="Entity" class="content-image">
                    <p>Entities are divided into 3 types:</p>
                    <p>Peaceful entities will never attack or cause harm, even in response to external aggression.</p>
                    <p>Neutral entities do not attack by default and have neutral behavior, but with external aggression or irritation, they will begin to attack or defend themselves.</p>
                    <p>Hostile entities are always aggressive and may attack by default.</p>
                `
            },
            {
                id: "sub2-2",
                title: "Smiling",
                content: `
                    <img src="./img/section2/sub2-2.png" alt="Smiling" class="content-image">
                    <p>Type: hostile.<br>Health: 50 units.<br>Damage: 3.5 units per 2 seconds.</p>
                    <p>A humanoid creature with a creepy, stretched smile across its entire face. This entity has black skin, glowing red eyes, and white teeth.</p>
                    <p>The Smiling wanders the level in search of victim. Once it finds a victim, it immediately runs toward it to kill. After seeing its victim at least once, it will pursue them until it kills them or dies itself.</p>
                `
            },
            {
                id: "sub2-3",
                title: "Sneakering",
                content: `
                    <img src="./img/section2/sub2-3.png" alt="Sneakering" class="content-image">
                    <p>Type: hostile.<br>Health: 65 units.<br>Damage: 2.5 units per 1.5 seconds.</p>
                    <p>A thin-boned humanoid creature with signs of decay and a creepy skeletal head. This entity only appears in dark areas of the level.</p>
                    <p>Upon appearing, it immediately attacks any nearby victim. There is an effective way to fight Sneakering: use a flashlight or lure it into a lit area. Then it will take heavy damage and its attack power will be reduced by 50%.</p>
                `
            },
            {
                id: "sub2-4",
                title: "Cashier",
                content: `
                    <img src="./img/section2/sub2-4.png" alt="Cashier" class="content-image">
                    <p>Type: neutral.<br>Health: 100 units.<br>Damage: 0.5 units per 1 second (passive attack), 30 units per 2.5 seconds (aggressive attack).</p>
                    <p>The entity is a creepy person in a store cashier uniform. The apron is stained with blood, the skin has a pale hue, and the gaze is full of madness.</p>
                    <p>It stands at the cash register and watches visitors. Sometimes the Cashier can be seen in dark corners of the store. The entity is phantom-like and does not disappear from the level upon death. It appears only on Level 2.</p>
                    <p>If you stare at the Cashier for too long or steal items from the store, it will block all exits and make the offender suffer (passive attack). In case of obvious aggression, the Cashier attacks with a shotgun (aggressive attack) and blocks all exits.</p>
                `
            },
            {
                id: "sub2-5",
                title: "Errant",
                content: `
                    <img src="./img/section2/sub2-5.png" alt="Errant" class="content-image">
                    <p>Type: hostile.<br>Health: 150 units.<br>Damage: 15 units per 1 second.</p>
                    <p>An extremely dangerous entity that looks like a humanoid figure in black hooded clothing.</p>
                    <p>When the Errant appears on the level, it first stays near the victim and observes their actions. If you try to approach or shoot it, the entity will teleport to another location. After some time, it will attack the victim from behind with a deafening sound. You can scare it away by staying completely still for a while when it appears and is not yet interested in killing.</p>
                `
            },
            {
                id: "sub2-6",
                title: "Careerist",
                content: `
                    <img src="./img/section2/sub2-6.png" alt="Careerist" class="content-image">
                    <p>Type: neutral.<br>Health: 80 units.<br>Damage: 2 units per 2 seconds.</p>
                    <p>A tired office worker wearing a white or blue shirt, blue (30% chance), black (35% chance) or red (5% chance) tie, or with the top button undone (30% chance), black or gray trousers, polished black shoes, and may wear glasses or carry a briefcase.</p>
                    <p>The entity will not attack as long as no one is looking at it or showing aggression. If you stare at the Careerist for too long or attack it, it will begin to pursue and attack the victim in its field of view. The entity remains inactive until it starts interacting with something.</p>
                    <p>It appears on some unsafe levels, mostly those resembling office spaces.</p>
                `
            },
            {
                id: "sub2-7",
                title: "Balloon",
                content: `
                    <img src="./img/section2/sub2-7.png" alt="Balloon" class="content-image">
                    <p>Type: peaceful.<br>Health: 5 units.<br>Damage: -.</p>
                    <p>An entity in the form of a colorful balloon with eyes and a smiling mouth. Most often found in red, yellow, green, or blue colors.</p>
                    <p>The Balloon can simply float around the level or follow a chosen target.</p>
                `
            }
        ]
    },
    {
        id: "section3",
        title: "Items",
        subsections: [
            {
                id: "sub3-1",
                title: "Almond water bottle",
                content: `
                    <img src="./img/section3/sub3-1.png" alt="Almond water bottle" class="content-image">
                    <p>Can be filled to 50%, 75%, or 100%.</p>
                    <p>When used, almond water restores health equal to its fill percentage. Almond water can always be used, even at full health, but in that case the bottle will be wasted.</p>
                    <p>No more than 3 almond water bottles of any fill level can be stored in the inventory.</p>
                `
            },
            {
                id: "sub3-2",
                title: "Bulletproof vest",
                content: `
                    <img src="./img/section3/sub3-2.png" alt="Bulletproof vest" class="content-image">
                    <p>Can have 25%, 50%, 75% or 100% durability.</p>
                    <p>Bulletproof vest protects health from any damage as long as it has remaining durability. Bulletproof vest can only be equipped if its durability is less than or equal to the maximum possible durability that can be had.</p>
                    <p>No more than 1 bulletproof vest of any durability can be stored in the inventory.</p>
                `
            },
            {
                id: "sub3-3",
                title: "Pistol",
                content: `
                    <img src="./img/section3/sub3-3.png" alt="Pistol" class="content-image">
                    <p>Standard weapon with relatively average stats, easy to handle.</p>
                    <p>Caliber: 9mm.<br>Magazine capacity: 15 rounds.</p>
                    <p>No more than 1 such pistol can be stored in the inventory. No more than 150 rounds to fire at a time can be prepared.</p>
                `
            },
            {
                id: "sub3-4",
                title: "9mm ammo box",
                content: `
                    <img src="./img/section3/sub3-4.png" alt="9mm ammo box" class="content-image">
                    <p>An ammo box can contain 15, 30, or 60 rounds of 9mm caliber.</p>
                    <p>9mm bullet characteristics:<br>Speed: 250 m/s.<br>Damage: 12 units.<br>Flight time: 4 sec.</p>
                `
            },
            {
                id: "sub3-5",
                title: "Shotgun",
                content: `
                    <img src="./img/section3/sub3-5.png" alt="Shotgun" class="content-image">
                    <p>An old pump-action shotgun. A dangerous and powerful weapon with lethal damage at close range. Requires proper reloading and aiming skills.</p>
                    <p>Caliber: 12.<br>Magazine capacity: 5 rounds.</p>
                    <p>No more than 1 such shotgun can be stored in the inventory. No more than 50 rounds to fire at a time can be prepared.</p>
                `
            },
            {
                id: "sub3-6",
                title: "12 gauge ammo box",
                content: `
                    <img src="./img/section3/sub3-6.png" alt="12 gauge ammo box" class="content-image">
                    <p>An ammo box can contain 10 or 20 rounds of 12 gauge shotgun shells.</p>
                    <p>12 gauge shot characteristics:<br>Speed: 150 m/s.<br>Damage: 9 units.<br>Flight time: 3.5 sec.</p>
                `
            },
            {
                id: "sub3-7",
                title: "Flashlight",
                content: `
                    <img src="./img/section3/sub3-7.png" alt="Flashlight" class="content-image">
                    <p>The flashlight can illuminate dark areas of levels. Its light can harm certain entities.</p>
                    <p>It can shine continuously for 3 minutes and needs to be recharged with batteries periodically.</p>
                `
            },
            {
                id: "sub3-8",
                title: "Battery",
                content: `
                    <img src="./img/section3/sub3-8.png" alt="Battery" class="content-image">
                    <p>Gives +50% charge to an item. Can be used for various electrical devices on the level or the flashlight.</p>
                `
            },
            {
                id: "sub3-9",
                title: "Note",
                content: `
                    <img src="./img/section3/sub3-9.png" alt="Note" class="content-image">
                    <p>An informational message found on the level. May contain various instructions.</p>
                `
            },
            {
                id: "sub3-10",
                title: "Red tie",
                content: `
                    <img src="./img/section3/sub3-10.png" alt="Red tie" class="content-image">
                    <p>While in the inventory, the Careerist entity cannot harm.</p>
                    <p>Obtained by killing a Careerist entity wearing a red tie.</p>
                `
            },
            {
                id: "sub3-11",
                title: "Documents",
                content: `
                    <img src="./img/section3/sub3-11.png" alt="Documents" class="content-image">
                    <p>A folder with various documented information from organizations or individuals about what is happening at the levels.</p>
                    <p>A rare item. Reading the contents of some documents can lead to trouble.</p>
                `
            },
            {
                id: "sub3-12",
                title: "Assault rifle",
                content: `
                    <img src="./img/section3/sub3-12.png" alt="Assault rifle" class="content-image">
                    <p>An old reliable Russian assault rifle chambered in 7.62mm. Has automatic fire mode and is excellent for medium to long range combat.</p>
                    <p>Caliber: 7.62mm.<br>Magazine capacity: 30 rounds.</p>
                    <p>No more than 1 such assault rifle can be stored in the inventory. No more than 300 rounds to fire at a time can be prepared.</p>
                `
            },
            {
                id: "sub3-13",
                title: "7.62 ammo box",
                content: `
                    <img src="./img/section3/sub3-13.png" alt="7.62 ammo box" class="content-image">
                    <p>An ammo box can contain 60, 90, or 120 rounds of 7.62mm caliber.</p>
                    <p>7.62mm bullet characteristics:<br>Speed: 300 m/s.<br>Damage: 9.5 units.<br>Flight time: 5 sec.</p>
                `
            }
        ]
    },
    {
        id: "section4",
        title: "Incidents",
        subsections: [
            {
                id: "sub4-1",
                title: "About incidents",
                content: `
                    <img src="./img/section4/sub4-1.png" alt="Incidents" class="content-image">
                    <p>Incidents are sudden anomalous occurrences that can only occur at unsafe levels and represent a deadly threat.</p>
                    <p>A warning about the incident beginning is some anomalous behavior at the level. Each incident has strict conditions, observing which, there is a chance for a positive outcome. The negative outcome is always a mysterious death.</p>
                `
            },
            {
                id: "sub4-2",
                title: "Incident №1",
                content: `
                    <img src="./img/section4/sub4-2.png" alt="Incident №1" class="content-image">
                    <p>Name: "Black heads".<br>Level: 8.<br>Chance of occurrence: 25%.</p>
                    <p>If all entities at the level have black heads, then the following rules must be followed:<br>1. Do not look at entities with black heads.<br>2. Do not go toward strange sounds.<br>3. Move toward the computers.<br>4. At a computer, find and open the file "Incident_1.exe".</p>
                    <p>Chance of positive outcome if conditions are met: 95%.<br>Positive outcome: all entities disappear from the level until the next visit.<br>Negative outcome: instant death by suffocation.</p>
                `
            }
        ]
    }
];

const staticTextsDictEn = {
    'hero-desc': `A solo adventure where you will explore liminal levels, encounter different entities, uncover a hidden story, and experience dangerous incidents!<br>Follow the project news in the <a href="https://telegram.me/enfity_games" target="_blank" class="telegram-link" title="Join us on Telegram">Telegram channel</a>!`,
    'enter-btn': 'START EXPLORING',
    'main-section': 'SECTIONS',
    'sub-section': 'SUBSECTIONS',
    'content-section': 'DETAILS',
    'footer-text': '\u00A9 2026 Dream Rooms. All anomalies belong to us.',
    'empty-state': `<div id="empty-state" class="empty-state"><p>Select a subsection to view detailed information...</p></div>`
};