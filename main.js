// 语言设置
const translations = {
    en: {
        title: 'Smart Travel Outfit Guide',
        subtitle: 'AI-Powered Weather-Based Fashion Recommendations',
        countryLabel: 'Country',
        cityLabel: 'City',
        dateLabel: 'Travel Date',
        temperatureLabel: 'Temperature',
        recommendationTitle: 'Your Perfect Outfit',
        loading: 'Finding your perfect outfit...',
        error: 'Oops! Something went wrong. Please try again.',
        noData: 'No weather data available for this location',
        celsius: '°C',
        fahrenheit: '°F',
        searchPlaceholder: 'Search for a city...',
        unitSwitchLabel: 'Switch to Fahrenheit',
        languageSwitchLabel: 'Change Language',
        shareButton: 'Share outfit',
        feedbackButton: 'Give feedback',
        welcomeMessage: 'Plan your perfect travel wardrobe',
        helpTranslate: 'Help translate',
        searchSection: {
            title: 'Find Your Destination',
            subtitle: 'Enter your travel details below'
        },
        outfitSuggestions: {
            cold: {
                title: 'Cold Weather Outfit',
                description: 'Bundle up! Here\'s what you need:',
                items: [
                    'Insulated winter coat',
                    'Thermal base layer',
                    'Warm sweater',
                    'Winter boots',
                    'Gloves and scarf',
                    'Warm hat or beanie'
                ],
                tips: 'Layer your clothing for maximum warmth and comfort'
            },
            mild: {
                title: 'Mild Weather Outfit',
                description: 'Perfect for layering:',
                items: [
                    'Light jacket or cardigan',
                    'Long sleeve shirt',
                    'Comfortable pants',
                    'Sneakers or loafers',
                    'Light scarf (optional)'
                ],
                tips: 'Choose versatile pieces that can be layered as needed'
            },
            warm: {
                title: 'Warm Weather Outfit',
                description: 'Stay cool and stylish:',
                items: [
                    'Breathable t-shirt or blouse',
                    'Shorts or light pants',
                    'Comfortable sandals',
                    'Sun hat and sunglasses',
                    'Light cardigan for air-conditioned places'
                ],
                tips: 'Choose lightweight, breathable fabrics'
            }
        },
        exportPDF: "Export as PDF",
        newsletter: {
            title: "Stay Updated with Travel Fashion Tips",
            description: "Subscribe to receive personalized outfit recommendations and travel fashion tips directly in your inbox.",
            placeholder: "Enter your email address",
            submit: "Subscribe",
            privacy: "By subscribing, you agree to our <a href='/privacy'>Privacy Policy</a> and consent to receive marketing emails.",
            thankYou: "Thank you for subscribing! 🎉"
        },
        feedbackTitle: "Share Your Experience",
        feedbackDescription: "Help us improve by sharing your thoughts about our outfit recommendations",
        feedbackNameLabel: "Your Name",
        feedbackEmailLabel: "Email (optional)",
        feedbackRatingLabel: "Rating",
        feedbackMessageLabel: "Your Feedback",
        feedbackSubmit: "Submit Feedback",
        submitting: "Submitting...",
        feedbackSuccess: "Thank you for your feedback!",
        feedbackError: "Sorry, there was an error submitting your feedback. Please try again."
    },
    zh: {
        title: '智能旅行穿搭指南',
        subtitle: 'AI智能天气穿搭推荐',
        countryLabel: '国家',
        cityLabel: '城市',
        dateLabel: '出行日期',
        temperatureLabel: '温度',
        recommendationTitle: '完美穿搭推荐',
        loading: '正在为您挑选完美穿搭...',
        error: '抱歉出错了，请重试',
        noData: '暂无该地区天气数据',
        celsius: '°C',
        fahrenheit: '°F',
        searchPlaceholder: '搜索城市...',
        unitSwitchLabel: '切换到华氏度',
        languageSwitchLabel: '切换语言',
        shareButton: '分享穿搭',
        feedbackButton: '提供反馈',
        welcomeMessage: '规划您的完美旅行衣橱',
        helpTranslate: '帮助翻译',
        searchSection: {
            title: '选择目的地',
            subtitle: '请输入您的旅行信息'
        },
        outfitSuggestions: {
            cold: {
                title: '寒冷天气穿搭',
                description: '注意保暖，建议穿着：',
                items: [
                    '保暖羽绒服',
                    '保暖内衣',
                    '毛衣',
                    '保暖靴子',
                    '手套和围巾',
                    '保暖帽子'
                ],
                tips: '采用多层穿搭方式以获得最佳保暖效果'
            },
            mild: {
                title: '温和天气穿搭',
                description: '适合叠穿的天气：',
                items: [
                    '轻薄外套或开衫',
                    '长袖衬衫',
                    '舒适长裤',
                    '运动鞋或乐福鞋',
                    '轻薄围巾（可选）'
                ],
                tips: '选择可以随时增减的百搭单品'
            },
            warm: {
                title: '温暖天气穿搭',
                description: '清爽时尚搭配：',
                items: [
                    '透气T恤或衬衫',
                    '短裤或轻薄长裤',
                    '舒适凉鞋',
                    '遮阳帽和太阳镜',
                    '薄外套（防空调）'
                ],
                tips: '选择轻薄透气的面料'
            }
        },
        exportPDF: "导出为PDF",
        newsletter: {
            title: "获取旅行穿搭建议",
            description: "订阅我们的通讯，获取个性化的穿搭建议和旅行时尚贴士。",
            placeholder: "请输入您的邮箱地址",
            submit: "订阅",
            privacy: "订阅即表示您同意我们的<a href='/privacy'>隐私政策</a>并同意接收营销邮件。",
            thankYou: "感谢您的订阅！🎉"
        },
        feedbackTitle: "分享您的体验",
        feedbackDescription: "帮助我们改进，分享您对穿搭建议的看法",
        feedbackNameLabel: "您的姓名",
        feedbackEmailLabel: "电子邮箱（选填）",
        feedbackRatingLabel: "评分",
        feedbackMessageLabel: "您的反馈",
        feedbackSubmit: "提交反馈",
        submitting: "提交中...",
        feedbackSuccess: "感谢您的反馈！",
        feedbackError: "抱歉，提交反馈时出现错误。请重试。"
    },
    ja: {
        title: 'スマート旅行コーディネートガイド',
        subtitle: 'AI搭載天気ベースのファッション提案',
        countryLabel: '国',
        cityLabel: '都市',
        dateLabel: '旅行日',
        temperatureLabel: '気温',
        recommendationTitle: 'パーフェクトコーディネート',
        loading: 'あなたにぴったりの服装を探しています...',
        error: 'エラーが発生しました。もう一度お試しください。',
        noData: 'この地域の天気データはありません',
        celsius: '°C',
        fahrenheit: '°F',
        searchPlaceholder: '都市を検索...',
        unitSwitchLabel: '華氏に切り替え',
        languageSwitchLabel: '言語を変更',
        shareButton: 'シェア',
        feedbackButton: 'フィードバック',
        welcomeMessage: '最適な旅行ワードローブを計画しましょう',
        helpTranslate: '翻訳を手伝う',
        searchSection: {
            title: '目的地を探す',
            subtitle: '旅行の詳細を入力してください'
        },
        outfitSuggestions: {
            cold: {
                title: '寒い天気の服装',
                description: '防寒対策をしっかりと：',
                items: [
                    '防寒ジャケット',
                    'サーマルインナー',
                    'セーター',
                    'ウィンターブーツ',
                    '手袋とマフラー',
                    'ニット帽'
                ],
                tips: '重ね着で最適な防寒効果を得られます'
            },
            mild: {
                title: '穏やかな天気の服装',
                description: 'レイヤードスタイルに最適：',
                items: [
                    '軽いジャケットやカーディガン',
                    '長袖シャツ',
                    '快適なパンツ',
                    'スニーカーやローファー',
                    '薄手のスカーフ（オプション）'
                ],
                tips: '着脱可能な万能アイテムを選びましょう'
            },
            warm: {
                title: '暖かい天気の服装',
                description: '涼しく、スタイリッシュに：',
                items: [
                    '通気性の良いTシャツやブラウス',
                    'ショートパンツや軽いパンツ',
                    '快適なサンダル',
                    '日よけ帽子とサングラス',
                    '薄手のカーディガン（冷房対策）'
                ],
                tips: '軽くて通気性の良い素材を選びましょう'
            }
        },
        exportPDF: "PDFとして出力",
        newsletter: {
            title: "旅行ファッションの最新情報を受け取る",
            description: "パーソナライズされたコーディネート提案と旅行ファッションのヒントをメールで受け取りましょう。",
            placeholder: "メールアドレスを入力",
            submit: "購読する",
            privacy: "購読することで、<a href='/privacy'>プライバシーポリシー</a>に同意し、マーケティングメールの受信に同意したものとみなされます。",
            thankYou: "ご購読ありがとうございます！🎉"
        },
        feedbackTitle: "体験を共有する",
        feedbackDescription: "着こなしの提案についてのご意見をお聞かせください",
        feedbackNameLabel: "お名前",
        feedbackEmailLabel: "メールアドレス（任意）",
        feedbackRatingLabel: "評価",
        feedbackMessageLabel: "フィードバック",
        feedbackSubmit: "送信",
        submitting: "送信中...",
        feedbackSuccess: "フィードバックありがとうございます！",
        feedbackError: "申し訳ありません。送信時にエラーが発生しました。もう一度お試しください。"
    },
    ko: {
        title: '스마트 여행 패션 가이드',
        subtitle: 'AI 기반 날씨 맞춤 패션 추천',
        countryLabel: '국가',
        cityLabel: '도시',
        dateLabel: '여행 날짜',
        temperatureLabel: '기온',
        recommendationTitle: '맞춤 코디 추천',
        loading: '당신을 위한 완벽한 코디를 찾고 있습니다...',
        error: '오류가 발생했습니다. 다시 시도해 주세요.',
        noData: '해당 지역의 날씨 데이터가 없습니다',
        celsius: '°C',
        fahrenheit: '°F',
        searchPlaceholder: '도시 검색...',
        unitSwitchLabel: '화씨로 전환',
        languageSwitchLabel: '언어 변경',
        shareButton: '공유하기',
        feedbackButton: '피드백',
        welcomeMessage: '완벽한 여행 옷장을 계획하세요',
        helpTranslate: '도움말 번역',
        searchSection: {
            title: '목적지 찾기',
            subtitle: '여행 정보를 입력해 주세요'
        },
        outfitSuggestions: {
            cold: {
                title: '추운 날씨 코디',
                description: '따뜻하게 입으세요:',
                items: [
                    '방한 재킷',
                    '발열 내의',
                    '스웨터',
                    '방한 부츠',
                    '장갑과 목도리',
                    '비니 모자'
                ],
                tips: '레이어드 착용으로 최적의 보온효과를 얻으세요'
            },
            mild: {
                title: '선선한 날씨 코디',
                description: '레이어드하기 좋은 날씨:',
                items: [
                    '가벼운 재킷이나 가디건',
                    '긴팔 셔츠',
                    '편안한 바지',
                    '운동화나 로퍼',
                    '얇은 스카프 (선택사항)'
                ],
                tips: '필요에 따라 입고 벗기 좋은 아이템을 선택하세요'
            },
            warm: {
                title: '따뜻한 날씨 코디',
                description: '시원하고 스타일리시하게:',
                items: [
                    '통기성 좋은 티셔츠나 블라우스',
                    '반바지나 얇은 바지',
                    '편안한 샌들',
                    '햇빛 가리개와 선글라스',
                    '얇은 가디건 (실내용)'
                ],
                tips: '가볍고 통기성이 좋은 소재를 선택하세요'
            }
        },
        exportPDF: "PDF로 내보내기",
        newsletter: {
            title: "여행 패션 팁 업데이트 받기",
            description: "개인화된 코디 추천과 여행 패션 팁을 이메일로 받아보세요.",
            placeholder: "이메일 주소를 입력하세요",
            submit: "구독하기",
            privacy: "구독하시면 <a href='/privacy'>개인정보 처리방침</a>에 동의하고 마케팅 이메일 수신에 동의한 것으로 간주됩니다.",
            thankYou: "구독해 주셔서 감사합니다! 🎉"
        },
        feedbackTitle: "경험 공유하기",
        feedbackDescription: "의상 추천에 대한 의견을 공유하여 개선에 도움을 주세요",
        feedbackNameLabel: "이름",
        feedbackEmailLabel: "이메일 (선택사항)",
        feedbackRatingLabel: "평가",
        feedbackMessageLabel: "피드백",
        feedbackSubmit: "피드백 제출",
        submitting: "제출 중...",
        feedbackSuccess: "피드백을 보내주셔서 감사합니다!",
        feedbackError: "죄송합니다. 피드백 제출 중 오류가 발생했습니다. 다시 시도해 주세요."
    },
    de: {
        title: 'Intelligenter Reise-Outfit-Guide',
        subtitle: 'KI-gestützte wetterbasierte Modeempfehlungen',
        countryLabel: 'Land',
        cityLabel: 'Stadt',
        dateLabel: 'Reisedatum',
        temperatureLabel: 'Temperatur',
        recommendationTitle: 'Ihr perfektes Outfit',
        loading: 'Suche nach Ihrem perfekten Outfit...',
        error: 'Ups! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
        noData: 'Keine Wetterdaten für diesen Ort verfügbar',
        celsius: '°C',
        fahrenheit: '°F',
        searchPlaceholder: 'Stadt suchen...',
        unitSwitchLabel: 'Zu Fahrenheit wechseln',
        languageSwitchLabel: 'Sprache ändern',
        shareButton: 'Outfit teilen',
        feedbackButton: 'Feedback geben',
        welcomeMessage: 'Planen Sie Ihre perfekte Reisegarderobe',
        helpTranslate: 'Hilfe übersetzen',
        searchSection: {
            title: 'Finden Sie Ihr Reiseziel',
            subtitle: 'Geben Sie Ihre Reisedetails unten ein'
        },
        outfitSuggestions: {
            cold: {
                title: 'Outfit für kaltes Wetter',
                description: 'Warm anziehen! Das brauchen Sie:',
                items: [
                    'Warme Winterjacke',
                    'Thermounterwäsche',
                    'Warmer Pullover',
                    'Winterstiefel',
                    'Handschuhe und Schal',
                    'Warme Mütze'
                ],
                tips: 'Schichten Sie Ihre Kleidung für maximale Wärme'
            },
            mild: {
                title: 'Outfit für mildes Wetter',
                description: 'Perfekt zum Schichten:',
                items: [
                    'Leichte Jacke oder Strickjacke',
                    'Langarmshirt',
                    'Bequeme Hose',
                    'Sneaker oder Slipper',
                    'Leichter Schal (optional)'
                ],
                tips: 'Wählen Sie vielseitige Kleidungsstücke zum Schichten'
            },
            warm: {
                title: 'Outfit für warmes Wetter',
                description: 'Bleiben Sie kühl und stylish:',
                items: [
                    'Atmungsaktives T-Shirt oder Bluse',
                    'Shorts oder leichte Hose',
                    'Bequeme Sandalen',
                    'Sonnenhut und Sonnenbrille',
                    'Leichte Strickjacke für klimatisierte Räume'
                ],
                tips: 'Wählen Sie leichte, atmungsaktive Stoffe'
            }
        },
        exportPDF: "Export as PDF"
    },
    fr: {
        title: 'Guide Intelligent de Tenues de Voyage',
        subtitle: 'Recommandations de mode basées sur la météo par IA',
        countryLabel: 'Pays',
        cityLabel: 'Ville',
        dateLabel: 'Date de voyage',
        temperatureLabel: 'Température',
        recommendationTitle: 'Votre tenue parfaite',
        loading: 'Recherche de votre tenue parfaite...',
        error: 'Oups ! Quelque chose s\'est mal passé. Veuillez réessayer.',
        noData: 'Pas de données météo disponibles pour cet endroit',
        celsius: '°C',
        fahrenheit: '°F',
        searchPlaceholder: 'Rechercher une ville...',
        unitSwitchLabel: 'Passer à Fahrenheit',
        languageSwitchLabel: 'Changer de langue',
        shareButton: 'Partager la tenue',
        feedbackButton: 'Donner un avis',
        welcomeMessage: 'Planifiez votre garde-robe de voyage parfaite',
        helpTranslate: 'Aider à traduire',
        searchSection: {
            title: 'Trouvez votre destination',
            subtitle: 'Entrez vos détails de voyage ci-dessous'
        },
        outfitSuggestions: {
            cold: {
                title: 'Tenue pour temps froid',
                description: 'Couvrez-vous bien ! Voici ce qu\'il vous faut :',
                items: [
                    'Manteau d\'hiver isolé',
                    'Sous-vêtements thermiques',
                    'Pull chaud',
                    'Bottes d\'hiver',
                    'Gants et écharpe',
                    'Bonnet chaud'
                ],
                tips: 'Superposez vos vêtements pour un maximum de chaleur'
            },
            mild: {
                title: 'Tenue pour temps doux',
                description: 'Parfait pour les superpositions :',
                items: [
                    'Veste légère ou cardigan',
                    'T-shirt à manches longues',
                    'Pantalon confortable',
                    'Baskets ou mocassins',
                    'Écharpe légère (optionnel)'
                ],
                tips: 'Choisissez des pièces polyvalentes pour les superpositions'
            },
            warm: {
                title: 'Tenue pour temps chaud',
                description: 'Restez frais et élégant :',
                items: [
                    'T-shirt ou chemisier respirant',
                    'Short ou pantalon léger',
                    'Sandales confortables',
                    'Chapeau de soleil et lunettes',
                    'Cardigan léger pour les endroits climatisés'
                ],
                tips: 'Optez pour des tissus légers et respirants'
            }
        },
        exportPDF: "Export as PDF"
    }
};

