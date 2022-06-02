# Giphy Magic

Demo app with the following features:
- Get a list of trending gifs
- Search for a specific gif

[Check it out live](https://giphy-app-nu.vercel.app/)


## How to run

- Clone this repo
- go to the source folder (giphy-app)
- then run `npm start`

## How to test
- go to the source folder (giphy-app)
- then run `npm test`
- for component testing or e2e testing run `npx cypress open`


## Explanations

I built this app without using any component library since the project doesn't have very complex features requirng a 3rd party library. Also this gives me a chance to show that I can build UI components easily from scratch.

Next I decided not to use routing because it only has 2 features and it doen't require complex routing

If you follow the folder structure you can notice the following
- the `ui-lib` folder contains all the basic UI like buttons, inputs etc.
- the `component` folder contains all the project-specific custom components
- hooks/data folder contains all the logic and data handling for gifs / controller
- The `<App />` uses the `useGifsData` hook to show a list of gifs as well as forward any user interaction

You might see 3 different types of spec files
- the first one you can find in `/src/components/GifItem.spec.tsx`. A simple spec using react testing library
- second one you can find in `/cypress/components/GifItem.cy.tsx`. Testing components using cypress
- third one you can find in `/cypress/e2e/search.cy.ts`. For e2e test


### Assumptions made

- Pre study of giphy api is ok to save time
- The app doesn't have to be perfect, as long as it offers all the features it promises
- doesn't need to have 100% test coverage
- Followed priority order: UI -> Features -> Code quality -> testing -> Accessibility 


### References / What I Googled

- https://tailwindcss.com/
- https://www.cypress.io/
- 


### Time taken
2 hours 40 minutes


### Missing
Due to time constraints there are some thing I couldn't do:

- Couldn't write more tests
- Couldn't write a better documentation
- Couldn't focus on a11y