import React, { Component } from 'react';
import UserList from './Userlist';
import ActiveUser from './Activeuser';
import Search from './Search';
import Sorting from './Sorting';

class Bootstrap extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            activeUser: []
        };
    }

    componentDidMount() {
        let request = new XMLHttpRequest();
        request.open('GET', 'data.json', true);

        request.onload = () => {
            if(request.status >= 200) {

                let users = JSON.parse(request.responseText);
                this.setState({
                    users: users,
                    activeUser: users[0]
                });
            }
        }

        request.onerror = () => {
            console.log('Something is wrong with this XMLHttpRequest');
        }

        request.send();
    }

    componentWillUnmount() {
        request.close()
    }

    handleClick(uid) {
        this.updateActiveUser(this.getUserById(uid));
    }

    handleSearch(value) {
        this.searchUsers(value);
    }

    handleSorting(value, direction) {

        let users = this.state.users;

        switch(value) {
            case "age":
                users = users.sort((a, b) => a.age - b.age);
                break;
            case "name":
                users = users.sort((a, b) => a.name > b.name);
                break;
        }

        if ("age" == value) {
            switch(direction) {
                case "forward":
                    users = users.sort((a, b) => a.age - b.age);
                    break;
                case "backward":
                    users = users.sort((a, b) => b.age - a.age);
                    break;
            }
        } else if ("name" == value) {
            switch (direction) {
                case "forward":
                    users = users.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        } else if (a.name < b.name) {
                            return -1;
                        }

                        return 0;
                    });
                    break;
                case "backward":
                    users = users.sort((a, b) => {
                        if (a.name < b.name) {
                            return 1;
                        } else if (a.name > b.name) {
                            return -1;
                        }

                        return 0;
                    });
                    break;
            }
        }

        this.setState({
            users: users
        });

        this.updateActiveUser(this.state.users[0]);
    }

    searchUsers(value) {
        let request = new XMLHttpRequest();
        request.open('GET', 'data.json');
        request.onload = () => {
            if(request.status >= 200) {
                let source = JSON.parse(request.responseText);

                let users = source.filter((user) => {
                    return user.name.toLowerCase().indexOf(value.toLowerCase()) != -1
                });

                    this.setState({
                        users: users
                    })

                    this.updateActiveUser(users[0]);
            }
        }
        request.send();
    }

    getUserById(id) {
        let user = this.state.users.filter((user) => user.id === id);
        return user[0];
    }

    updateActiveUser(user) {
        this.setState({
            activeUser: user
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <Search callback={this.handleSearch.bind(this)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <Sorting callback={this.handleSorting.bind(this)} />
                    </div>
                </div>
                <div className="col-xs-2">
                    <ActiveUser user={this.state.activeUser} />
                </div>
                <div className="col-xs-10">
                    <UserList callback={this.handleClick.bind(this)} users={this.state.users} />
                </div>
            </div>
        );
    }
}

export default Bootstrap;