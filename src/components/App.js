import React, { useState, useEffect } from "react"
import Button from "./button"

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [genreValue, setGenreValue] = useState(1)

  const changeHandler = event => {
    setGenreValue(event.target.value)
  }

  const genreCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/genre/anime/${genreValue}/1`
    )
    const data = await response.json()
    setSelectedGenre(data)
    // console.log(data)
  }

  useEffect(() => {
    genreCall()
  }, [])

  console.log(selectedGenre)
  return (
    <main>
      <h1>From App</h1>
      <Button message="Click" handler={changeHandler} />
      <ul>
        {selectedGenre.anime.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