// 语言配置
const languageConfig = {
    en: {
        code: 'en',
        name: 'English',
        native: 'English',
        flag: '🇺🇸'
    },
    es: {
        code: 'es',
        name: 'Spanish',
        native: 'Español',
        flag: '🇪🇸'
    },
    ja: {
        code: 'ja',
        name: 'Japanese',
        native: '日本語',
        flag: '🇯🇵'
    }
};

// 初始化时的语言设置
let currentLanguage = 'zh';
let currentUnit = 'celsius';

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置body为可见
    document.body.style.visibility = 'visible';
    
    initializeApp();
});

// 创建必需的DOM元素
function createRequiredElements() {
    // 确保body存在
    if (!document.body) {
        document.documentElement.appendChild(document.createElement('body'));
    }

    // 创建并获取container
    let container = document.querySelector('.container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'container';
        document.body.appendChild(container);
    }

    // 创建基本结构
    const structure = `
        <div class="header">
            <h1 id="app-title" class="app-title"></h1>
            <h2 id="app-subtitle" class="app-subtitle"></h2>
            <p id="app-instruction" class="app-instruction"></p>
        </div>
        <div class="controls">
            <div id="language-switch" class="language-switch"></div>
            <div id="unit-switch" class="unit-switch"></div>
        </div>
        <div id="search-section" class="search-section">
            <div id="country-select-container" class="select-container">
                <label for="countrySelect" class="select-label">
                    <span class="nav-text"></span>
                </label>
                <select id="countrySelect" class="select-input"></select>
            </div>
            <div id="city-select-container" class="select-container">
                <label for="citySelect" class="select-label">
                    <span class="nav-text"></span>
                </label>
                <select id="citySelect" class="select-input"></select>
            </div>
            <div id="date-select-container" class="select-container">
                <label for="dateSelect" class="select-label">
                    <span class="nav-text"></span>
                </label>
                <input type="date" id="dateSelect" class="select-input">
            </div>
        </div>
        <div id="weather-display" class="weather-display"></div>
        <div id="outfit-recommendations" class="outfit-recommendations"></div>
        <div id="loading-indicator" class="loading-indicator" style="display: none;">
            <div class="spinner"></div>
        </div>
        <footer class="footer">
            <a href="/privacy.html">Privacy Policy</a>
        </footer>
    `;

    // 设置container的内容
    container.innerHTML = structure;

    // 添加banner图片
    const header = container.querySelector('.header');
    if (header) {
        const picture = document.createElement('picture');
        const source = document.createElement('source');
        source.srcset = 'assets/images/banner.webp';
        source.type = 'image/webp';
        
        const img = document.createElement('img');
        img.src = 'assets/images/banner.jpg';
        img.alt = 'Travel outfit recommendations banner';
        img.className = 'header-banner';
        img.width = '1200';
        img.height = '400';
        
        picture.appendChild(source);
        picture.appendChild(img);
        header.insertBefore(picture, header.firstChild);
    }

    // 创建语言切换器
    const languageSwitch = document.getElementById('language-switch');
    if (languageSwitch) {
        const languages = [
            { code: 'en', name: 'English' },
            { code: 'zh', name: '简体中文' },
            { code: 'zh-TW', name: '繁體中文' },
            { code: 'ja', name: '日本語' },
            { code: 'ko', name: '한국어' },
            { code: 'de', name: 'Deutsch' },
            { code: 'fr', name: 'Français' },
            { code: 'it', name: 'Italiano' },
            { code: 'es', name: 'Español' },
            { code: 'pt', name: 'Português' },
            { code: 'hi', name: 'हिंदी' }
        ];

        const languageOptions = languages.map(lang => 
            `<li class="language-option" data-lang="${lang.code}">${lang.name}</li>`
        ).join('');

        languageSwitch.innerHTML = `
            <button id="language-btn" class="switch-btn">
                <span id="current-lang">简体中文</span>
                <span class="arrow">▼</span>
            </button>
            <ul id="language-list" class="switch-list">
                ${languageOptions}
            </ul>
        `;
    }

    // 创建温度单位切换器
    const unitSwitch = document.getElementById('unit-switch');
    if (unitSwitch) {
        unitSwitch.innerHTML = `
            <button id="unit-btn" class="switch-btn">
                <span id="current-unit">°C</span>
                <span class="arrow">▼</span>
            </button>
            <ul id="unit-list" class="switch-list">
                <li class="unit-option" data-unit="C">°C</li>
                <li class="unit-option" data-unit="F">°F</li>
            </ul>
        `;
    }
}

