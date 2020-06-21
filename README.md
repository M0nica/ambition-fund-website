
## Ambition Fund 
- [https://www.ambitionfund.org ](https://www.ambitionfund.org)
- The Ambition Fund's mission is to support the professional ambitions of underrepresented people pursuing careers in technology by increasing access to free and low-cost professional development opportunities.

<img src="src/images/ambition-fund-landing-page-seo.png">




### Getting started
install dependencies: 
```sh
yarn install
```

start the development server:
```sh
gatsby develop
```

At the project root, compile your application for deployment:
```sh
gatsby build
```

Clean the cache to fix certain errors - run the clean command before starting the dev server:
```sh
gatsby clean
```

At the project root, serve the production build of your site:
```sh
gatsby serve
```

### Styles

This website uses [styled-components](https://www.styled-components.com/). The theme file contains the base styles `src/styles/theme.js` and the global styles file contains basic element styles and a style reset `src/styles/GlobalStyles.js`.

### Navigation

This website uses [react-anchor-link-smooth-scroll](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll#readme) and [react-scrollspy](https://github.com/makotot/react-scrollspy).
To link a navigation item to a section simply add an id and string value to a section parent element that corresponds to the same navigation string value in `navigation.js` 
