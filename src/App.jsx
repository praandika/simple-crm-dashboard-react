import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [filterUsers, setFilterUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setFilterUsers(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const hasil = users.filter((tampil) => 
      tampil.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilterUsers(hasil)
  }, [search, users])

  if (loading) {
    return <h2 style={{ color: "white" }}>Loading...</h2>
  }

  return (
    <div style={styles.container}>
      <h1>CRM Dashboard</h1>

      <input 
        type="text"
        placeholder="Cari User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <p>Total Users: {filterUsers.length}</p>

      {filterUsers.map((tampil) => (
        <div key={tampil.id} style={styles.card}>
          <h3>{tampil.name}</h3>
          <p>{tampil.email}</p>
          <p>{tampil.phone}</p>
        </div>
      ))}
    </div>
  )
}

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "white"
  },
  input: {
    padding: "10px",
    margin: "20px 0",
    width: "300px",
    borderRadius: "8px",
    border: "none"
  },
  card: {
    padding: "15px",
    marginTop: "10px",
    backgroundColor: "#1e1e1e",
    borderRadius: "10px"
  }
}

export default App