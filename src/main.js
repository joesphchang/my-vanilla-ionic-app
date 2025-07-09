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

// You can add any other vanilla JavaScript logic here.
// For example, to add an event listener to an Ionic button:
document.addEventListener('DOMContentLoaded', () => {
  const myButton = document.querySelector('ion-button#my-button');
  if (myButton) {
    myButton.addEventListener('click', () => {
      alert('Ionic Button Clicked from Vanilla JS!');
    });
  }
});