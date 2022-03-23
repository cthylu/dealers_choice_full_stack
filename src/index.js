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
    async componentDidMount() {
        //const trees = (await axios.get('/api/trees')).data;
        //this.props.loadAllTrees(trees);
        this.props.loadAllTrees();
        //store.dispatch(loadTrees(trees));
    }
    render() {
        //console.log("PROPS: ", this.props);
        return (
            <div>
                <h1>Your Wonderful World of Trees Checklist</h1>
                <p>Check out these trees! Plant them!</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
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
const mapDispatchToProps = (dispatch) => { 
    return { 
        //loadAllTrees: (trees) => dispatch(loadTrees(trees)) 
        loadAllTrees: () => dispatch(loadTrees()),
        //addTree: (tree) => dispatch(addTree(tree))
    } 
};
const ConnectedDisplay = connect(mapStateToProps, mapDispatchToProps)(TreeDisplay);

ReactDom.render(
    <Provider store={store}>
        <ConnectedDisplay />
    </Provider>, 
    document.querySelector('#app')
);
