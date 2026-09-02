import Profile from "./assets/profile.jpg";

function App() {
  return (
    <>
      <div className="bg-red-500">
        <div>
          <img src={ Profile } alt="Kahbib" width={ 200 } height={ 200 } />

          <ul>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>

        <div>
          <h1>Desarrollador Web</h1>

          <p>Desarrollador web con experiencia en el desarrollo de aplicaciones web.</p>
        </div>
      </div>
    </>
  )
}

export default App
