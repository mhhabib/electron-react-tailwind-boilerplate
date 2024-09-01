# Electron Image Resizer

## Overview

Electron Image Resizer is a desktop application built with Electron, React, and Node.js that allows users to upload, resize, and save images to their local filesystem. The app provides a simple and intuitive interface for resizing images and includes progress indicators for resizing and saving actions to enhance user experience.

## Features

- **Upload Images**: Users can upload images directly from their computer.
- **Resize Images**: The application allows users to resize images to custom dimensions.
- **Save Resized Images**: Resized images can be saved to the user's computer.
- **Progress Indicators**: The app includes progress indicators for both resizing and saving actions.
- **Secure Context Isolation**: Uses Electron's context isolation for enhanced security.

## Installation

### Prerequisites

Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

### Clone the Repository

```bash
git clone https://github.com/mhhabib/Image-resizer.git
cd electron-image-resizer
```

### Install Dependencies

Navigate to the root directory of the project and run the following command:

```bash
npm install
```

## Usage

To start the Electron application, run:

```bash
npm start
```

This command will launch the Electron app. You can then upload an image, resize it, and save the resized image to your computer.

## Development

### Project Structure

- **main.js**: The main process file for Electron, responsible for creating the application window and handling inter-process communication.
- **src/**: Contains the frontend React components and the preload script.
  - **preload.js**: A script that bridges the gap between Electron's main and renderer processes using context isolation.
  - **App.jsx**: The main React component for the application UI.
  - **ImageUpload.jsx**: A React component for handling image uploads.
- **public/**: Contains static files like the HTML template.

### Scripts

- `npm start`: Starts the Electron application in development mode.
- `npm run build`: Builds the React application for production.
- `npm run electron`: Starts the Electron application using the production build.

## Security

This application follows security best practices for Electron applications:

- **Context Isolation**: Enabled to prevent the renderer process from accessing Node.js APIs.
- **Preload Script**: Only exposes specific, secure APIs to the renderer process.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Electron](https://www.electronjs.org/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
