# Movie DB React App

[View Live](http://andrewpham.ca/react-movie-db)

<a href="http://andrewpham.ca/react-movie-db">
<img src="/preview.png" alt="preview" width=500 height=460/> 
</a>

## Features

- Renders out list of the recent most popular movies.
- Render data fetched by the API. Images, directors, actors, budget, gross.
- Search bar to search movies.
- Option to load more movies dynamically.
- Login feature
- Rating feature

## Built With

- Powered by [TMDB](https://www.themoviedb.org/) API
- Functional components
- React hooks
- React Router
- Styled Components
- PropTypes
- CSS grid/flex

## Insights

- **Optimization**: Successful api responses are saved in session storage. This reduces the number of API calls and thus reduces network load and increase faster reload times.
  <img src="/sessionstorage.png" alt="session storage">
- **Clean Code**: I focused on writing clean code and keeping my code decoupled. The helped increase readability and debugging.

```sh
react-rmbd/src/
├── config.js     # Initialized all my constant values
├── API.js        # Held all my REST requests in one folder
├── helpers.js    # Reusable functions
├── hooks         # Custom hooks to handle my fetch requests
```

## Folder Structure

```sh
react-rmdb/src/
├── components      # UI functional components
├── hooks           # Custom hooks
├── images          # Logos
├── API.js          # API calls
├── helpers.js      # Helper functions
├
```

## Scripts

To run the development server

```sh
npm install
npm start
```
