# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help me improve my coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users can:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![SCREENSHOT](./screenshot.png)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- I gained experience in working with APIs, which helped me to better understand how to integrate different systems and access external data sources.
- I also learned about global state management, which allowed me to efficiently manage and share data between different components of the project.
- I was able to expand my knowledge of web development by learning and applying advanced CSS techniques to create more responsive and dynamic user interfaces for the project.

To see how you can add code snippets, see below:

```js
const proudOfThisFunc = ({ borders }) => {
  const borderCountries = allCountries.filter((country) =>
    country.codes.some((code) => borders.includes(code))
  );
};
```

## Author

- Website - [Onosereme Emuemhonjie](https://onosereme.netlify.app)
- Frontend Mentor - [@onoseremejohn](https://www.frontendmentor.io/profile/onoseremejohn)
- Twitter - [@yourusername](https://www.twitter.com/onoseremejohn)

## Acknowledgments

- I would like to express my deep appreciation and gratitude to God, without whose guidance and blessings, this project would not have been possible.
- I am also thankful for the invaluable support and assistance provided by ChatGPT, whose contributions helped me to gain a deeper understanding of the subject matter and provided valuable insights that greatly improved the quality of my work and sped up my workflow.
