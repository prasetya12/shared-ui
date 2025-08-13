### Plexicus UI-Lib

Welcome to the Plexicus Ui-Lib repository\! A reusable and responsive React component library for building beautiful and accessible web applications and blogs. This library is built with **React Vite** and **Tailwind** for a fast development experience for interactive components. It also supports **internationalization (i18n)** with `yaml` files for multi-language content.

-----

### 💻 Installation and Setup

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**

    ```bash
    https://github.com/plexicus/ui-lib.git
    cd ui-lib
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    Your site will now be running at `http://localhost:5173/`.

-----
### 💻 How to use UI-Lib

#### Install UI-Lib
```bash
    # Using npm from GitHub (e.g., the 'main' branch)
    npm install https://github.com/plexicus/ui-lib.git
```

#### Example 
```bash
    import { NavbarPlexicuss } from "shared-ui";

    const lang = getLangFromUrl(Astro.url);
    const { title = SITE_TITLE, description = SITE_DESCRIPTION } = Astro.props;

    <NavbarPlexicus
        client:load
        lang={lang}
        fullSiteUrl={`${SITE_URL}:${SITE_PORT}`}
        fullBlogUrl={`${BLOG_SITE_URL}:${BLOG_PORT}`}
      />
```
-----

### 🛠️ Development

#### Scripts

  * `npm run dev`: Starts the development server with hot-reloading.
  * `npm run build`: Builds the production-ready static site into the `dist/` directory.
  * `npm run preview`: Locally previews your production build.
  * `npm run lint`: Runs ESLint to check for code quality and style issues.
  * `npm run lib`: Specifically builds the project as a library with a defined entry point.

#### Linting and Formatting

This project uses **ESLint** with the **`@stylistic`** plugin to enforce consistent code style and best practices.

  * **ESLint**: Checks for potential errors and code smells.
  * **`@stylistic/eslint-plugin`**: Provides highly configurable rules for code formatting.

-----

### 🌐 Internationalization (i18n)

Translations are handled using `yaml` files located in the `src/assets/locales` directory.

  * `en/translation.yaml`: English translations
  * `fr/translation.yaml`: French translations
  * `es/translation.yaml`: Spanish translations

To add a new language, simply create a new `[lang]/translation.yaml` file in the same directory.

-----

### ⚙️ Environment Variables

The project uses environment variables for configuration. You can create a `.env` file in the root directory to override the defaults.

```
# .env
VITE_BLOG_URL=http://localhost:9000
VITE_WEB_URL=http://localhost:8000
```

### ⚙️ Automated Builds
This library utilizes an automated build process to ensure that changes are tested, built, and published efficiently. A Continuous Integration/Continuous Deployment (CI/CD) pipeline is configured to automatically run tests, compile code, and publish the library to a package registry after a successful build on the main branch.


### 🤝 How to Contribute

Read our [contribution guidelines](https://github.com/plexicus/web/blob/main/CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements, and how to prepare your code for submission.



