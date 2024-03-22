import './App.css';
import { useEffect, useState } from "react"
import Axios from "axios"

function App() {

  const [heroes, setHeroes] = useState([])


  //? UseEffect 
  useEffect(() => {
    Axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(response => {

        //! axios wraps the response in it's own .data key
        console.log(response.data)
        setHeroes(response.data)

      })
      .catch(err => { console.log(err) })

  }, [])




  //? Axios
  const axiosHeroes = () => {
    Axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(response => {

        //! axios wraps the response in it's own .data key
        console.log(response.data)
        setHeroes(response.data)

      })
      .catch(err => { console.log(err) })
  }
  // axiosHeroes() 🚨 DO NOT DO THIS IN THE COMPONENT, because it's changing a STATE var








  //? Vanilla JS fetch
  const fetchHeroes = () => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(serverResponse => {
        // console.log(serverResponse)
        return serverResponse.json()
      }).then(actualServerData => {
        console.log(actualServerData)
        setHeroes(actualServerData)
      })
      .catch(err => {
        console.log(err)
      })
  }






  return (
    <fieldset className="App">
      <h1>Superheroes 🦸🦸‍♂️🦹🦹‍♂️</h1>
      <hr />

      <button onClick={fetchHeroes}> fetch Heroes</button>
      <button onClick={axiosHeroes}> Axios Heroes</button>

      <p></p>
      {/* {JSON.stringify(heroes)} */}



      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>full name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td> <img src={hero.images.sm} alt={hero.name} width="80" /> </td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }
        </tbody>


      </table>


    </fieldset>
  );
}

export default App;
