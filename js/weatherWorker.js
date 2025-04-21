// 天气数据处理Worker
self.onmessage = function(e) {
    const { weatherData } = e.data;
    
    // 处理天气数据
    const processedData = processWeatherData(weatherData);
    
    // 生成穿搭建议
    const outfitSuggestions = generateOutfitSuggestions(processedData);
    
    // 发送处理结果
    self.postMessage({
        weatherState: processedData,
        outfitSuggestions: outfitSuggestions
    });
};

// 处理天气数据
function processWeatherData(data) {
    const now = new Date();
    const hourlyIndex = data.hourly.time.findIndex(time => new Date(time) > now);
    
    return {
        current: {
            temperature: data.hourly.temperature_2m[hourlyIndex],
            precipitation: data.hourly.precipitation_probability[hourlyIndex],
            weatherCode: data.hourly.weathercode[hourlyIndex]
        },
        daily: {
            maxTemp: data.daily.temperature_2m_max[0],
            minTemp: data.daily.temperature_2m_min[0],
            precipitation: data.daily.precipitation_probability_max[0],
            weatherCode: data.daily.weathercode[0]
        }
    };
}

// 生成穿搭建议
function generateOutfitSuggestions(weatherState) {
    const { temperature, precipitation } = weatherState.current;
    const suggestions = [];
    
    // 根据温度添加建议
    if (temperature < 0) {
        suggestions.push(
            '厚羽绒服',
            '保暖内衣',
            '羊毛帽',
            '手套',
            '围巾',
            '保暖靴'
        );
    } else if (temperature < 10) {
        suggestions.push(
            '羽绒服',
            '毛衣',
            '长裤',
            '帽子',
            '手套'
        );
    } else if (temperature < 20) {
        suggestions.push(
            '夹克',
            '长袖衬衫',
            '长裤',
            '轻便外套'
        );
    } else if (temperature < 30) {
        suggestions.push(
            'T恤',
            '短裤',
            '太阳帽',
            '太阳镜'
        );
    } else {
        suggestions.push(
            '轻薄衣物',
            '帽子',
            '防晒霜',
            '太阳镜'
        );
    }
    
    // 根据降水概率添加建议
    if (precipitation > 70) {
        suggestions.push('雨伞', '防水外套');
    } else if (precipitation > 30) {
        suggestions.push('便携雨伞');
    }
    
    return suggestions;
} 