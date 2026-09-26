/* Project Visuals: Complete Modules Catalog & Interactive Directory */
(() => {
  'use strict';

  const CATEGORIES = [
    { id: 'all', label: 'Все категории' },
    { id: 'combat', label: 'Боевые эффекты' },
    { id: 'world', label: 'Мир и визуал' },
    { id: 'hud', label: 'HUD' },
    { id: 'camera', label: 'Камера и руки' },
    { id: 'inventory', label: 'Инвентарь и утилиты' },
    { id: 'cosmetics', label: 'Косметика' },
    { id: 'gui', label: 'Интерфейс и темы' },
    { id: 'launcher', label: 'Стартовый экран' },
    { id: 'performance', label: 'Производительность' }
  ];

  const MODULES_DATA = [
    // 1. Боевые эффекты
    {
      id: 'hit-particles',
      name: 'Hit Particles (Частицы удара)',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: 'partial',
      desc: 'Кастомные частицы при нанесении урона цели с тонкой настройкой количества, размера, скорости, гравитации и палитры. В бесплатной версии доступен базовый набор: сердца, деньги, звёзды. В Pro версии открыты все эксклюзивные эффекты: смешанные, искры, капли, кристаллы, кубики и лепестки.',
      options: [
        { name: 'Сердца', free: true },
        { name: 'Деньги', free: true },
        { name: 'Звёзды', free: true },
        { name: 'Смешанные', free: false },
        { name: 'Искры', free: false },
        { name: 'Капли', free: false },
        { name: 'Кристаллы', free: false },
        { name: 'Кубики', free: false },
        { name: 'Лепестки', free: false }
      ]
    },
    {
      id: 'hit-color',
      name: 'Hit Color',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Окрашивание повреждённой сущности с прозрачностью и затуханием; реакция на удары или любой наблюдаемый урон.'
    },
    {
      id: 'target-esp',
      name: 'Target ESP (Метка цели)',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: 'partial',
      desc: '17 вариантов визуального выделения цели: регулировка размеров, вращения, следов, свечения, ореола и затухания. В бесплатной версии доступно 10 классических стилей: Ghosts, Ghosts V2, Scanner, Orbit, Helix, Bo, Jeka, Legacy, Vegas, Liquid Crown, Crystal Sigil. В Pro версии эксклюзивно доступны: бабочки, пентаграмма, пентаграмма с кристаллами, стеклянная орбита, маркер, кристаллы и корона.',
      options: [
        { name: 'Ghosts', free: true },
        { name: 'Ghosts V2', free: true },
        { name: 'Scanner', free: true },
        { name: 'Orbit', free: true },
        { name: 'Helix', free: true },
        { name: 'Bo', free: true },
        { name: 'Jeka', free: true },
        { name: 'Legacy', free: true },
        { name: 'Vegas', free: true },
        { name: 'Liquid Crown', free: true },
        { name: 'Crystal Sigil', free: true },
        { name: 'Бабочки', free: false },
        { name: 'Пентаграмма', free: false },
        { name: 'Пентаграмма с кристаллами', free: false },
        { name: 'Стеклянная орбита', free: false },
        { name: 'Маркер', free: false },
        { name: 'Кристаллы', free: false },
        { name: 'Корона', free: false }
      ]
    },
    {
      id: 'combat-text',
      name: 'Combat Text (Числа урона)',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: false,
      desc: 'Всплывающие числа нанесённого и полученного урона с анимацией подъёма и затухания.'
    },
    {
      id: 'totem-pop-counter',
      name: 'Totem Pop Counter',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Подсчёт срабатываний тотемов бессмертия у противников и союзников.'
    },
    {
      id: 'kill-bloom',
      name: 'Kill Bloom',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Эффект убийства: вспышка, луч вверх или вниз, кинематографичная ударная волна.'
    },
    {
      id: 'kill-spirit',
      name: 'Дух при убийстве',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Прозрачный персонаж с крыльями: варианты Ascend, Spiral и Liquid, настройки высоты, длительности, прозрачности и частиц, предпросмотр.'
    },
    {
      id: 'combat-sounds',
      name: 'Combat Sounds',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Замена звуков обычного удара, крита, убийства и тотема; выбор звука, громкости и высоты тона.'
    },
    {
      id: 'fakeplayer',
      name: 'Fakeplayer',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Локальный тренировочный манекен: свой ник, здоровье, поглощение, бессмертие, отталкивание, запас тотемов, тренировочный урон, копирование брони и косметики, поворот к игроку и возрождение.'
    },
    {
      id: 'friends',
      name: 'Friends',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Список друзей и блокировка случайного удара по союзникам.'
    },
    {
      id: 'clickfriend',
      name: 'ClickFriend',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Быстрое добавление игрока в друзья кликом средней кнопки мыши.'
    },
    {
      id: 'autorespawn',
      name: 'AutoRespawn',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: false,
      desc: 'Автоматическое возрождение персонажа либо быстрый выход в главное меню после гибели.'
    },

    // 2. Мир и визуальные эффекты
    {
      id: 'skybox',
      name: 'Skybox & Dusk (Скайбокс)',
      category: 'Мир и визуал',
      catId: 'world',
      free: 'partial',
      desc: 'Собственное небо и градиенты Dusk. В бесплатной версии доступны пресеты Vanilla, Midnight, палитры Dusk (Rose Quartz, Glacier, Ember, Amethyst, Jade, Moonstone), плавное вращение неба и управление солнцем/луной. В платной Pro версии эксклюзивно доступна функция тонирования неба (Skybox Tint), а также пресеты Storm и Nebula.',
      options: [
        { name: 'Пресет Vanilla', free: true },
        { name: 'Пресет Midnight', free: true },
        { name: 'Палитры Dusk (6 видов)', free: true },
        { name: 'Вращение неба и светила', free: true },
        { name: 'Тонирование неба (Skybox Tint)', free: false },
        { name: 'Пресет Storm', free: false },
        { name: 'Пресет Nebula', free: false }
      ]
    },
    {
      id: 'atmosphere',
      name: 'Atmosphere',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Изменение оттенка освещения мира, защита теней, тонирование искусственного света, отдельное влияние на интерфейс.'
    },
    {
      id: 'time-changer',
      name: 'Time Changer',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Локальное время суток и настраиваемый цикл дня.'
    },
    {
      id: 'fog-color',
      name: 'Fog Color',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Цвет тумана, дистанция начала и максимальная дальность.'
    },
    {
      id: 'fullbright',
      name: 'Fullbright',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Увеличение яркости освещения мира без необходимости пить зелья ночного зрения.'
    },
    {
      id: 'ambient-wisps',
      name: 'Ambient Wisps',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Летающие светящиеся огоньки или звёздочки в воздухе с настройками плотности, зоны появления и скорости.'
    },
    {
      id: 'jump-circles',
      name: 'Jump Circles',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Красивые расходящиеся световые круги под ногами при совершении прыжка.'
    },
    {
      id: 'projectile-trails',
      name: 'Projectile Trails',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Световые неоновые следы за летящими стрелами, жемчугом Края, снежками и зельями.'
    },
    {
      id: 'trajectories',
      name: 'Trajectories',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Визуальный прогноз траектории лука и метательных снарядов, отметка точки падения и подсветка пересекаемой цели.'
    },
    {
      id: 'player-trail',
      name: 'Player Trail',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Плавный световой шлейф за персонажем при движении.'
    },
    {
      id: 'player-radiance',
      name: 'Player Radiance',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Мягкое свечение вокруг силуэта вашего персонажа.'
    },
    {
      id: 'tags',
      name: 'Tags (Метки над игроками)',
      category: 'Мир и визуал',
      catId: 'world',
      free: false,
      desc: 'Кастомные информационные метки над игроками и сущностями: дистанция, состояние брони, статус и здоровье.'
    },
    {
      id: 'player-outline',
      name: 'Player Outline (Обводка игроков)',
      category: 'Мир и визуал',
      catId: 'world',
      free: false,
      desc: 'Настраиваемая контурная обводка силуэтов видимых игроков с выбором толщины, цвета и пульсации.'
    },
    {
      id: 'visible-hitboxes',
      name: 'Visible Hitboxes',
      category: 'Мир и визуал',
      catId: 'world',
      free: false,
      desc: 'Подсветка хитбоксов видимых игроков, мобов или последней атакованной цели.'
    },
    {
      id: 'hitbox',
      name: 'Hitbox',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Оформление стандартных F3+B хитбоксов: кастомная обводка, полупрозрачная заливка или комбинированный вид.'
    },
    {
      id: 'item-physics',
      name: 'Item Physics',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Реалистичная физика лежащих и падающих на землю предметов.'
    },
    {
      id: 'item-labels',
      name: 'Item Labels',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Аккуратные текстовые подписи выпавших предметов на расстоянии до 64 блоков: количество, масштаб, фон и лимит длины.'
    },
    {
      id: 'custom-xp',
      name: 'Custom XP',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Звёзды, сердца, капли или ромбы вместо стандартных шариков опыта.'
    },
    {
      id: 'norender',
      name: 'NoRender',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Отключение ненужных элементов: скорборд, список игроков, огонь на экране, дождь/снег, виньетка, портал, тыква, иконки эффектов и тряска камеры при ударе.'
    },

    // 3. HUD
    {
      id: 'target-hud',
      name: 'Target HUD',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Стильный виджет цели: 3D-портрет, ник, полоса здоровья, поглощение, расстояние и надетая броня с прочностью.'
    },
    {
      id: 'armor-hud',
      name: 'Armor HUD',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Отображение состояния экипировки, прочности каждого элемента и предупреждение об износе.'
    },
    {
      id: 'inventory-view',
      name: 'Inventory View',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Компактное отображение содержимого своего инвентаря прямо на экране.'
    },
    {
      id: 'cooldowns',
      name: 'Cooldowns',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Таймеры и индикаторы перезарядки предметов (эндер-жемчуг, золотые яблоки, щит).'
    },
    {
      id: 'status-effects',
      name: 'Status Effects',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Список активных эффектов зелий, их уровни, иконки и оставшаяся длительность.'
    },
    {
      id: 'keybinds',
      name: 'Keybinds',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Виджет активных назначенных горячих клавиш на экране.'
    },
    {
      id: 'coordinates',
      name: 'Coordinates',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Минималистичная панель координат X, Y, Z, биома и направления взгляда.'
    },
    {
      id: 'glass-status-bar',
      name: 'Glass Status Bar',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Стеклянная капсула статуса либо независимые блоки: ник, сервер, FPS, пинг, время, координаты, оценка TPS и скорость.'
    },
    {
      id: 'custom-crosshair',
      name: 'Custom Crosshair',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Кастомный прицел: точка, круг, крестик или динамический прицел с откликом на удар.'
    },
    {
      id: 'charge-meter',
      name: 'Charge Meter',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Индикатор восстановления готовности атаки оружием.'
    },
    {
      id: 'damage-veil',
      name: 'Damage Veil',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Мягкая неоновая вспышка по периметру экрана при получении персонажем урона.'
    },
    {
      id: 'notifications',
      name: 'Notifications',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Плавные всплывающие уведомления о тотемах, зельях, еде и включении/выключении модулей.'
    },
    {
      id: 'lock-armor-notify',
      name: 'Lock Armor Notify',
      category: 'HUD',
      catId: 'hud',
      free: false,
      desc: 'Срочное всплывающее предупреждение при критически низкой прочности брони.'
    },
    {
      id: 'music',
      name: 'Music Visualizer',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Музыкальная панель и анимированные визуализаторы Bars, Wave, Orbit при воспроизведении медиа.'
    },
    {
      id: 'fake-fps',
      name: 'Fake FPS',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Отображение кастомного случайного значения FPS из диапазона для красивых скриншотов.'
    },
    {
      id: 'hud-chat-editor',
      name: 'Редактор HUD через чат',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Интерактивное перемещение, масштабирование и скрытие виджетов мышью при открытом чате.'
    },

    // 4. Камера, руки и управление
    {
      id: 'viewmodel',
      name: 'Viewmodel',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Независимая настройка положения, глубины и масштаба обеих рук; перемещение прямо мышью.'
    },
    {
      id: 'hand-chams',
      name: 'Hand Chams',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Премиум-материалы рук: Liquid Glass, Light Bands, Aurora, Opal, Petrol и Mercury с палитрами и скоростью анимации.'
    },
    {
      id: 'hand-flames',
      name: 'Hand Flames (Пламя рук)',
      category: 'Камера и руки',
      catId: 'camera',
      free: false,
      desc: 'Магическое пламя по силуэту рук и предметов с кастомным оттенком и регулировкой свечения.'
    },
    {
      id: 'zoom',
      name: 'Zoom',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Плавный зум с регулировкой колесом мыши, клавишей активации, кривой перехода и масштабированием интерфейса.'
    },
    {
      id: 'free-look',
      name: 'Free Look',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Свободный круговой обзор камерой от третьего лица без смены направления движения персонажа.'
    },
    {
      id: 'screen-ratio',
      name: 'Screen Ratio',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Принудительное соотношение сторон экрана: 21:9, 16:9, 4:3, 16:10 или произвольное кастомное.'
    },
    {
      id: 'auto-sprint',
      name: 'Auto Sprint',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Автоматический бег при начале движения вперёд.'
    },
    {
      id: 'keybinds-config',
      name: 'Бинды',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Назначение модулей на клавиатуру и кнопки мыши (включая боковые); режимы удержания и переключения.'
    },

    // 5. Инвентарь и утилиты
    {
      id: 'shulker-preview',
      name: 'Shulker Preview',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Всплывающий предпросмотр содержимого шалкерового ящика при наведении в инвентаре.'
    },
    {
      id: 'lockslot',
      name: 'LockSlot',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Блокировка случайного выбрасывания или перемещения важных предметов в выбранных слотах.'
    },
    {
      id: 'item-scroller',
      name: 'Item Scroller',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Мгновенный перенос предметов перетаскиванием с зажатой клавишей и колесом мыши.'
    },
    {
      id: 'chest-sort',
      name: 'Chest Sort',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Умная сортировка сундука, объединение неполных стаков и группировка по типам предметов.'
    },
    {
      id: 'chest-loot',
      name: 'Chest Loot (Забирать из сундука)',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Автоматический последовательный быстрый перенос всех предметов из открытого сундука в инвентарь.'
    },
    {
      id: 'item-logger',
      name: 'ItemLogger (Айтем логгер)',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Текстовые уведомления в чате или HUD о каждом подобранном предмете и его количестве.'
    },
    {
      id: 'death-coords',
      name: 'Death Coords',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Фиксация точных координат и временная метка точки последней гибели персонажа.'
    },
    {
      id: 'waypoints',
      name: 'Waypoints',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Создание путевых точек по взгляду или координатам с отображением в игровом мире.'
    },
    {
      id: 'name-protect',
      name: 'Name Protect',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Локальная маскировка вашего никнейма в игре для стримов и записи видео.'
    },
    {
      id: 'command-macros',
      name: 'Command Macros (Макросы команд)',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Быстрое выполнение чат-команд по нажатию бинда с поддержкой автоподстановки координат.'
    },
    {
      id: 'screenshot-clipboard',
      name: 'Screenshot Clipboard',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Создание скриншота с одновременным копированием готового изображения в буфер обмена.'
    },
    {
      id: 'chat-history',
      name: 'История чата',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Сохранение истории отправленных сообщений между перезапусками клиента.'
    },

    // 6. Косметика
    {
      id: 'cosmetics-catalog',
      name: 'Каталог косметики',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Внутриигровой гардероб с 3D-предпросмотром персонажа и свободным вращением моделей.'
    },
    {
      id: 'back-cosmetics',
      name: 'Аксессуары на спину',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Project Elytra, стеклянные светящиеся крылья и коллекция авторских 3D-моделей.'
    },
    {
      id: 'capes',
      name: 'Плащи',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Большая коллекция стильных плащей, скрытие стандартного плаща и физическая анимация ткани.'
    },
    {
      id: 'head-cosmetics',
      name: 'Аксессуары на голову',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Жидкая корона, Red Eyes, Creeper, Balaclava, Pink Pumpkin, Cone и Antlers с настройками размера, палитры и свечения.'
    },
    {
      id: 'weapons-cosmetics',
      name: 'Скины оружия',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Кастомные модели Glass Sword и Crystal Sword с индивидуальными градиентами для каждого материала.'
    },
    {
      id: 'combinations',
      name: 'Комбинации косметики',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Одновременное комбинирование плащей, крыльев и головных уборов без визуальных конфликтов.'
    },

    // 7. Интерфейс, темы и профили
    {
      id: 'themes',
      name: 'Темы GUI',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Фирменные темы интерфейса: Liquid (глянцевое стекло) и Matte (глубокий матовый минимализм).'
    },
    {
      id: 'module-search',
      name: 'Умный поиск по модулям',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Быстрый поиск функций по русским и английским названиям, описанию и синонимам.'
    },
    {
      id: 'structure-customization',
      name: 'Кастомизация структуры',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Свободная перестановка модулей и категорий, регулировка разделителей колонок и масштаба интерфейса.'
    },
    {
      id: 'color-palette',
      name: 'Палитра цветов',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Полнофункциональная цветовая палитра с HEX-кодами, пипеткой и сохранением избранных оттенков.'
    },
    {
      id: 'gradients-styles',
      name: 'Градиенты и стили',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Пресеты градиентов: Silk, Aurora, Tide, Breathe, Petrol, Light Bands, Opal, Liquid Glass, Mercury.'
    },
    {
      id: 'localization',
      name: 'Локализация',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Полный профессиональный перевод интерфейса и настроек на русский и английский языки.'
    },
    {
      id: 'ui-sounds',
      name: 'Звуки интерфейса',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Приятные звуковые отклики на клики, ползунки и переключатели с поддержкой своих audio-файлов.'
    },
    {
      id: 'profiles',
      name: 'Профили настроек',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Сохранение, экспорт и импорт неограниченного числа конфигов (для PvP, выживания, мини-игр).'
    },
    {
      id: 'f1-visibility',
      name: 'F1 Visibility',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Тонкая настройка видимости элементов мода при включении режима F1.'
    },

    // 8. Стартовый экран и интеграции
    {
      id: 'start-screen',
      name: 'Стартовый экран',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Кастомное главное меню игры с живыми обоями, часами, панелью серверов и плавными анимациями.'
    },
    {
      id: 'wallpaper-editor',
      name: 'Редактор обоев',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Импорт собственных обоев PNG/JPG, матовый блюр, регулировка затемнения и стили часов SF Pro.'
    },
    {
      id: 'window-customization',
      name: 'Кастомизация окна',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Фирменный заголовок окна и логотип Project Visuals вместо стандартной иконки Java.'
    },
    {
      id: 'alt-accounts',
      name: 'Менеджер аккаунтов (Alts)',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Быстрое переключение между лицензионными и офлайн-аккаунтами без перезапуска игры.'
    },
    {
      id: 'viafabricplus',
      name: 'ViaFabricPlus',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Прямое подключение к серверам любых версий Minecraft от 1.8 до самых новых.'
    },
    {
      id: 'shaders-catalog',
      name: 'Каталог шейдеров',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Удобная загрузка и переключение шейдерпаков Iris с настройкой профилей качества.'
    },

    // 9. Производительность
    {
      id: 'optimization',
      name: 'Optimization (Оптимизация)',
      category: 'Производительность',
      catId: 'performance',
      free: 'partial',
      desc: 'Глубокая оптимизация работы самого Minecraft: отсечение невидимой геометрии и сущностей, умный менеджмент частиц, регулировка дальности прорисовки и графических нагрузок. В бесплатной версии доступна базовая оптимизация, а в платной Pro версии модуль работает на 25% эффективнее за счёт расширенных эвристик рендеринга и агрессивного отсечения.',
      options: [
        { name: 'Базовая оптимизация Minecraft', free: true },
        { name: 'Отсечение скрытых сущностей', free: true },
        { name: 'Регулировка частиц и теней', free: true },
        { name: 'Управление дальностью и облаками', free: true },
        { name: 'Продвинутый буст (+25% эффективности)', free: false },
        { name: 'Глубокое агрессивное отсечение кадра', free: false }
      ]
    },
    {
      id: 'fps-reduce',
      name: 'FPS Reduce',
      category: 'Производительность',
      catId: 'performance',
      free: true,
      desc: 'Снижение нагрузки на видеокарту и процессор при свёрнутом окне или AFK.'
    },
    {
      id: 'cache-calc',
      name: 'Кэширование расчётов',
      category: 'Производительность',
      catId: 'performance',
      free: true,
      desc: 'Оптимизация математических вычислений визуальных эффектов и анимаций.'
    }
  ];

  // DOM Elements
  const container = document.getElementById('modules-catalog-container');
  const searchInput = document.getElementById('modules-search-input');
  const searchClear = document.getElementById('modules-search-clear');
  const categoriesNav = document.getElementById('modules-categories-nav');
  const countBadge = document.getElementById('modules-total-count');
  const catalogToggleBtn = document.getElementById('modules-catalog-toggle-btn');
  const catalogCollapsible = document.getElementById('modules-catalog-collapsible');
  const bottomCollapseBtn = document.getElementById('modules-bottom-collapse-btn');
  const colsGroup = document.getElementById('modules-cols-group');
  const floatingTopBtn = document.getElementById('modules-floating-top-btn');
  const modulesSection = document.getElementById('modules-catalog');

  if (!container) return;

  let activeCategory = 'all';
  let searchQuery = '';
  let isCatalogExpanded = false;

  const totalModulesCount = MODULES_DATA.length;
  if (countBadge) {
    countBadge.textContent = `${totalModulesCount}`;
  }

  // Update Toggle Button Text and State
  function updateToggleBtnState(expanded) {
    isCatalogExpanded = expanded;
    if (!catalogToggleBtn) return;
    
    catalogToggleBtn.setAttribute('aria-expanded', String(expanded));
    
    if (expanded) {
      catalogCollapsible.classList.add('is-open');
      catalogToggleBtn.innerHTML = `
        <span class="toggle-btn-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M6 9l6 6 6-6"/></svg>
        </span>
        <span class="toggle-btn-text">Свернуть каталог модулей</span>
      `;
    } else {
      catalogCollapsible.classList.remove('is-open');
      catalogToggleBtn.innerHTML = `
        <span class="toggle-btn-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M6 9l6 6 6-6"/></svg>
        </span>
        <span class="toggle-btn-text">Развернуть каталог модулей (${totalModulesCount})</span>
      `;
    }
  }

  // Wire Catalog Toggle Button
  if (catalogToggleBtn && catalogCollapsible) {
    catalogToggleBtn.addEventListener('click', () => {
      updateToggleBtnState(!isCatalogExpanded);
    });
  }

  // Wire Bottom Collapse Button
  if (bottomCollapseBtn && catalogCollapsible) {
    bottomCollapseBtn.addEventListener('click', () => {
      updateToggleBtnState(false);
      if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Wire Column Switcher Buttons (2, 3, 4 cols)
  if (colsGroup) {
    colsGroup.querySelectorAll('.col-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        colsGroup.querySelectorAll('.col-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const cols = btn.dataset.cols || '2';
        container.className = `modules-catalog-grid cols-${cols}`;
      });
    });
  }

  // Floating Back to Top Button Visibility and Action
  if (floatingTopBtn && modulesSection) {
    window.addEventListener('scroll', () => {
      if (!isCatalogExpanded) {
        floatingTopBtn.classList.remove('is-visible');
        return;
      }
      const rect = modulesSection.getBoundingClientRect();
      // Show when scrolled at least 260px down into the catalog section, and still before reaching the very end
      if (rect.top < -260 && rect.bottom > 250) {
        floatingTopBtn.classList.add('is-visible');
      } else {
        floatingTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    floatingTopBtn.addEventListener('click', () => {
      modulesSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Render Category Tabs
  function renderCategories() {
    if (!categoriesNav) return;
    categoriesNav.innerHTML = '';
    
    CATEGORIES.forEach(cat => {
      const count = cat.id === 'all' 
        ? MODULES_DATA.length 
        : MODULES_DATA.filter(m => m.catId === cat.id).length;
      
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `category-tab-btn ${cat.id === activeCategory ? 'is-active' : ''}`;
      btn.dataset.category = cat.id;
      btn.innerHTML = `<span>${cat.label}</span> <span class="badge-count">${count}</span>`;
      
      btn.addEventListener('click', () => {
        activeCategory = cat.id;
        document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        renderModules();
      });
      
      categoriesNav.appendChild(btn);
    });
  }

  // Render Module Cards
  function renderModules() {
    container.innerHTML = '';

    const q = searchQuery.trim().toLowerCase();
    const filtered = MODULES_DATA.filter(m => {
      const matchCat = activeCategory === 'all' || m.catId === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;

      // Full Live Search: matches module name, description, category, and any sub-options
      const inName = m.name.toLowerCase().includes(q);
      const inDesc = m.desc.toLowerCase().includes(q);
      const inCat = m.category.toLowerCase().includes(q);
      const inOptions = Array.isArray(m.options) && m.options.some(opt => opt.name.toLowerCase().includes(q));

      return inName || inDesc || inCat || inOptions;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="modules-empty-state">
          <p>По запросу «${searchQuery}» модулей не найдено.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(module => {
      const card = document.createElement('article');
      card.className = 'module-card';
      card.id = `mod-${module.id}`;

      let iconClass = 'free-yes';
      let iconSymbol = '✓';
      let editionText = 'Free + Pro';
      let noticeText = '✓ Присутствует и в бесплатной, и в платной версии';
      let noticeClass = 'notice-check';

      if (module.free === 'partial') {
        iconClass = 'free-partial';
        iconSymbol = '~';
        editionText = 'Базовый в Free';
        noticeText = '~ Базовый пул доступен в Free, расширенный функционал — в Pro';
        noticeClass = 'notice-partial';
      } else if (module.free === false) {
        iconClass = 'free-no';
        iconSymbol = '✕';
        editionText = 'Только Pro';
        noticeText = '✕ Отсутствует в Free версии (доступно только по подписке)';
        noticeClass = 'notice-cross';
      }

      // Generate Options Tags Markup if breakdown is provided
      let optionsMarkup = '';
      if (Array.isArray(module.options) && module.options.length > 0) {
        const tags = module.options.map(opt => {
          const tagClass = opt.free ? 'yes' : 'no';
          const sym = opt.free ? '✓' : '✕';
          const proSuffix = opt.free ? '' : ' (Pro)';
          return `<span class="opt-tag ${tagClass}">${sym} ${opt.name}${proSuffix}</span>`;
        }).join('');

        optionsMarkup = `
          <div class="module-options-breakdown">
            <div class="options-heading">Состав режимов и вариаций:</div>
            <div class="options-tags-grid">
              ${tags}
            </div>
          </div>
        `;
      }

      card.innerHTML = `
        <button class="module-card-trigger" type="button" aria-expanded="false" aria-controls="drawer-${module.id}">
          <div class="module-trigger-left">
            <span class="module-status-icon ${iconClass}" aria-hidden="true">${iconSymbol}</span>
            <div class="module-title-wrap">
              <h3 class="module-name">${module.name}</h3>
              <div class="module-category-tag">${module.category}</div>
            </div>
          </div>
          <div class="module-trigger-right">
            <span class="module-edition-label ${iconClass}">${editionText}</span>
            <span class="module-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg>
            </span>
          </div>
        </button>
        <div class="module-drawer" id="drawer-${module.id}">
          <div class="module-drawer-inner">
            <div class="module-drawer-content">
              <p class="module-desc">${module.desc}</p>
              ${optionsMarkup}
              <div class="module-edition-notice ${noticeClass}">
                ${noticeText}
              </div>
            </div>
          </div>
        </div>
      `;

      const trigger = card.querySelector('.module-card-trigger');
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(isOpen));
      });

      container.appendChild(card);
    });
  }

  // Search logic
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      if (searchClear) {
        searchClear.classList.toggle('visible', searchQuery.length > 0);
      }
      renderModules();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('visible');
        searchInput.focus();
        renderModules();
      }
    });
  }

  // Init
  renderCategories();
  renderModules();
})();
