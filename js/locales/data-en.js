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
                    <p>Сущности бывают 3 типов:</p>
                    <p>Мирные сущности никогда не станут атаковать или наносить вред, даже при сторонней агрессии.</p>
                    <p>Нейтральные сущности по умолчанию не атакуют и имеют нейтральное поведение, но при сторонней агрессии или раздражении начнут атаковать или защищаться.</p>
                    <p>Враждебные сущности всегда настроены агрессивно и могут атаковать по умолчанию.</p>
                `
            },
            {
                id: "sub2-2",
                title: "Smiling",
                content: `
                    <img src="./img/section2/sub2-2.png" alt="Smiling" class="content-image">
                    <p>Тип: враждебный.<br>Здоровье: 50 единиц.<br>Урон: 3.5 единицы за 2 секунды.</p>
                    <p>Гуманоидное существо с жуткой и растянутой на все лицо улыбкой. У этой сущности черная кожа, светящиеся красные глаза и белые зубы.</p>
                    <p>Улыбающийся бродит по уровню в поисках своей жертвы. Как только жертва будет найдена - сущность сразу побежит в ее сторону, чтобы убить. После того, как Улыбающийся хотя бы раз видел свою жертву, он будет преследовать ее до тех пор, пока не убьет или сам не умрет.</p>
                `
            },
            {
                id: "sub2-3",
                title: "Sneakering",
                content: `
                    <img src="./img/section2/sub2-3.png" alt="Sneakering" class="content-image">
                    <p>Тип: враждебный.<br>Здоровье: 65 единиц.<br>Урон: 2.5 единицы за 1.5 секунды.</p>
                    <p>Тонкокостное гуманоидное существо, с признаками разложения и жуткой скелетированной головой. Эта сущность появляется только в темных участках уровня.</p>
                    <p>После появления эта сущность сразу нападет на жертву по близости. Существует эффективный способ борьбы с Крадущимся, если использовать фонарик или вывести его в освещенное место, тогда Крадущийся будет получать сильный урон, а сила его атак снизится на 50%.</p>
                `
            },
            {
                id: "sub2-4",
                title: "Cashier",
                content: `
                    <img src="./img/section2/sub2-4.png" alt="Cashier" class="content-image">
                    <p>Тип: нейтральный.<br>Здоровье: 100 единиц.<br>Урон: 0.5 единиц за 1 секунду (пассивная атака), 30 единиц за 2.5 секунды (агрессивная атака).</p>
                    <p>Сущность представляет собой жуткого человека в форме кассира магазина. Фартук запачкан кровью, кожа имеет бледный оттенок, а взгляд полон безумия.</p>
                    <p>Стоит у кассы и следит за посетителями. Иногда Кассир может быть замечен в темных уголках магазина. Сущность фантомна и в случае смерти не исчезает с уровня. Встречается только на уровне 2.</p>
                    <p>Если слишком долго смотреть на Кассира или красть предметы из магазина, то он перекроет все способы выхода и заставит раздражителя страдать (пассивная атака). При явной агрессии со стороны посетителя Кассир атакует из дробовика (агрессивная атака) и перекрывает все выходы.</p>
                `
            },
            {
                id: "sub2-5",
                title: "Errant",
                content: `
                    <img src="./img/section2/sub2-5.png" alt="Errant" class="content-image">
                    <p>Тип: враждебный.<br>Здоровье: 150 единиц.<br>Урон: 15 единиц за 1 секунду.</p>
                    <p>Крайне опасная сущность, представляет собой человекоподобное существо в черной одежде с капюшоном.</p>
                    <p>Когда Странствующий появляется на уровне, то сначала будет находится рядом с жертвой и наблюдать за ее действиями. При попытке подойти к этой сущности ближе или выстрелить в нее, эта сущность будет перемещаться на другое место. Спустя какое-то время Странствующий нападет на жертву сзади с оглушающим звуком. Его можно отпугнуть, если не двигаться какое-то время, когда он появился на уровне и пока не заинтересован в убийстве жертвы.</p>
                `
            },
            {
                id: "sub2-6",
                title: "Careerist",
                content: `
                    <img src="./img/section2/sub2-6.png" alt="Careerist" class="content-image">
                    <p>Тип: нейтральный.<br>Здоровье: 80 единиц.<br>Урон: 2 единицы за 2 секунды.</p>
                    <p>Уставший офисный сотрудник, одет с белую или синюю рубашку, носит синий (30% шанс), черный (35% шанс) или красный (5% шанс) галстук или верхняя пуговица расстегнута (30% шанс), черные или серые брюки, лакированные черные туфли, может носить очки или чемодан в руках.</p>
                    <p>Сущность не будет атаковать, пока на нее никто не смотрит или к ней не проявляют агрессию. Если смотреть на Карьериста слишком долго или атаковать, то он начнет преследовать и атаковать жертву в поле своего зрения. Сущность будет бездействовать до тех пор, пока не начнет взаимодействие с чем-либо.</p>
                    <p>Встречается на некоторых небезопасных уровнях, в основном, представляющих собой различные помещения, похожие на офисы.</p>
                `
            },
            {
                id: "sub2-7",
                title: "Balloon",
                content: `
                    <img src="./img/section2/sub2-7.png" alt="Balloon" class="content-image">
                    <p>Тип: мирный.<br>Здоровье: 5 единиц.<br>Урон: -.</p>
                    <p>Сущность в виде разноцветного воздушного шарика с глазами и ртом с улыбкой. Чаще всего встречается в красном, желтом, зеленом или голубых цветах.</p>
                    <p>Балун может просто летать по уровню или следовать за выбранной целью.</p>
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
                    <p>Может быть наполнена на 50%, 75% или 100%.</p>
                    <p>При использовании миндальная вода восполняет здоровье на то количество, на которое она будет наполнена. Миндальную воду можно использовать всегда, даже когда полное здоровье, но в таком случае конкретная бутылка миндальной воды израсходуется напрасно.</p>
                    <p>В инвентаре можно хранить не более 3 бутылок миндальной воды любого уровня наполненности.</p>
                `
            },
            {
                id: "sub3-2",
                title: "Bulletproof vest",
                content: `
                    <img src="./img/section3/sub3-2.png" alt="Bulletproof vest" class="content-image">
                    <p>Может иметь 25%, 50%, 75% или 100% прочности.</p>
                    <p>Броня защищает здоровье от любого урона до тех пор, пока у нее есть запас прочности. Броню можно надеть только тогда, когда ее прочность ниже или равна максимально возможной прочности, которую можно иметь.</p>
                    <p>В инвентаре можно хранить не более 1 брони любого уровня прочности.</p>
                `
            },
            {
                id: "sub3-3",
                title: "Pistol",
                content: `
                    <img src="./img/section3/sub3-3.png" alt="Pistol" class="content-image">
                    <p>Стандартное оружие, имеет относительно средние характеристики, простое в обращении.</p>
                    <p>Калибр: 9mm.<br>Емкость магазина: 15 патронов.</p>
                `
            },
            {
                id: "sub3-4",
                title: "9mm ammo box",
                content: `
                    <img src="./img/section3/sub3-4.png" alt="9mm ammo box" class="content-image">
                    <p>Коробка с патронами может содержать 15, 30 или 60 патронов калибра 9mm.</p>
                    <p>Характеристики пули 9mm:<br>Скорость: 250 м/с.<br>Урон: 12 единиц.<br>Время полета: 4 сек.</p>
                `
            },
            {
                id: "sub3-5",
                title: "Shotgun",
                content: `
                    <img src="./img/section3/sub3-5.png" alt="Shotgun" class="content-image">
                    <p>Старый помповый дробовик. Опасное и сильное оружие, имеет убойный урон вблизи. Нужно уметь правильно перезаряжать и целиться.</p>
                    <p>Калибр: 12.<br>Емкость магазина: 5 патронов.</p>
                `
            },
            {
                id: "sub3-6",
                title: "12 gauge ammo box",
                content: `
                    <img src="./img/section3/sub3-6.png" alt="12 gauge ammo box" class="content-image">
                    <p>Коробка с патронами может содержать 10 или 20 дробовых патронов 12-го калибра.</p>
                    <p>Характеристики дроби 12-го калибра:<br>Скорость: 150 м/с.<br>Урон: 9 единиц.<br>Время полета: 3.5 сек.</p>
                `
            },
            {
                id: "sub3-7",
                title: "Flashlight",
                content: `
                    <img src="./img/section3/sub3-7.png" alt="Flashlight" class="content-image">
                    <p>Лежит в инвентаре по умолчанию. Фонариком можно подсвечивать темные места уровней. Свет этого фонарика может навредить некоторым сущностям.</p>
                    <p>Может непрерывно светить на протяжении 3 минут, нужно периодически заряжать батарейками.</p>
                `
            },
            {
                id: "sub3-8",
                title: "Battery",
                content: `
                    <img src="./img/section3/sub3-8.png" alt="Battery" class="content-image">
                    <p>Дает +50% к заряду предмета. Может быть использована для разных электроприборов на уровне или фонарика.</p>
                `
            },
            {
                id: "sub3-9",
                title: "Note",
                content: `
                    <img src="./img/section3/sub3-9.png" alt="Note" class="content-image">
                    <p>Информационное сообщение на уровне. Может содержать разные инструкции.</p>
                `
            },
            {
                id: "sub3-10",
                title: "Red tie",
                content: `
                    <img src="./img/section3/sub3-10.png" alt="Red tie" class="content-image">
                    <p>Пока находится в инвентаре, сущность "Карьерист" не может навредить.</p>
                    <p>Можно получить, если убить сущность "Карьерист" с красным галстуком.</p>
                `
            },
            {
                id: "sub3-11",
                title: "Documents",
                content: `
                    <img src="./img/section3/sub3-11.png" alt="Documents" class="content-image">
                    <p>Папка с различными задокументированными сведениями организаций или личных персон о происходящем на уровнях.</p>
                    <p>Редкий предмет, если прочитать содержимое некоторых документов, можно попасть в неприятности.</p>
                `
            },
            {
                id: "sub3-12",
                title: "Assault rifle",
                content: `
                    <img src="./img/section3/sub3-12.png" alt="Assault rifle" class="content-image">
                    <p>Старая русская надежная штурмовая винтовка калибра 7.62mm. Имеет режим автоматического огня, отлично подходит для стрельбы на средние и дальние дистанции.</p>
                    <p>Калибр: 7.62mm.<br>Емкость магазина: 30 патронов.</p>
                `
            },
            {
                id: "sub3-13",
                title: "7.62 ammo box",
                content: `
                    <img src="./img/section3/sub3-13.png" alt="7.62 ammo box" class="content-image">
                    <p>Коробка с патронами может содержать 60, 90 или 120 патронов калибра 7.62mm.</p>
                    <p>Характеристики пули 7.62mm:<br>Скорость: 300 м/с.<br>Урон: 9.5 единиц.<br>Время полета: 5 сек.</p>
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
                title: "Incident №1",
                content: `
                    <img src="./img/section4/sub4-1.png" alt="Incident №1" class="content-image">
                    <p>Название: "Черные головы".<br>Уровень: 8.<br>Шанс появления: 10%.</p>
                    <p>Условия инцидента:<br>1. Нельзя смотреть на сущностей с черными головами.<br>2. Нельзя идти в сторону странных звуков.<br>3. Необходимо двигаться в сторону компьютеров.<br>4. За компьютером найти и открыть файл "Incident_1.exe".</p>
                    <p>Шанс удачных последствий при выполнении условий: 90%.<br>Удачные последствия инцидента: пропажа всех сущностей с уровня до следующего посещения.<br>Неудачные последствия инцидента: моментальная смерть от удушья.</p>
                `
            }
        ]
    }
];

const staticTextsDictEn = {
    'hero-desc': `A solo adventure where you will explore liminal levels, encounter different entities, uncover a hidden story, and experience dangerous incidents!<br>Follow the project news in the <a href="https://t.me/enfity_games" target="_blank" class="telegram-link" title="Join us on Telegram">Telegram channel</a>!`,
    'enter-btn': 'START EXPLORING',
    'main-section': 'SECTIONS',
    'sub-section': 'SUBSECTIONS',
    'content-section': 'DETAILS',
    'footer-text': '\u00A9 2026 Dream Rooms. All anomalies belong to us.',
    'empty-state': `<div id="empty-state" class="empty-state"><p>Select a subsection to view detailed information...</p></div>`
};