function initializeApp() {
    try {
        // 1. 创建基本DOM结构
        createRequiredElements();
        
        // 2. 初始化语言设置
        const savedLang = localStorage.getItem('userLang') || navigator.language.split('-')[0] || 'en';
        currentLanguage = translations[savedLang] ? savedLang : 'en';
        document.documentElement.lang = currentLanguage;
        
        // 3. 初始化界面
        updateInterface();
        
        // 4. 设置事件监听器
        setupEventHandlers();
        
    } catch (error) {
        console.error('Error in initializeApp:', error);
        showError('初始化失败，请刷新页面重试');
    }
}

function updateInterface() {
    try {
        // 更新标题
        document.title = translations[currentLanguage].title;
        
        // 更新页面文本
        const appTitle = document.getElementById('app-title');
        const appSubtitle = document.getElementById('app-subtitle');
        
        if (appTitle) appTitle.textContent = translations[currentLanguage].title;
        if (appSubtitle) appSubtitle.textContent = translations[currentLanguage].subtitle;
        
        // 初始化选择器
        setupDatePicker();
        loadCountries();
        
        // 初始化语言和单位切换器
        setupLanguageSwitcher();
        setupUnitSwitcher();
        
    } catch (error) {
        console.error('Error in updateInterface:', error);
        showError('更新界面失败');
    }
}

