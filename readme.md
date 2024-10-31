# You Stream

![NPM](https://img.shields.io/npm/v/you-stream-js) ![License](https://img.shields.io/badge/license-MIT-green)

**You Stream** is a simple and efficient JavaScript library for fetching YouTube video streams. It allows you to retrieve audio and video formats, get the best quality streams, and manage adaptive formats with ease.

![pic](https://github.com/khaouitiabdelhakim/you-stream-js/blob/main/picture.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Methods](#api-methods)
- [Example](#example)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Fetch the best audio and video streams from YouTube videos.
- Retrieve all available adaptive formats.
- Get specific format information using its `itag`.
- Lightweight and easy to use.

## Installation

You can install **you-stream** via npm:

```bash
npm install you-stream-js
```

## Usage

Here's how to use the **you-stream** library to get the best audio and video streams from a YouTube video.

### Import the Library

```javascript
const { getBestAudio, getBestVideo, getAllAdaptiveFormats, getFormatInfoByItag } = require('you-stream-js');
```

### API Methods

- **`getBestAudio(videoID)`**
  - Fetches the best available audio stream for the specified video ID.
  - **Parameters:** `videoID` (string): The ID of the YouTube video.
  - **Returns:** An object containing the best audio stream URL and its `itag`.

- **`getBestVideo(videoID)`**
  - Fetches the best available video stream for the specified video ID.
  - **Parameters:** `videoID` (string): The ID of the YouTube video.
  - **Returns:** An object containing the best video stream URL and its `itag`.

- **`getAllAdaptiveFormats(videoID)`**
  - Retrieves all adaptive formats available for the specified video.
  - **Parameters:** `videoID` (string): The ID of the YouTube video.
  - **Returns:** An array of all adaptive formats.

- **`getFormatInfoByItag(videoID, itag)`**
  - Gets the format information based on the specified `itag`.
  - **Parameters:** 
    - `videoID` (string): The ID of the YouTube video.
    - `itag` (number): The `itag` of the desired format.
  - **Returns:** The format information or a message indicating that the format was not found.

## Example

Here’s an example demonstrating how to use the library:

```javascript
const { getBestAudio, getBestVideo, getAllAdaptiveFormats, getFormatInfoByItag } = require('you-stream-js');

const videoID = 'YOUR_VIDEO_ID_HERE'; // Replace with a valid YouTube video ID

async function example() {
    try {
        const bestAudio = await getBestAudio(videoID);
        console.log('Best Audio:', bestAudio);

        const bestVideo = await getBestVideo(videoID);
        console.log('Best Video:', bestVideo);

        const allFormats = await getAllAdaptiveFormats(videoID);
        console.log('All Adaptive Formats:', allFormats);

        const formatInfo = await getFormatInfoByItag(videoID, 140);
        console.log('Format Info for itag 140:', formatInfo);
    } catch (error) {
        console.error('Error:', error);
    }
}

example();
```

## Testing

To run the tests provided in `test.js`, you can execute the following command:

```bash
node test.js
```

Make sure to replace `YOUR_VIDEO_ID_HERE` with a valid YouTube video ID in the `test.js` file for testing.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. 

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


## Acknowledgments

- Inspired by [yt-dlp](https://github.com/yt-dlp/yt-dlp) for extracting YouTube streams.
- Thanks to [YouTube Data API](https://developers.google.com/youtube/v3) for providing a way to interact with YouTube data.

