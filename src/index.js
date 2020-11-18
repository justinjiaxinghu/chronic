import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page_selection.css';
import PageScreen from './PageScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

var rows = [];
var cols = [];
var count = 1;
for (var i = 1; i <= 4; i++) {
    rows.push(i);
}
for (var i = 0; i < 4; i++) {
    cols.push(i);
}

class PageButton extends React.Component {
    render () {
        return (
            <Card className = "hoverable" bg = "light" text = "dark"> 
                    <Link to = "/test" style = {{textDecoration : "none", color : "black"}}>
                        <Card.Body>
                            <Card.Title>
                                Page
                            </Card.Title>
                            <Card.Text>
                                {console.log(count)}
                                {count++}
                            </Card.Text>
                        </Card.Body>
                    </Link>
            </Card>
        )
    }
}

class Pages extends React.Component {
    render () {
        return (
            <CardDeck>
                {cols.map((num) => (
                    <PageButton key = {num}/>
                ))}
            </CardDeck>
        )
    }
}

class Window extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {rows.map((num) => (
                    <div key = {num} style = {{margin : "20px"}}> 
                        <Pages/>
                    </div>
                ))}
                {count = 1}
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <Switch>
                <Route path = "/test" component = {PageScreen}/>
                <Route path = "/">
                    <Window/>
                </Route>
            </Switch>
        </div>
    )
}


ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