function setupEventHandlers() {
    try {
        // 语言切换器事件
        const languageBtn = document.getElementById('language-btn');
        const languageList = document.getElementById('language-list');
        
        if (languageBtn && languageList) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageList.classList.toggle('show');
            });
            
            languageList.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.dataset.lang;
                    if (translations[lang]) {
                        setLanguage(lang);
                        languageList.classList.remove('show');
                    }
                });
            });
        }
        
        // 温度单位切换器事件
        const unitBtn = document.getElementById('unit-btn');
        const unitList = document.getElementById('unit-list');
        
        if (unitBtn && unitList) {
            unitBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                unitList.classList.toggle('show');
            });
            
            unitList.querySelectorAll('.unit-option').forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const unit = option.dataset.unit;
                    setTemperatureUnit(unit);
                    unitList.classList.remove('show');
                });
            });
        }
        
        // 选择器事件
        const countrySelect = document.getElementById('countrySelect');
        const citySelect = document.getElementById('citySelect');
        const dateSelect = document.getElementById('dateSelect');
        
        if (countrySelect) countrySelect.addEventListener('change', handleCountryChange);
        if (citySelect) citySelect.addEventListener('change', handleCityChange);
        if (dateSelect) dateSelect.addEventListener('change', handleDateChange);
        
        // 点击外部关闭下拉列表
        document.addEventListener('click', () => {
            document.querySelectorAll('.switch-list').forEach(list => {
                if (list) list.classList.remove('show');
            });
        });
        
    } catch (error) {
        console.error('Error in setupEventHandlers:', error);
        showError('设置事件处理失败');
    }
}

