'use strict';

// 性能监控
const performance = {
    timers: {},
    start: function(name) {
        this.timers[name] = window.performance.now();
        console.time(name);
    },
    end: function(name) {
        const duration = window.performance.now() - this.timers[name];
        console.timeEnd(name);
        return duration;
    }
};

// DOM 缓存
const DOM = {
    elements: {},
    get: function(id) {
        if (!this.elements[id]) {
            this.elements[id] = document.getElementById(id);
        }
        return this.elements[id];
    }
};

// 全局状态
const state = {
    language: localStorage.getItem('language') || 'zh',
    currentLocation: {
        name: '上海',
        latitude: 31.2304,
        longitude: 121.4737
    }
};

// 语言配置
const translations = {
    zh: {
        loading: '正在加载天气数据...',
        error: '获取天气数据失败，请重试',
        outfitTitle: '今日穿搭建议',
        precipitation: '降水概率'
    },
    en: {
        loading: 'Loading weather data...',
        error: 'Failed to fetch weather data, please try again',
        outfitTitle: 'Today\'s Outfit Suggestions',
        precipitation: 'Precipitation'
    }
};

// 天气数据处理
async function fetchWeatherData(location) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,precipitation_probability,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }
        );
        if (!response.ok) throw new Error('Weather data fetch failed');
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// UI更新函数
function updateUI() {
    try {
        // 更新语言显示
        const languageToggle = document.querySelector('.language-switch');
        if (languageToggle) {
            languageToggle.textContent = state.language === 'zh' ? 'English' : '中文';
        }
        
        // 更新天气信息
        updateWeather();
        
        // 更新页面中的所有可翻译文本
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[state.language][key]) {
                element.textContent = translations[state.language][key];
            }
        });
    } catch (error) {
        console.error('Error updating UI:', error);
    }
}

// 事件处理函数
function setupEventListeners() {
    // 语言切换
    const languageToggle = document.querySelector('.language-switch');
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            state.language = state.language === 'zh' ? 'en' : 'zh';
            localStorage.setItem('language', state.language);
            updateUI();
        });
    }
}

// 天气更新
async function updateWeather() {
    const weatherInfo = document.getElementById('weather-info');
    if (!weatherInfo) return;

    const data = await fetchWeatherData(state.currentLocation);
    if (!data) {
        weatherInfo.innerHTML = `<div class="error-message">${translations[state.language].error}</div>`;
        return;
    }

    // 获取当前小时的数据
    const currentHour = new Date().getHours();
    const currentTemp = data.hourly.temperature_2m[currentHour];
    const currentPrecip = data.hourly.precipitation_probability[currentHour];
    const maxTemp = data.daily.temperature_2m_max[0];
    const minTemp = data.daily.temperature_2m_min[0];

    const weatherContent = document.querySelector('.weather-content');
    if (weatherContent) {
        weatherContent.innerHTML = `
            <h2 data-translate="outfitTitle">${translations[state.language].outfitTitle}</h2>
            <div class="weather-details">
                <div class="temperature">
                    <span class="current-temp">${currentTemp.toFixed(1)}°</span>
                    <span class="temp-range">${minTemp.toFixed(1)}° ~ ${maxTemp.toFixed(1)}°</span>
                </div>
                <div class="precipitation">
                    <span data-translate="precipitation">${translations[state.language].precipitation}</span>
                    <span class="precip-value">${currentPrecip}%</span>
                </div>
            </div>
            <div class="outfit-suggestions">
                ${generateOutfitSuggestions({temperature: currentTemp, precipitation: currentPrecip}).map(item => 
                    `<div class="outfit-item">${item}</div>`
                ).join('')}
            </div>
        `;
    }
}

// 生成穿搭建议
function generateOutfitSuggestions(weather) {
    const suggestions = [];
    const temp = weather.temperature;
    const precip = weather.precipitation;

    if (temp < 0) {
        suggestions.push('厚羽绒服', '保暖内衣', '羊毛帽', '手套', '围巾', '保暖靴');
    } else if (temp < 10) {
        suggestions.push('羽绒服', '毛衣', '长裤', '帽子', '手套');
    } else if (temp < 20) {
        suggestions.push('夹克', '长袖衬衫', '长裤', '轻便外套');
    } else if (temp < 30) {
        suggestions.push('T恤', '短裤', '太阳帽', '太阳镜');
    } else {
        suggestions.push('轻薄衣物', '帽子', '防晒霜', '太阳镜');
    }

    if (precip > 70) {
        suggestions.push('雨伞', '防水外套');
    } else if (precip > 30) {
        suggestions.push('便携雨伞');
    }

    return suggestions;
}

// 初始化函数
async function init() {
    setupEventListeners();
    updateUI();
}

// 启动应用
document.addEventListener('DOMContentLoaded', init); 