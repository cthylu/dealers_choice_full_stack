import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom';
import { connect, Provider } from 'react-redux';
import store, { loadTrees } from './store';

class TreeDisplay extends React.Component {
    constructor() {
        super();
        /* this.state = {
            trees: []
        } */
    }
    async componentDidMount() {
        const response = await axios.get('/api/trees');
        const trees = response.data;
        //this.setState({trees});
        store.dispatch(loadTrees(trees));
    }
    render() {
        console.log("PROPS: ", this.props);
        return (
            <div>
                <h1>The Wonderful World of Trees</h1>
                <p>Check out these trees!</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*this.state.trees.map*/
                            
                            this.props.trees.map((row) => {
                                return (
                                    <tr>
                                        <td>{row.name}</td>
                                        <td>{row.species}</td>
                                    </tr>
                                )
                            })
                            
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return state };
const mapDispatchToProps = () => {}
const ConnectedDisplay = connect(mapStateToProps)(TreeDisplay);

ReactDom.render(
    <Provider store={store}>
        <ConnectedDisplay />
    </Provider>, 
    document.querySelector('#app')
);