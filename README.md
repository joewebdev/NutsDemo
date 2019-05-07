# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Bearer Token
The Bearer token will expire around Wednesday night (5/8/2019)

### Structure
1. Components used for UI and JS Functionality. Each section would have its own subfolder for organization
2. Filters used for visually manipulating data returned to the user
3. Services used for API calls
4. Views used for containing a page and all its components
5. SCSS Files should live alongside their HTML counterpart for easy maintenace

I added an "account" folder in components and views to mock what additional sections would look like and to point out the organization further.

### Naming Convention
1. Names of Services/Views should have their type appended to their name. ie: `GetProductInfoService` for easy maintenance
1. variables are always camelCase
1. If data comes from an API response, it should be inside an `fm` object. ie: `this.fm.data`. A common key used across a project makes it easy to identify where data is coming from
1. ES6 Syntax when possible for ease of maintenance
1. Do Not Use Function(){} in the method object. Only use Arrow Functions, ie: `Test() => {}`. the `this` keyword will lose its relation to the component if you use the Function(){} style. This could be have been resolved by declaring a variable and assigning `this` to it, ie: `let self = this`