// 设置语言
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Translation not available for ${lang}, falling back to English`);
        lang = 'en';
    }
    
    // 保存语言选择
    localStorage.setItem('userLang', lang);
    currentLanguage = lang;
    
    // 更新文档语言
    document.documentElement.lang = lang;
    
    // 更新页面标题
    document.title = translations[lang].title;
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 更新国家和城市列表
    loadCountries();
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect && countrySelect.value) {
        loadCities(countrySelect.value);
    }
    
    // 更新天气显示
    updateWeatherDisplay();
}

// 获取嵌套的翻译内容
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => {
        return prev ? prev[curr] : null;
    }, obj);
}

// 设置温度单位
function setTemperatureUnit(unit) {
    currentUnit = unit;
    document.getElementById('current-unit').textContent = `°${unit}`;
    updateWeatherDisplay();
}

// 处理国家变化
function handleCountryChange(event) {
    const countryCode = event.target.value;
    loadCities(countryCode);
}

// 处理城市变化
function handleCityChange() {
    updateWeatherDisplay();
}

// 处理日期变化
function handleDateChange() {
    updateWeatherDisplay();
}

// 设置日期选择器
function setupDatePicker() {
    const dateSelect = document.getElementById('dateSelect');
    if (dateSelect) {
        const today = new Date();
        const maxDate = new Date();
        maxDate.setDate(today.getDate() + 14);

        dateSelect.min = today.toISOString().split('T')[0];
        dateSelect.max = maxDate.toISOString().split('T')[0];
        dateSelect.value = today.toISOString().split('T')[0];
    }
}

// 加载国家列表
function loadCountries() {
    const countrySelect = document.getElementById('countrySelect');
    if (!countrySelect) return;

    // 清空现有选项
    countrySelect.innerHTML = `<option value="">${translations[currentLanguage].countryLabel}</option>`;

    // 根据当前语言设置国家名称
    const countries = {
        CN: { zh: '中国', en: 'China', ja: '中国', ko: '중국' },
        US: { zh: '美国', en: 'USA', ja: 'アメリカ', ko: '미국' },
        JP: { zh: '日本', en: 'Japan', ja: '日本', ko: '일본' },
        GB: { zh: '英国', en: 'UK', ja: 'イギリス', ko: '영국' }
    };

    Object.entries(countries).forEach(([code, names]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = names[currentLanguage] || names.en;
        countrySelect.appendChild(option);
    });
}

// 加载城市列表
function loadCities(countryCode) {
    const citySelect = document.getElementById('citySelect');
    if (!citySelect) return;

    citySelect.innerHTML = `<option value="">${translations[currentLanguage].cityLabel}</option>`;

    if (!countryCode) return;

    // 多语言城市数据
    const cities = {
        CN: [
            { code: 'BJ', names: { zh: '北京', en: 'Beijing', ja: '北京', ko: '베이징' } },
            { code: 'SH', names: { zh: '上海', en: 'Shanghai', ja: '上海', ko: '상하이' } },
            { code: 'GZ', names: { zh: '广州', en: 'Guangzhou', ja: '広州', ko: '광저우' } }
        ],
        US: [
            { code: 'NY', names: { zh: '纽约', en: 'New York', ja: 'ニューヨーク', ko: '뉴욕' } },
            { code: 'LA', names: { zh: '洛杉矶', en: 'Los Angeles', ja: 'ロサンゼルス', ko: '로스앤젤레스' } },
            { code: 'CH', names: { zh: '芝加哥', en: 'Chicago', ja: 'シカゴ', ko: '시카고' } }
        ],
        JP: [
            { code: 'TK', names: { zh: '东京', en: 'Tokyo', ja: '東京', ko: '도쿄' } },
            { code: 'OS', names: { zh: '大阪', en: 'Osaka', ja: '大阪', ko: '오사카' } },
            { code: 'KT', names: { zh: '京都', en: 'Kyoto', ja: '京都', ko: '교토' } }
        ],
        GB: [
            { code: 'LD', names: { zh: '伦敦', en: 'London', ja: 'ロンドン', ko: '런던' } },
            { code: 'MC', names: { zh: '曼彻斯特', en: 'Manchester', ja: 'マンチェスター', ko: '맨체스터' } },
            { code: 'LV', names: { zh: '利物浦', en: 'Liverpool', ja: 'リバプール', ko: '리버풀' } }
        ]
    };

    const citiesForCountry = cities[countryCode] || [];
    citiesForCountry.forEach(city => {
        const option = document.createElement('option');
        option.value = city.code;
        option.textContent = city.names[currentLanguage] || city.names.en;
        citySelect.appendChild(option);
    });
}

// SEO相关函数
function updateMetaTags(destination, weather) {
    try {
        const descriptions = {
            default: 'Smart travel outfit recommendations based on weather conditions',
            dynamic: `Smart packing list for ${destination} with ${weather} weather`
        };

        // 更新meta标签
        const metaTags = {
            'description': descriptions.dynamic,
            'og:description': descriptions.dynamic,
            'twitter:description': descriptions.dynamic,
            'og:title': document.title
        };

        for (const [key, content] of Object.entries(metaTags)) {
            // 处理不同类型的meta标签
            const selector = key.startsWith('og:') 
                ? `meta[property="${key}"]` 
                : `meta[name="${key}"]`;
            
            const metaTag = document.querySelector(selector);
            if (metaTag) {
                metaTag.setAttribute('content', content);
            } else if (key === 'description') {
                // 如果description标签不存在，创建一个
                const newMeta = document.createElement('meta');
                newMeta.setAttribute('name', 'description');
                newMeta.setAttribute('content', content);
                document.head.appendChild(newMeta);
            }
        }
    } catch (error) {
        console.error('Error updating meta tags:', error);
    }
}

// 更新图片alt文本
function updateImageAltText(destination, category) {
    try {
        document.querySelectorAll('.outfit-image').forEach(img => {
            const itemName = img.src.split('/').pop().split('.')[0]
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
            img.alt = `${itemName} for ${destination}`;
        });
    } catch (error) {
        console.error('Error updating image alt text:', error);
    }
}

// 修改updateWeatherDisplay函数
function updateWeatherDisplay() {
    const countrySelect = document.getElementById('countrySelect');
    const citySelect = document.getElementById('citySelect');
    const dateSelect = document.getElementById('dateSelect');
    const weatherDisplay = document.getElementById('weather-display');

    if (!countrySelect?.value || !citySelect?.value || !dateSelect?.value || !weatherDisplay) {
        return;
    }

    try {
        showLoading();

        // 获取目的地信息
        const cityName = citySelect.options[citySelect.selectedIndex].text;
        const countryName = countrySelect.options[countrySelect.selectedIndex].text;
        const destination = `${cityName}, ${countryName}`;

        setTimeout(() => {
            try {
                const weatherData = {
                    temperature: 25,
                    condition: translations[currentLanguage]?.condition || '晴天',
                    humidity: 60,
                    windSpeed: 3.5
                };

                // 更新SEO相关内容
                updateMetaTags(destination, weatherData.condition);
                
                // 显示天气和穿搭建议
                displayWeather(weatherData);
                updateOutfitRecommendation(weatherData);
                
                // 更新图片alt文本
                const category = getWeatherCategory(weatherData.temperature);
                updateImageAltText(destination, category);
                
            } catch (error) {
                console.error('Error updating display:', error);
                showError(translations[currentLanguage]?.error || 'Error updating display');
            } finally {
                hideLoading();
            }
        }, 1000);
    } catch (error) {
        console.error('Error in updateWeatherDisplay:', error);
        showError(translations[currentLanguage]?.error || 'Error updating display');
        hideLoading();
    }
}

// 获取天气类别
function getWeatherCategory(temperature) {
    if (temperature < 10) return 'cold';
    if (temperature < 20) return 'mild';
    return 'warm';
}

// 修改updateOutfitRecommendation函数
function updateOutfitRecommendation(weatherData) {
    const recommendationContainer = document.getElementById('outfit-recommendations');
    if (!recommendationContainer) return;

    const temperature = weatherData.main.temp;
    const weatherCondition = weatherData.weather[0].main.toLowerCase();
    const currentLang = getCurrentLanguage();

    let recommendation = '';
    let outfitItems = [];

    // 根据温度和天气状况选择穿搭建议
    if (temperature < 10) {
        recommendation = translations[currentLang].outfitSuggestions.cold;
        outfitItems = translations[currentLang].outfitItems.cold;
    } else if (temperature < 20) {
        recommendation = translations[currentLang].outfitSuggestions.mild;
        outfitItems = translations[currentLang].outfitItems.mild;
    } else {
        recommendation = translations[currentLang].outfitSuggestions.warm;
        outfitItems = translations[currentLang].outfitItems.warm;
    }

    // 创建导出PDF按钮
    const exportButton = `
        <button class="export-pdf-btn" onclick="window.print()" aria-label="${translations[currentLang].exportPDF}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            ${translations[currentLang].exportPDF}
        </button>
    `;

    // 创建订阅组件
    const newsletterSection = `
        <div class="newsletter-section">
            <h3 class="newsletter-title">${translations[currentLang].newsletter.title}</h3>
            <p class="newsletter-description">${translations[currentLang].newsletter.description}</p>
            <form class="newsletter-form" action="https://your-mailchimp-form-url.list-manage.com/subscribe/post" method="POST" target="_blank" novalidate>
                <input type="email" name="EMAIL" class="newsletter-input" placeholder="${translations[currentLang].newsletter.placeholder}" required>
                <button type="submit" class="newsletter-submit">${translations[currentLang].newsletter.submit}</button>
                <div class="newsletter-privacy">
                    ${translations[currentLang].newsletter.privacy}
                </div>
            </form>
        </div>
    `;

    // 生成穿搭建议HTML
    const html = `
        <div class="outfit-recommendation">
            ${exportButton}
            <h3 class="recommendation-title">${recommendation.title}</h3>
            <p class="recommendation-description">${recommendation.description}</p>
            <ul class="outfit-items">
                ${outfitItems.map(item => `
                    <li class="outfit-item">
                        <picture>
                            <source srcset="assets/images/${item.image}.webp" type="image/webp">
                            <img src="assets/images/${item.image}.jpg" 
                                 alt="${item.name}" 
                                 class="outfit-image"
                                 loading="lazy"
                                 width="140"
                                 height="187">
                        </picture>
                        <span>${item.name}</span>
                    </li>
                `).join('')}
            </ul>
            <p class="outfit-tips">${recommendation.tips}</p>
        </div>
        ${newsletterSection}
    `;

    recommendationContainer.innerHTML = html;

    // 添加表单提交处理
    const form = recommendationContainer.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', handleNewsletterSubmit);
    }
}

// 处理订阅表单提交
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // 这里可以添加邮箱验证逻辑
    
    // 显示感谢消息
    showToast(translations[getCurrentLanguage()].newsletter.thankYou);
    
    // 重置表单
    form.reset();
}

// 显示Toast消息
function showToast(message) {
    // 移除现有的toast
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 创建新的toast
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // 显示toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // 3秒后隐藏toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// 显示加载指示器
function showLoading() {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'flex';
    }
}

// 隐藏加载指示器
function hideLoading() {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
}

// 显示错误信息
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(errorDiv, container.firstChild);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

// 初始化移动端支持
if ('ontouchstart' in window) {
    setupTouchEvents();
}

// 设置触摸事件
function setupTouchEvents() {
    const container = document.querySelector('.recommendation-container');
    if (!container) return;

    let startX;
    let scrollLeft;

    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e) => {
        if (!startX) return;
        
        const x = e.touches[0].clientX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('touchend', () => {
        startX = null;
    });
}

// 处理反馈表单提交
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('feedbackName').value,
                email: document.getElementById('feedbackEmail').value,
                rating: document.querySelector('input[name="rating"]:checked')?.value,
                message: document.getElementById('feedbackMessage').value,
                language: currentLang // 使用当前语言设置
            };

            try {
                // 显示加载状态
                const submitButton = feedbackForm.querySelector('.feedback-submit');
                const originalText = submitButton.textContent;
                submitButton.textContent = translations[currentLang].submitting;
                submitButton.disabled = true;

                // 这里可以添加实际的表单提交逻辑
                // 例如发送到服务器或保存到本地存储
                console.log('Feedback submitted:', formData);

                // 模拟提交延迟
                await new Promise(resolve => setTimeout(resolve, 1000));

                // 显示成功消息
                alert(translations[currentLang].feedbackSuccess);

                // 重置表单
                feedbackForm.reset();

            } catch (error) {
                console.error('Error submitting feedback:', error);
                alert(translations[currentLang].feedbackError);
            } finally {
                // 恢复按钮状态
                const submitButton = feedbackForm.querySelector('.feedback-submit');
                submitButton.textContent = translations[currentLang].feedbackSubmit;
                submitButton.disabled = false;
            }
        });
    }
});
