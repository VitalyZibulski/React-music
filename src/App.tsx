import './App.css'

function App() {
  const tracks = [
    {id: 1, title: 'track1', url: "#"},
    {id: 2, title: 'track2', url: "#"},
  ];

  return (
    <div>
      <h1>Musicfun player</h1>
      <ul>
        {
          tracks.map(track => {
              return (
                  <li key={track.id}>
                    <div>
                      { track.title }
                    </div>
                    <audio src={track.url} controls></audio>
                  </li>
              )
            })
        }
      </ul>
    </div>
  )
}

export default App
