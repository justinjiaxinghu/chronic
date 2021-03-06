import React from 'react';
import './popup.css';
export default class PopUp extends React.Component {
    handleClick = () => {
        this.props.toggle();
    }
    
    render() {
        return (
            <div className = "custom_modal">
                <div className = "custom_modal_content">
                    <span className = "close" onClick = {this.handleClick}>&times;</span>
                    <p>I'm a pop up lol</p>
                </div>
            </div> 
        )
    }
}