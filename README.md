# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

----


# SoftShell App Documentation

## Overview

The SoftShell App is a React application built with Vite, designed to facilitate the selling of unused software licenses. It features a modern, responsive design with dark mode support and smooth scrolling navigation.

## Key Features

-   **Hero Section:** Introduces the app and its core value proposition.
-   **How It Works:** Explains the process of selling licenses in three simple steps.
-   **Why Choose Us:** Highlights the benefits of using SoftShell.
-   **Testimonials:** Showcases customer reviews and success stories.
-   **Contact Form:** Allows users to get in touch for inquiries or quotes.
-   **Dark Mode:** Offers a comfortable viewing experience in low-light environments.
-   **Responsive Design:** Ensures optimal viewing across various devices.
-   **Smooth Scrolling Navigation:** Provides a seamless user experience.

## Technologies Used

-   React
-   Vite
-   Tailwind CSS
-   React Scroll
-   Font Awesome
-   Lucide React
 
## File Structure

-   `src/App.jsx`: Main application component that orchestrates the different sections.
-   `src/components/`: Contains reusable React components.
    -   `Hero.jsx`: Hero section of the landing page.
    -   `HowItWorks.jsx`: Component explaining how the app works.
    -   `WhyChooseUs.jsx`: Component highlighting the benefits of using the app.
    -   `Testimonials.jsx`: Displays customer testimonials.
    -   `ContactForm.jsx`: Contact form for users to send inquiries.
    -   `Footer.jsx`: Footer section with copyright information, quick links, and social media links.
-   `src/context/ThemeContext.jsx`: Manages the theme (light/dark) using React context.
-   `src/index.css`: Global styles and Tailwind CSS directives.
-   `vite.config.js`: Vite configuration file.
-   `tailwind.config.js`: Tailwind CSS configuration file.

## Setup Instructions

1.  Clone the repository:

    ```sh
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```sh
    cd softshell
    ```

3.  Install dependencies:

    ```sh
    npm install
    ```

## Development

1.  Start the development server:

    ```sh
    npm run dev
    ```

2.  Open your browser and navigate to the address provided (usually `http://localhost:3000`).

## Build

1.  Build the application for production:

    ```sh
    npm run build
    ```

2.  The built files will be in the `dist` directory.

## Scripts

-   `dev`: Starts the development server.
-   `build`: Builds the application for production.
-   `lint`: Runs ESLint to check for code quality.
-   `preview`: Starts a local server to preview the production build.



## Navigation

The navigation is implemented using [react-scroll](https://www.npmjs.com/package/react-scroll) to provide smooth scrolling between sections.

## Dependencies

-   `react`: "^19.1.0"
-   `react-dom`: "^19.1.0"
-   `react-scroll`: "^1.9.3"
-   `@fortawesome/react-fontawesome`: "^0.2.2"
-   `lucide-react`: "^0.508.0"
-   `tailwindcss`: "^3.4.17"

## Contributing

Feel free to contribute to the project by submitting issues or pull requests.
``

# Theme Context

The application uses a theme context ([`ThemeContext.jsx`](src/context/ThemeContext.jsx)) to manage the theme (light or dark). The [`useTheme`](src/context/ThemeContext.jsx) hook provides access to the current theme and a function to toggle the theme.

# ThemeContext.jsx Documentation

## Overview

`ThemeContext.jsx` provides a React context-based theme management system, enabling light and dark mode functionality across the application. It persists the user's theme preference in `localStorage`.

## Features

-   Light/Dark theme toggle functionality
-   Theme persistence using `localStorage`
-   React Context API implementation
-   Automatic theme initialization on app load

## Usage

### Provider Setup

Wrap your app with the `ThemeProvider`:

````jsx
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
````

# Hero.jsx Documentation

## Overview

`Hero.jsx` is a React component that serves as the main introductory section of the landing page. It features a prominent title, a brief description, and a call-to-action button.

## Features

-   Eye-catching background gradient.
-   Clear and concise headline.
-   Engaging description.
-   Call-to-action button linking to the contact form.
-   Dark mode support.
-   Responsive design.

## Usage

Import and use the `Hero` component in your main application or any other relevant component:

````jsx
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Hero />
      {/* Other components */}
    </div>
  );
}
````

# HowItWorks.jsx Documentation

## Overview

`HowItWorks.jsx` is a React component that explains the process of selling software licenses in three simple steps. It displays these steps with icons, titles, and descriptions.

## Features

-   Clear and concise explanation of the selling process.
-   Visually appealing icons for each step.
-   Responsive design.
-   Dark mode support.

## Usage

Import and use the `HowItWorks` component in your main application or any other relevant component:

````jsx
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div>
      <HowItWorks />
      {/* Other components */}
    </div>
  );
}
````

# WhyChooseUs.jsx Documentation

## Overview

`WhyChooseUs.jsx` is a React component that highlights the benefits of using SoftShell. It displays key features with icons, titles, and descriptions, emphasizing why users should choose SoftShell for selling their software licenses.

## Features

-   Showcases the key advantages of using SoftShell.
-   Visually appealing icons for each feature.
-   Clear and concise descriptions.
-   Responsive design.
-   Dark mode support.

## Usage

Import and use the `WhyChooseUs` component in your main application or any other relevant component:

````jsx
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <div>
      <WhyChooseUs />
      {/* Other components */}
    </div>
  );
}
````

# Testimonials.jsx Documentation

## Overview

`Testimonials.jsx` is a React component that displays customer testimonials. It showcases positive reviews from satisfied customers to build trust and credibility.

## Features

-   Displays customer testimonials with quotes, names, roles, and company information.
-   Visually appealing design.
-   Responsive layout.
-   Dark mode support.

## Usage

Import and use the `Testimonials` component in your main application or any other relevant component:

````jsx
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Testimonials />
      {/* Other components */}
    </div>
  );
}
````

# ContactForm.jsx Documentation

## Overview

`ContactForm.jsx` is a React component that provides a contact form for users to send messages. It includes form validation and displays error messages for invalid inputs.

## Features

-   Form validation for name, email, and message fields.
-   Displays error messages for invalid inputs.
-   Handles form submission.
-   Responsive design.
-   Dark mode support.

## Usage

Import and use the `ContactForm` component in your main application or any other relevant component:

````jsx
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <ContactForm />
      {/* Other components */}
    </div>
  );
}
````

# Footer.jsx Documentation

## Overview

`Footer.jsx` is a React component that renders the footer section of the application. It includes copyright information, quick links, and social media links.

## Features

-   Displays copyright information.
-   Provides quick links to important pages.
-   Includes social media links.
-   Responsive design.
-   Dark mode support.

## Usage

Import and use the `Footer` component in your main application or any other relevant component:

````jsx
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Footer />
      {/* Other components */}
    </div>
  );
}
````

