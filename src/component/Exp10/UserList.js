import React, { Component } from 'react'

export default class UserList extends Component {
    state = {
        users: [],
        allUsers: [],
        searchQuery: '',
        error: null,
        loading: false
    }

    componentDidMount() {
        this.fetchUsers()
    }

    componentDidUpdate(preProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.filterUsers()
        }
    }

    fetchUsers = () => {
        this.setState({ loading: true, error: null })

        fetch('https://randomuser.me/api/?results=10&nat=IN')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    users: data.results,
                    allUsers: data.results,
                    loading: false
                })
            })
            .catch((error) => {
                this.setState({ error: 'Failed to load Users', loading: false })
            })
    }

    filterUsers = () => {
        const query = this.state.searchQuery.toLowerCase()
        this.setState((prevState) => ({
            users: prevState.allUsers.filter((user) =>
                `${user.name.first} ${user.name.last}`
                    .toLowerCase()
                    .includes(query)
            )
        }))
    }

    handleSearch = (e) => {
        this.setState({ searchQuery: e.target.value })
    }

    handleRefresh = () => {
        this.setState({ searchQuery: '' },
            this.fetchUsers)
    }

    render() {

        const { users, searchQuery, error, loading } = this.state;

        return (
            <div101>
                <h1>10. User List</h1>

                <div1011>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={this.handleSearch}
                        placeholder="Search by name..."
                    />

                    <button onClick={this.handleRefresh}>Refresh</button>
                </div1011>

                {loading && <p>Loading...</p>}
                {error && <p>error...</p>}

                {
                    !loading && !error && users.length > 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{`${user.name.first} ${user.name.last}`}</td>
                                        <td>{user.email}</td>
                                        <td>{`${user.location.city} ${user.location.state}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }

                {
                    !loading && !error && users.length === 0 && (
                        <p>No users found</p>
                    )
                }

            </div101>
        )
    }
}
