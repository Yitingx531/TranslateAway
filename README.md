# Translate Away

Translate Away is a web application that allows users to input text in one language and translate it into another language. The frontend is built using React, and the backend is powered by Flask and Python.

## Features

- Translate text between multiple languages
- Responsive design that works on various screen sizes
- User-friendly interface with cloud-like conversation bubbles for translations

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Flask, Python

## Getting Started

### Prerequisites

- Node.js and npm
- Python and pip
- Flask

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/TranslateAway.git
    cd TranslateAway
    ```

2. Set up the backend:

    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install Flask flask-cors
    ```

3. Set up the frontend:

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. Start the Flask server:

    ```bash
    cd backend
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    python app.py
    ```

2. Start the React development server:

    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure


## Usage

1. Select the source language from the "From" dropdown menu.
2. Select the target language from the "To" dropdown menu.
3. Enter the text you want to translate in the textarea.
4. Click the "Translate" button to get the translation.

## Screenshots

### Main Interface
![Screenshot 2024-06-26 at 7 18 30 PM](https://github.com/Yitingx531/translate-away/assets/119069886/357af650-d30c-47e0-9adf-76f0905b0186)



### Translation Result
![Screenshot 2024-06-26 at 7 20 36 PM](https://github.com/Yitingx531/translate-away/assets/119069886/5482fcd0-a198-4ded-abf8-46120fa9a310)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

