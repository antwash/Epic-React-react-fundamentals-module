// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.userName.value)
  }

  const handleOnChange = event => {
    const value = event.target.value
    if (value !== value.toLowerCase()) {
      setError('Username must be lower case')
      return
    }

    setError(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input id="userName" type="text" onChange={handleOnChange} />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
