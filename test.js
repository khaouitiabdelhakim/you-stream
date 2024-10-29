const {
    getStreamUrl,
    getBestAudio,
    getBestVideo,
    getAllAdaptiveFormats,
    getFormatInfoByItag,
} = require('./index');

const videoID = 'gWKQP3CNNH0'; // Replace with a valid video ID for testing

async function runTests() {
    console.log('Testing getStreamUrl...');
    console.log(await getStreamUrl(videoID));

    console.log('Testing getBestAudio...');
    console.log(await getBestAudio(videoID));

    console.log('Testing getBestVideo...');
    console.log(await getBestVideo(videoID));

    console.log('Testing getAllAdaptiveFormats...');
    console.log(await getAllAdaptiveFormats(videoID));

    console.log('Testing getFormatInfoByItag with itag 140...');
    console.log(await getFormatInfoByItag(videoID, 140));
}

runTests();
