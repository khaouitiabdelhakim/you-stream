const {
    getStreamUrl,
    getBestAudio,
    getBestVideo,
    getAllAdaptiveFormats,
    getFormatInfoByItag,
} = require('./index');

const videoID = 'gWKQP3CNNH0'; // Replace with a valid video ID for testing

async function runTests() {

    console.log('Testing getBestAudio...');
    console.log(await getBestAudio(videoID));
}

runTests();
