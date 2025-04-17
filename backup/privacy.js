document.addEventListener('DOMContentLoaded', () => {
    // Get language from localStorage or browser settings
    const getPreferredLanguage = () => {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) return savedLang;

        const browserLang = navigator.language.split('-')[0];
        const supportedLanguages = ['en', 'zh', 'ja', 'ko'];
        return supportedLanguages.includes(browserLang) ? browserLang : 'en';
    };

    // Initialize language
    const initializeLanguage = () => {
        const currentLang = getPreferredLanguage();
        updateLanguage(currentLang);
        setupLanguageButtons();
    };

    // Update language display
    const updateLanguage = (lang) => {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update page title
        const titles = {
            en: 'Privacy Policy - Smart Travel Outfit Guide',
            zh: '隐私政策 - 智能旅行穿搭指南',
            ja: 'プライバシーポリシー - スマート旅行着こなしガイド',
            ko: '개인정보 처리방침 - 스마트 여행 의상 가이드'
        };
        document.title = titles[lang];
        
        // Show selected language section
        document.querySelectorAll('.language-section').forEach(section => {
            section.classList.remove('active');
            if (section.getAttribute('data-lang') === lang) {
                section.classList.add('active');
            }
        });
        
        // Update language selector
        document.querySelectorAll('.language-selector button').forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            }
        });

        // Save language preference
        localStorage.setItem('preferredLanguage', lang);

        // Update meta tags
        updateMetaTags(lang);
    };

    // Setup language buttons
    const setupLanguageButtons = () => {
        document.querySelectorAll('.language-selector button').forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                updateLanguage(lang);
            });
        });
    };

    // Update meta tags for SEO
    const updateMetaTags = (lang) => {
        const metaDescriptions = {
            en: 'Privacy Policy for Smart Travel Outfit Guide - Learn how we protect your data and privacy.',
            zh: '智能旅行着装指南隐私政策 - 了解我们如何保护您的数据和隐私。',
            ja: 'スマート旅行着こなしガイドのプライバシーポリシー - データとプライバシーの保護について。',
            ko: '스마트 여행 의상 가이드 개인정보 처리방침 - 데이터 및 개인정보 보호 방법 안내'
        };

        const metaKeywordsList = {
            en: 'privacy policy, data protection, travel outfit guide, user privacy, data security',
            zh: '隐私政策, 数据保护, 旅行着装指南, 用户隐私, 数据安全',
            ja: 'プライバシーポリシー, データ保護, 旅行着こなしガイド, ユーザープライバシー, データセキュリティ',
            ko: '개인정보 처리방침, 데이터 보호, 여행 의상 가이드, 사용자 개인정보, 데이터 보안'
        };

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = metaDescriptions[lang];

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = metaKeywordsList[lang];
    };

    // Initialize the page
    initializeLanguage();
}); 