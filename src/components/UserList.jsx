import UserCard from "./UserCard"

function UserList({tampil}) {
    return (
        <>
            {tampil.map((data) => (
                <UserCard key={data.id} user={data} />
            ))}
        </>
    )
}

export default UserList