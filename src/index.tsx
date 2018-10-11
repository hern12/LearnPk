import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { ScreenRoute } from './ScreenRoute';
import { ScreenEditorRoute } from './ScreenEditorRoute';
import { HomeRoute } from './HomeRoute';

const element = <HashRouter>
    <div>
        <Switch>
            <Route exact path='/screens/:userId/:screenId' component={ScreenRoute} />
            <Route exact path='/screens/:userId/:screenId/edit' component={ScreenEditorRoute} />
            <Route exact path='/' component={HomeRoute} />
            <Route 
                render={() => 
                <div>
                    <h1>404</h1>
                    <Link to="/">Go to home...</Link>
                </div>} 
            />        
        </Switch>
    </div>
</HashRouter>;
ReactDom.render(element,document.getElementById("root"))