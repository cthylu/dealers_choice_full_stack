import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom';

class TreeDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            trees: []
        }
    }
    async componentDidMount() {
        const response = await axios.get('/api/trees');
        const trees = response.data;
        this.setState({trees});
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.trees.map((row) => {
                            return (
                                <tr>
                                    <td>{row.name}</td>
                                    <td>{row.species}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDom.render(<TreeDisplay />, document.querySelector('#app'));