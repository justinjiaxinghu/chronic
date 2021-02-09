import React from 'react';
import Card from 'react-bootstrap/Card';
import '../page_selection.css';
import {
    Link
  } from "react-router-dom";
import { Component } from 'react';
import rotateButton from '../resources/rotatebutton.jpg';

export class page1 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page1.png').default} className = "ind_page" id = "rotate_button" style = {{width: "50%"}}/>
                  </div>
              </div>
          )
      }
  }

export class page2 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page2.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page3 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page3.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page4 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page4.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }


  export class page5 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page5.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }


  export class page6 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page6.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page7 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page7.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page9 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page9.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page10 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page10.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }


  export class page11 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page11.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page12 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page12.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page13 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page13.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }

  export class page14 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page14.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }


  export class page15 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page15.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }


  export class page17 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page17.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }


  export class page18 extends Component {
    constructor (props) {
          super(props);
          this.state = {
              degrees: 0
          }
      }
      
      handleClick() {
          var icon = document.getElementById("rotate_button");
          var temp = this.state.degrees - 20;
          this.setState({degrees : temp}, function() { //ensures that state has been changed 
              icon.style.transform = "rotate(" + this.state.degrees + "deg)";
          })
      }
  
      render() {
          return (
              <div className = "parent" style = {{margin: "20px"}}>
                  <div style = {{marginBottom: "20px"}}>
                      <Card className = "hoverable" bg = "light" text = "dark"> 
                          <Link to = "/" style = {{textDecoration : "none", color : "black"}}>
                              <Card.Body>
                                  <Card.Title>
                                      Back to Page Selection
                                  </Card.Title>
                                  <Card.Text>
                                  </Card.Text>
                              </Card.Body>
                          </Link>
                      </Card>
                  </div>
                  <div>
                      <img alt = "" src = {rotateButton} style = {{width: "80px", height: "80px"}} onClick={() => this.handleClick()} />
                  </div>
                  <div className = "parent_image">
                      {/* need to use default for some reason, react is trying to access build version of image */}
                      <img alt = "" src = {require('../resources/page18.png').default} className = "ind_page" id = "rotate_button"/>
                  </div>
              </div>
          )
      }
  }