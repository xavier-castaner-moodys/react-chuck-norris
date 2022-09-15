import "./App.css";

function App() {
  return <h1>Chuck norris facts</h1>;
}

export default App;

/**
We want to do an application where we will show a joke of Chuck Norris fact random
(https://api.chucknorris.io/jokes/random) and generate an AI image with this joke.

This is the curl command to generate the image:
curl \
    -F 'text=YOUR_TEXT_URL' \
    -H 'api-key:quickstart-QUdJIGlzIGNvbWluZy4uLi4K' \
    https://api.deepai.org/api/text2img 

For the design we want the joke in the middle of the screen left and the image in the next to the right
*/
