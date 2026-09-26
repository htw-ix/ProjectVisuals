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
      name: 'Hit Particles',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Частицы удара: смешанные, искры, сердца, капли, деньги, звёзды, кристаллы, кубы и лепестки. Настраиваются количество, размер, скорость, гравитация, время жизни и палитра.'
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
      name: 'Target ESP',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: '17 вариантов: Ghosts, Ghosts V2, Scanner, Orbit, Helix, Crown, Bo, Jeka, Legacy, Marker, Vegas, Crystals, Butterflies, Pentagram, Liquid Crown, Crystal Sigil и Glass Orbit. Настройки Target ESP: размеры, количество элементов, вращение, следы, свечение, отдельный цвет ореола, покраснение при уроне, плавное появление и исчезновение после бездействия.'
    },
    {
      id: 'combat-text',
      name: 'Combat Text (Damage Numbers)',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: false,
      desc: 'Всплывающие числа наблюдаемой потери здоровья.'
    },
    {
      id: 'totem-pop-counter',
      name: 'Totem Pop Counter',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Подсчёт срабатываний тотемов.'
    },
    {
      id: 'kill-bloom',
      name: 'Kill Bloom',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Эффект убийства: вспышка, луч вверх или вниз, ударная волна.'
    },
    {
      id: 'kill-spirit',
      name: 'Дух при убийстве',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Прозрачный персонаж с крыльями; варианты Ascend, Spiral и Liquid, настройки высоты, длительности, прозрачности и частиц, предпросмотр.'
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
      desc: 'Локальный манекен: свой ник, здоровье, поглощение, бессмертие, отталкивание, запас тотемов, тренировочный урон, копирование брони и косметики, поворот к игроку и возрождение.'
    },
    {
      id: 'friends',
      name: 'Friends',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Список друзей и запрет прямого удара по ним.'
    },
    {
      id: 'clickfriend',
      name: 'ClickFriend',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: true,
      desc: 'Добавление друга средней кнопкой мыши.'
    },
    {
      id: 'autorespawn',
      name: 'AutoRespawn',
      category: 'Боевые эффекты',
      catId: 'combat',
      free: false,
      desc: 'Автоматическое возрождение либо выход в главное меню после смерти.'
    },

    // 2. Мир и визуальные эффекты
    {
      id: 'skybox',
      name: 'Skybox & Dusk',
      category: 'Мир и визуал',
      catId: 'world',
      free: false,
      desc: 'Skybox — Vanilla, Midnight, Dusk, Storm и Nebula. Dusk — палитры Rose Quartz, Glacier, Ember, Amethyst, Jade и Moonstone. Тонирование неба, насыщенность, яркость, вращение, управление солнцем и луной, отображение у горизонта.'
    },
    {
      id: 'atmosphere',
      name: 'Atmosphere',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Изменение оттенка освещения, защита теней, тонирование искусственного света, отдельное влияние на интерфейс.'
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
      desc: 'Цвет тумана, начало и конечная дальность.'
    },
    {
      id: 'fullbright',
      name: 'Fullbright',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Увеличение яркости мира.'
    },
    {
      id: 'ambient-wisps',
      name: 'Ambient Wisps',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Летающие огоньки или звёздочки с настройками количества, области появления и движения.'
    },
    {
      id: 'jump-circles',
      name: 'Jump Circles',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Расходящиеся круги при прыжке.'
    },
    {
      id: 'projectile-trails',
      name: 'Projectile Trails',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Световые следы стрел, жемчуга и снежков.'
    },
    {
      id: 'trajectories',
      name: 'Trajectories',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Прогноз траектории лука и метательных предметов, отметка столкновения и выделение пересекаемой сущности.'
    },
    {
      id: 'player-trail',
      name: 'Player Trail',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Световой хвост за игроком.'
    },
    {
      id: 'player-radiance',
      name: 'Player Radiance',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Свечение вокруг силуэта игрока.'
    },
    {
      id: 'player-outline',
      name: 'Player Outline',
      category: 'Мир и визуал',
      catId: 'world',
      free: false,
      desc: 'Настраиваемая обводка видимых игроков.'
    },
    {
      id: 'visible-hitboxes',
      name: 'Visible Hitboxes',
      category: 'Мир и визуал',
      catId: 'world',
      free: false,
      desc: 'Хитбоксы видимых игроков, мобов или последней цели.'
    },
    {
      id: 'hitbox',
      name: 'Hitbox',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Оформление стандартных F3+B хитбоксов: обводка, заливка или оба варианта.'
    },
    {
      id: 'item-physics',
      name: 'Item Physics',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Визуальная физика выпавших предметов.'
    },
    {
      id: 'item-labels',
      name: 'Item Labels',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Подписи видимых выпавших предметов до 64 блоков; количество, масштаб, фон и ограничение длины названия.'
    },
    {
      id: 'custom-xp',
      name: 'Custom XP',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Звёзды, сердца, капли или ромбы вместо обычных сфер опыта.'
    },
    {
      id: 'norender',
      name: 'NoRender',
      category: 'Мир и визуал',
      catId: 'world',
      free: true,
      desc: 'Скрытие скорборда, списка игроков, огня, дождя/снега, виньетки, портала, тыквы, стандартных значков эффектов и тряски камеры при уроне.'
    },

    // 3. HUD
    {
      id: 'target-hud',
      name: 'Target HUD',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Портрет цели, имя, здоровье, поглощение, расстояние и броня.'
    },
    {
      id: 'armor-hud',
      name: 'Armor HUD',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Броня, прочность и предупреждение об износе.'
    },
    {
      id: 'inventory-view',
      name: 'Inventory View',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Отображение содержимого своего инвентаря.'
    },
    {
      id: 'cooldowns',
      name: 'Cooldowns',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Оставшееся время перезарядки предметов.'
    },
    {
      id: 'status-effects',
      name: 'Status Effects',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Активные эффекты, уровни и длительность.'
    },
    {
      id: 'keybinds',
      name: 'Keybinds',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Список назначенных биндов.'
    },
    {
      id: 'coordinates',
      name: 'Coordinates',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Отдельная панель координат и направления.'
    },
    {
      id: 'glass-status-bar',
      name: 'Glass Status Bar',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Верхняя капсула либо независимые панели: ник, сервер, логотип, FPS, пинг, часы, игровое время, координаты, оценка TPS и скорость движения.'
    },
    {
      id: 'custom-crosshair',
      name: 'Custom Crosshair',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Точка, крест или динамический прицел с реакцией на удар.'
    },
    {
      id: 'charge-meter',
      name: 'Charge Meter',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Индикатор восстановления атаки.'
    },
    {
      id: 'damage-veil',
      name: 'Damage Veil',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Мягкая цветная вспышка по краям при получении урона.'
    },
    {
      id: 'notifications',
      name: 'Notifications',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Уведомления о тотемах, питье, еде и переключении модулей.'
    },
    {
      id: 'lock-armor-notify',
      name: 'Lock Armor Notify',
      category: 'HUD',
      catId: 'hud',
      free: false,
      desc: 'Предупреждение о низкой прочности брони.'
    },
    {
      id: 'music',
      name: 'Music',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Музыкальная панель и визуализаторы Bars, Wave, Orbit.'
    },
    {
      id: 'fake-fps',
      name: 'Fake FPS',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Отображаемый случайный FPS из выбранного диапазона; реальную производительность не повышает.'
    },
    {
      id: 'hud-chat-editor',
      name: 'Редактирование HUD через чат',
      category: 'HUD',
      catId: 'hud',
      free: true,
      desc: 'Перемещение, масштабирование и скрытие поддерживаемых элементов.'
    },

    // 4. Камера, руки и управление
    {
      id: 'viewmodel',
      name: 'Viewmodel',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Независимое положение, глубина и размер обеих рук; перемещение мышью в чате.'
    },
    {
      id: 'hand-chams',
      name: 'Hand Chams',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Материалы Liquid Glass, Light Bands, Aurora, Opal, Petrol и Mercury с настройками цвета и скорости.'
    },
    {
      id: 'hand-flames',
      name: 'Hand Flames',
      category: 'Камера и руки',
      catId: 'camera',
      free: false,
      desc: 'Пламя по силуэту рук и предмета, цвет и регулируемое свечение.'
    },
    {
      id: 'zoom',
      name: 'Zoom',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Увеличение, колесо прокрутки, чувствительность, отдельная клавиша активации, режим удержания/переключения, редактор кривой перехода и опция масштабирования интерфейса.'
    },
    {
      id: 'free-look',
      name: 'Free Look',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Свободный обзор без изменения направления движения персонажа.'
    },
    {
      id: 'screen-ratio',
      name: 'Screen Ratio',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: '21:9, 16:9, 4:3, 16:10 и собственное соотношение сторон.'
    },
    {
      id: 'auto-sprint',
      name: 'Auto Sprint',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Автоматический спринт при допустимых игровых условиях.'
    },
    {
      id: 'keybinds-config',
      name: 'Бинды',
      category: 'Камера и руки',
      catId: 'camera',
      free: true,
      desc: 'Бинды на клавиатуру и кнопки мыши, включая боковые; режимы удержания и переключения.'
    },

    // 5. Инвентарь и утилиты
    {
      id: 'shulker-preview',
      name: 'Shulker Preview',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Предпросмотр содержимого шалкера.'
    },
    {
      id: 'lockslot',
      name: 'LockSlot',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Блокировка перемещения и выбрасывания выбранных слотов.'
    },
    {
      id: 'item-scroller',
      name: 'Item Scroller',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Быстрый перенос предметов перетаскиванием и колесом.'
    },
    {
      id: 'chest-sort',
      name: 'Chest Sort',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Постепенная сортировка сундука, объединение совместимых неполных стаков и раскладка по группам.'
    },
    {
      id: 'chest-loot',
      name: 'Chest Loot',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Последовательный перенос предметов из открытого сундука.'
    },
    {
      id: 'item-logger',
      name: 'ItemLogger',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Сообщения о подобранных предметах.'
    },
    {
      id: 'death-coords',
      name: 'Death Coords',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Координаты и метка последней смерти, настраиваемый текст сообщения.'
    },
    {
      id: 'waypoints',
      name: 'Waypoints',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Метки по направлению курсора и заданным координатам.'
    },
    {
      id: 'name-protect',
      name: 'Name Protect',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Локальная замена отображаемого ника; менеджер аккаунтов показывает реальные имена.'
    },
    {
      id: 'command-macros',
      name: 'Command Macros',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: false,
      desc: 'Команды по бинду, заготовки и подстановка координат.'
    },
    {
      id: 'screenshot-clipboard',
      name: 'Screenshot Clipboard',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Сохранение скриншота и копирование изображения в буфер обмена.'
    },
    {
      id: 'chat-history',
      name: 'История чата',
      category: 'Инвентарь и утилиты',
      catId: 'inventory',
      free: true,
      desc: 'Сохранение последних 100 отправленных строк чата между запусками.'
    },

    // 6. Косметика
    {
      id: 'cosmetics-catalog',
      name: 'Каталог косметики',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Отдельное окно с категориями, предпросмотром персонажа и вращением моделей.'
    },
    {
      id: 'back-cosmetics',
      name: 'На спину',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Project Elytra, стеклянные крылья и коллекция импортированных 3D-аксессуаров.'
    },
    {
      id: 'capes',
      name: 'Плащи',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Коллекция по подкатегориям, включая ez; скрытие исходного плаща аккаунта и переключаемая анимация ветра.'
    },
    {
      id: 'head-cosmetics',
      name: 'На голову',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Жидкая корона, Red Eyes, Creeper, Balaclava, Pink Pumpkin, Cone и Antlers. Настройки размера, положения, палитры, прозрачности, анимации и свечения у соответствующих аксессуаров. Настройки отверстий глаз и рта балаклавы.'
    },
    {
      id: 'weapons-cosmetics',
      name: 'Оружие',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Glass Sword и Crystal Sword. Общий цвет/градиент меча либо отдельные палитры для дерева, камня, железа, золота, алмаза и незерита.'
    },
    {
      id: 'combinations',
      name: 'Комбинации',
      category: 'Косметика',
      catId: 'cosmetics',
      free: true,
      desc: 'Одновременное использование плаща и аксессуаров на спину.'
    },

    // 7. Интерфейс, темы и профили
    {
      id: 'themes',
      name: 'Темы GUI',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Две темы: Liquid и Matte.'
    },
    {
      id: 'module-search',
      name: 'Поиск по модулям',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Поиск по модулям с альтернативными названиями и синонимами.'
    },
    {
      id: 'structure-customization',
      name: 'Кастомизация структуры',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Перестановка модулей, категорий и аккаунтов; отмена изменения порядка. Перемещение и изменение размеров окон, масштаб интерфейса, регулируемые разделители колонок.'
    },
    {
      id: 'color-palette',
      name: 'Палитра цветов',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Палитра с предпросмотром, копированием и вставкой цвета. Отдельные палитры эффектов или синхронизация с темой.'
    },
    {
      id: 'gradients-styles',
      name: 'Градиенты и стили',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Статический цвет, радуга и градиенты: Silk, Aurora, Tide, Breathe, Petrol, Light Bands, Opal, Liquid Glass, Mercury. Настройки насыщенности, размытия, прозрачности, скруглений и анимаций.'
    },
    {
      id: 'localization',
      name: 'Локализация',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Русский и английский языки. Подтверждение сброса и удаления.'
    },
    {
      id: 'ui-sounds',
      name: 'Звуки интерфейса',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Настраиваемые звуки кликов и переключения модулей. Собственные click.ogg и totem.ogg.'
    },
    {
      id: 'profiles',
      name: 'Профили настроек',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Профили: локальное сохранение, загрузка и импорт; параметры модулей, бинды, оформление, расположение окон и настройки установленных шейдерпаков.'
    },
    {
      id: 'f1-visibility',
      name: 'F1 Visibility',
      category: 'Интерфейс и темы',
      catId: 'gui',
      free: true,
      desc: 'Выбор элементов, которые скрываются по клавише F1.'
    },

    // 8. Стартовый экран и интеграции
    {
      id: 'start-screen',
      name: 'Стартовый экран',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Собственный стартовый экран с обоями, датой, часами и свайпом. Панель одиночной игры, серверов, настроек, выхода и аккаунтов.'
    },
    {
      id: 'wallpaper-editor',
      name: 'Редактор обоев',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Галерея, импорт PNG, тонирование и интенсивность. Часы SF Pro Bold/Medium/Regular, скругление цифр и движущееся цветное освещение. Изменяемый размер панели кнопок, матовый блюр и анимированные переходы.'
    },
    {
      id: 'window-customization',
      name: 'Кастомизация окна',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Название окна Project Visuals и логотип мода вместо иконки игры.'
    },
    {
      id: 'alt-accounts',
      name: 'Alt Accounts',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Офлайн-аккаунты, Microsoft-вход, поиск, фильтры и переключение аккаунтов вне мира.'
    },
    {
      id: 'viafabricplus',
      name: 'ViaFabricPlus',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Встроенный ViaFabricPlus для прямого подключения к разным версиям серверов.'
    },
    {
      id: 'shaders-catalog',
      name: 'Каталог шейдерпаков',
      category: 'Стартовый экран',
      catId: 'launcher',
      free: true,
      desc: 'Загрузка с Modrinth, применение через Iris, группировка параметров и управление освещением поддерживаемых паков.'
    },

    // 9. Производительность
    {
      id: 'optimization',
      name: 'Optimization',
      category: 'Производительность',
      catId: 'performance',
      free: true,
      desc: 'Настраиваемое ограничение дальности, облаков, частиц, теней сущностей, смешивания биомов и других графических параметров. Отсечение скрытых сущностей. Модуль оптимизирует сам Minecraft.'
    },
    {
      id: 'fps-reduce',
      name: 'FPS Reduce',
      category: 'Производительность',
      catId: 'performance',
      free: true,
      desc: 'Уменьшение FPS и громкости при AFK, сворачивании или потере фокуса.'
    },
    {
      id: 'cache-calc',
      name: 'Кэширование расчётов',
      category: 'Производительность',
      catId: 'performance',
      free: true,
      desc: 'Ограничение количества эффектов, кэширование и повторное использование расчётов.'
    }
  ];

  // DOM Elements
  const container = document.getElementById('modules-catalog-container');
  const searchInput = document.getElementById('modules-search-input');
  const searchClear = document.getElementById('modules-search-clear');
  const categoriesNav = document.getElementById('modules-categories-nav');
  const countBadge = document.getElementById('modules-total-count');

  if (!container) return;

  let activeCategory = 'all';
  let searchQuery = '';

  if (countBadge) {
    countBadge.textContent = `${MODULES_DATA.length}`;
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
      const matchSearch = !q || m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q) || m.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
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

      const iconClass = module.free ? 'free-yes' : 'free-no';
      const iconSymbol = module.free ? '✓' : '✕';
      const editionText = module.free ? 'Free + Pro' : 'Только в Pro';
      const noticeText = module.free 
        ? '✓ Присутствует и в бесплатной, и в платной версии' 
        : '✕ Отсутствует в Free версии (доступно в платной подписке)';
      const noticeClass = module.free ? 'notice-check' : 'notice-cross';

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
