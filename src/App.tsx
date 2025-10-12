import './App.css'

function App() {
  const tracks = [
    {id: 1, title: 'track1', url: "#"},
    {id: 2, title: 'track2', url: "#"},
  ];

  const selectTrackId = 1;

  if (tracks === null) {
      return <div>
          <h1>Music fun</h1>
          <span>loading...</span>
      </div>
  }

  if (tracks.length === 0) {
      return <div>
          <h1>Music fun2</h1>
          <span>No tracks</span>
      </div>
  }

  return (
    <div>
      <h1>Musicfun player</h1>
      <ul>
        {
          tracks.map(track => {
              return (
                  <li key={track.id} style={{
                      border: track.id === selectTrackId ? '1px solid orange' : 'none'
                  }}>
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
