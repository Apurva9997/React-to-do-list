import React, { Component } from 'react';
import './login.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <form>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Skills</th>
                            <th>Organisation</th>
                        </tr>
                        </thead>
                    </table>
                </form>
            </div>
        );
    }
}

export default App;
