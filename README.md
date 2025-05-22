# Evangadi Food Menu

This is a simple food menu application that displays a list of food items. It's built using React and showcases features like a responsive layout and dynamic content rendering.

## Getting Started

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm (comes with Node.js)

### Setup

1.  Clone the repository (if you haven't already):
    ```bash
    git clone your-repository-url
    cd evangadi-food-menu
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:
```bash
npm run dev
```
This will typically open the application in your default web browser at `http://localhost:5173` (Vite's default port). Check your terminal output for the exact address.

## Project Structure

A brief overview of the key directories:

*   `public/`: Contains static assets that are served directly (e.g., `vite.svg`, `index.html` shell).
*   `src/`: Contains all the source code for the React application.
    *   `src/assets/`: Typically used for static assets like images that are imported into components (if this project had one).
    *   `src/CommonResource/`: Contains shared resources, like the `data.js` file for the menu items.
    *   `src/Components/`: Contains the reusable React components.
        *   `src/Components/Header/`: The header component.
        *   `src/Components/Menu-List/`: The component responsible for displaying the list of food items.
        *   `src/Components/Food Items/`: The component for rendering individual food items.
    *   `src/App.jsx`: The main application component.
    *   `src/main.jsx`: The entry point of the application, where the React app is mounted to the DOM.
    *   `src/App.css`, `src/index.css`: Global styles.
*   `vite.config.js`: Configuration file for Vite.
*   `package.json`: Lists project dependencies and scripts.
