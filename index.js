/*
 * Copyright: KHAOUITI ABDELHAKIM 2024
 * GitHub: khaouitiabdelhakim
 */

async function getInfo(videoId) {
    const apiKey = 'AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc';

    const headers = {
        'X-YouTube-Client-Name': '5',
        'X-YouTube-Client-Version': '19.09.3',
        Origin: 'https://www.youtube.com',
        'User-Agent': 'com.google.ios.youtube/19.09.3 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)',
        'content-type': 'application/json',
    };

    const b = {
        context: {
            client: {
                clientName: 'IOS',
                clientVersion: '19.09.3',
                deviceModel: 'iPhone14,3',
                userAgent: 'com.google.ios.youtube/19.09.3 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)',
                hl: 'en',
                timeZone: 'UTC',
                utcOffsetMinutes: 0,
            },
        },
        videoId,
        playbackContext: { contentPlaybackContext: { html5Preference: 'HTML5_PREF_WANTS' } },
        contentCheckOk: true,
        racyCheckOk: true,
    };

    return fetch(`https://www.youtube.com/youtubei/v1/player?key=${apiKey}&prettyPrint=false`, {
        method: 'POST',
        body: JSON.stringify(b),
        headers,
    }).then((r) => r.json());
}

async function getStreamUrl(videoID) {
    const info = await getInfo(videoID);
    const audio = info.streamingData.adaptiveFormats.find((f) => f.itag == 140);
    return { url: audio?.url };
}

async function getBestAudio(videoID) {
    const info = await getInfo(videoID);
    const audioFormats = info.streamingData.adaptiveFormats.filter((f) => f.mimeType.includes('audio'));
    const bestAudio = audioFormats.reduce((prev, current) => (prev.bitrate > current.bitrate ? prev : current), audioFormats[0]);
    return { url: bestAudio?.url, itag: bestAudio?.itag };
}

async function getBestVideo(videoID) {
    const info = await getInfo(videoID);
    const videoFormats = info.streamingData.adaptiveFormats.filter((f) => f.mimeType.includes('video'));
    const bestVideo = videoFormats.reduce((prev, current) => (prev.bitrate > current.bitrate ? prev : current), videoFormats[0]);
    return { url: bestVideo?.url, itag: bestVideo?.itag };
}

async function getAllAdaptiveFormats(videoID) {
    const info = await getInfo(videoID);
    return info.streamingData.adaptiveFormats || [];
}

async function getFormatInfoByItag(videoID, itag) {
    const info = await getInfo(videoID);
    const format = info.streamingData.adaptiveFormats.find((f) => f.itag == itag);
    return format || { message: 'Format not found' };
}

module.exports = {
    getStreamUrl,
    getBestAudio,
    getBestVideo,
    getAllAdaptiveFormats,
    getFormatInfoByItag,
};
