import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SingleTree from './SingleTree'
import ConnectedDisplay from './TreeDisplay';

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={ ConnectedDisplay } />
                    <Route exact path='/tree' component={ SingleTree } />
                </div>
            </HashRouter>
        )
    }
}

export default Main;