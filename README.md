## Project name

Movietrailerz

## About

Movietrailerz is an app that uses [The Movie Database](https://www.themoviedb.org/) to showcase movies and trailers. Here's a [link to their API docs](https://developers.themoviedb.org/3/getting-started/introduction).

Browse through movies that are trending this week, top rated of all time, upcoming and different genres. There is also a global search feature to serach through all the movies the api has to offer.

## Demo link

App is live at: https://movietrailerz.netlify.app/

## Screenshots
Home
![Homepage](https://user-images.githubusercontent.com/42705232/176843319-49f9ec78-76fc-42ee-a45d-a22c88d9f639.png)

Trending
![screencapture-localhost-3000-trending-2022-07-01-03_07_10](https://user-images.githubusercontent.com/42705232/176842769-39f56279-873c-4009-84af-728bac81467b.png)
Genre
![screencapture-movietrailerz-netlify-app-genre-9648-2022-07-01-03_08_55](https://user-images.githubusercontent.com/42705232/176843067-75724e66-2b25-4695-83a3-0c50c81c8502.png)
Search
![screencapture-movietrailerz-netlify-app-search-2022-07-01-03_09_42](https://user-images.githubusercontent.com/42705232/176843433-aa693552-533f-46ac-a458-d6482c6eb848.png)

## Technologies

This is a react typescript project made with styled components. Additional key libraries include:

- [react-select](https://react-select.com/home)
- [react-hot-toast](https://react-hot-toast.com/)
- [axios](https://axios-http.com/docs/intro)
- [react-modal](https://www.npmjs.com/package/react-modal)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-paginate](https://www.npmjs.com/package/react-paginate)
- [react-youtube](https://www.npmjs.com/package/react-youtube)
- [swiper](https://www.npmjs.com/package/swiper)

## Setup

1. Get an API key: [The Movie DB | API Introduction](https://developers.themoviedb.org/3/getting-started/introduction)
2. Clone this repo to your local machine
3. Create a `.env` file in the root of the project directory
4. In the `.env` file, add the following environment variable for the API key: `REACT_APP_API_KEY=YourAPIKey`
5. Go to terminal and run: `npm start`
