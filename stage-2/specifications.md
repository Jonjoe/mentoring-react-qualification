# React App Specifications

1.Create a react app using CRA (Create React App) with the Typescript template. https://create-react-app.dev/docs/adding-typescript/
2. Delete the css and SVg files and remove the references from App and index

**In App.tsx**
3. Replace the returned JSX with `<p>hello world</p>
2. make an Async call function to github to retrieve your github repos. for example if I wanted to get mine I could use `GET https://api.github.com/users/Jonjoe/repos`
3. In the returned JSX create an input field and a dummy list
4. Store the input fields value in App's state
5. Implement useEffect to call your async function and store the returned data into state
6. Remove the dummy list items in your JSX list and map the API data to a list item
7. Add a filter to filter the api data by search term


