import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom';
import { connect, Provider } from 'react-redux';
import store, { loadTrees, addTree } from './store';

const TreeForm = (props) => {
    return (
        <div>
            <h2>Add a Tree:</h2>
            <button onClick={() => { store.dispatch(addTree()) }}>
                Add +
            </button>
        </div>
    );
}

class TreeDisplay extends React.Component {
    constructor() {
        super();
    }
    async componentDidMount() {
        const trees = (await axios.get('/api/trees')).data;
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
                <hr />
                <TreeForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => { return state };
/* const mapDispatchToProps = (dispatch) => { 
    return { 
        loadTrees: () => { dispatch(loadTrees()) } 
    } 
}; */
const ConnectedDisplay = connect(mapStateToProps)(TreeDisplay);

ReactDom.render(
    <Provider store={store}>
        <ConnectedDisplay />
    </Provider>, 
    document.querySelector('#app')
);