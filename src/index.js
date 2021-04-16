import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import './page_selection.css';
import PageScreen from './PageScreen';
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import GridLoader from "react-spinners/GridLoader";
import Scroll from './components/Scroll'

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

var rows = [];
var cols = [];
var total = [];
var count = 1;
for (var i = 1; i <= 50; i++) {
    rows.push(i);
}
for (var i = 0; i < 4; i++) {
    cols.push(i);
}
for (var i = 0; i < rows.length; i++) {
    total.push(i + 1);
}

class PageButton extends React.Component {

    render () {
        //reference this code for icon background
        if (count <= 28) { //placeholder code for page1 as proof of concept
            return (
                <Card className="hoverable" bg="light" text="dark">
                    <Link to={"/page" + count} style={{textDecoration: "none", color: "black"}}>
                        <Card.Img src={'http://localhost:8081/api/file/download?filename=page' + count + '.png'} alt="Card Image"/>
                        <Card.Body>
                            <Card.Title>
                                {"Page " + count++}
                            </Card.Title>
                        </Card.Body>
                    </Link>
                </Card>
            )
        }


        return (
            <Card className = "hoverable" bg = "light" text = "dark">
                <Link to = {"/page" + count} style = {{textDecoration : "none", color : "black"}}>
                <Card.Body>
                    <Card.Title>
                        {"Page " + count++}
                    </Card.Title>
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

const p_size = {
    fontFamily: "fantasy",
    display: "flex",
    color: "red",
    justifyContent: "center",
    alignItems: "center"
}

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])

    return (
        <>
        {loading === false ? (
        <div className = "parent">
            <Scroll showBelow={250} />
            <Router>
                <Navbar/>
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/contact-us' component={Contact} />

                <Route path = "/:id" component = {PageScreen}/>
                <Route path = "/">
                    <Window/>
                </Route>
            </Switch>
            </Router>
            <p style={p_size}>Designed by Georgia Tech Nerds</p>
        </div>
        ): (
            <div className="App">
            <GridLoader
                size={30}
                color={"#9999ff"}
                loading={loading}
                />
                <h1 style={h_style}>&nbsp;&nbsp;Chronic</h1>
            </div>
        )}
        </>
);
}

const h_style  = {
    color:"#9999ff"
}


ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

