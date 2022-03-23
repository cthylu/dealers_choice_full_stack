import React from 'react';
import store, { loadTrees, addTree } from '../store';
import { connect } from 'react-redux';

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
    componentDidMount() {
        //const trees = (await axios.get('/api/trees')).data;
        //this.props.loadAllTrees(trees);
        this.props.loadAllTrees();
        //store.dispatch(loadTrees(trees));
    }
    render() {
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
        loadAllTrees: () => dispatch(loadTrees())
    } 
};
const ConnectedDisplay = connect(mapStateToProps, mapDispatchToProps)(TreeDisplay);

export default ConnectedDisplay;