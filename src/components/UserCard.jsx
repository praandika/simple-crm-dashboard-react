function UserCard({user}) {
    return (
        <div style={styles.card}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    )
}

const styles = {
    card: {
        padding: "15px",
        marginTop: "10px",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px"
    }
}

export default UserCard