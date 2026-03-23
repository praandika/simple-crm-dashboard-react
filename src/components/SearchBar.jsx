function SearchBar({cari, setCari}) {
    return (
        <input
            type="text"
            placeholder="Search user..."
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            style={styles.input}
        />
    )
}

const styles = {
    input: {
        padding: "10px",
        margin: "20px 0",
        width: "300px",
        borderRadius: "8px",
        border: "none"
    }
}

export default SearchBar