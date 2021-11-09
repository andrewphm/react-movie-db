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
- Login feature (to do)
- Rating feature (to do)

## Built With

- Powered by [TMDB](https://www.themoviedb.org/) API
- Functional components
- React hooks
- React Router
- Styled Components
- PropTypes
- CSS grid/flex

## Insights

- Improved optimization: Successful api responses are saved in session storage. This would reduce API calls and thus reduce network load and increase faster reload.
  <img src="/sessionstorage.png" alt="session storage">

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
