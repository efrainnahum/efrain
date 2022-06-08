import { useEffect, useState } from 'react';

function App() {
  const url = 'https://swapi.dev/api/people';

  const [names, setNames] = useState();

  const fecthApi = async () => {
    const response = await fetch(url)
    
    const responseJSON = await response.json()
    setNames(responseJSON)
    console.log(responseJSON)
  }
  
  useEffect(() => {
    fecthApi()
  }, [])

  return (
    <div className="App">
      <h1>hola</h1>
      <ul>
        {
          names.map( (names, index) => {
            return <li>{names.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
