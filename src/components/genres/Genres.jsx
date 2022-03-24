

const Genres = ({genres}) => {
  return (
    <ul>
      {genres.map(g => (
        <li key={g}>{g}</li>
      ))}
   </ul>
  )
}

export default Genres