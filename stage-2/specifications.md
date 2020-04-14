# React App Specifications

- Create a react app using CRA (Create React App) with the Typescript template. https://create-react-app.dev/docs/adding-typescript/.
- Delete the CSS and SVG files and remove the references from App and index.

**In App.tsx**
- Replace the returned JSX with `<p>hello world</p>`
- Make an async function that makes an API call to Github to retrieve your github repos. For example if I wanted to get mine I could use `GET https://api.github.com/users/Jonjoe/repos`
- In the returned JSX create an input field and a dummy list
- Store the input fields value in App's state
- Implement useEffect to call your async function and store the returned data into state
- Remove the dummy list items in your JSX list and map the API data to a list item
- Add a filter to filter the api data by search term

If you get stuck you can look at the App.tsx in the code folder of this section for a heavily documented implementation.
