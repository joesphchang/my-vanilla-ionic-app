# Ionic Core (Web Components)

1. Open up your terminal and navigate to a directory where you want to create your project

2. Run the Vite creation command, selecting the `vanilla` template:

```shell
npm create vite@latest my-vanilla-ionic-app -- --template vanilla
```

3. After you want to navigate into your new project directory: 

```shell
cd my-vanilla-ionic-app 
```

4. Install the depenencies:

```shell
npm install
```

5. After installing the node dependencies, install Ionic Core:

```shell
npm install @ionic/core
```

6. Link Ionic CSS in `index.html`

- Open your project's `index.html` file (located in the root of your new project).
- Add the Ionic CSS stylesheet link inside the `<head>` section.

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ionic Core - Example</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
</head>

<body>    
</body>
</html>
```

7. Configure `main.js` for Ionic (Tree-Shaking)

    - Open your project's main JavaScript entry file, which Vite typically names `main.js` in the project's root. 
    - Add the Ionic `defineCustomElements` code to this file: 

```js
// In the main JavaScript file

// Imports the function to register Ionic's Web Components.
import { defineCustomElements } from '@ionic/core/loader';

// Sets the base URL for Ionic's component JavaScript files, typically '/' for Vite.
const resourcesUrl = '/';

// Registers the specified Ionic components, enabling tree-shaking for optimized loading.
defineCustomElements(window, {
	// Specify the components in an array to optimize tree shaking:
	components: [
		'ion-button',
		'ion-card',
		'ion-header',
		'ion-toolbar',
		'ion-title',
		'ion-content',
	],
	resourcesUrl: resourcesUrl,
});
```

8. Lets run the application!

Now that we're finally all set-up we can start our development server: 

```shell
npm run dev 
```

Vite will start a local server (http://localhost:5173) and open it in your browser. Your Vanilla JS App will coorectly styled and functional Ionic components should be visible. 

9. Build for Production:

```shell
npm run build
```

This will create an optimized `dist` folder. If you inspect the JavaScript bundles, you'll see that only the Ionic components you listed in `main.js` were included, demonstrating tree-shaking. 
