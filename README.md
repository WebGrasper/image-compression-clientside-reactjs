# Image Compression in React.js

This project demonstrates how to compress an image in a React.js application using the `browser-image-compression` and `file-saver` libraries.

## Installation

First, clone this repository to your local machine. Then, navigate to the project directory and install the necessary dependencies with the following commands:

```bash
npm install
npm install browser-image-compression
npm install file-saver

Usage
To use this application, select an image file using the file input. The selected image will be automatically compressed and downloaded.

The compression options can be adjusted in the handleImageUpload function in App.js. The current options are set to use a web worker for the compression if available, perform a maximum of 10 iterations for compressing the image, and set the initial quality to 0.1.

```
