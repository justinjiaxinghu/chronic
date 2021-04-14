import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modalformat.css';
import GridLoader from "react-spinners/GridLoader";

export default class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true
        }
    }
    
    handleClick = () => {
        this.props.toggle();
    }

    handleImageLoaded = () => {
        console.log("image finisehd loading");
        this.setState({loading : false});
    }
    
    render() {
        let complexAudioFiles = [];
        for (let i = 0; i < this.props.complexAudio.length; i++) {
            complexAudioFiles.push(
                <audio controls key =  {"c" + i}>
                    <source src = {this.props.complexAudio[i]}/>
                </audio>
            );
        }

        let simpleAudioFiles = [];
        for (let i = 0; i < this.props.simpleAudio.length; i++) {
            simpleAudioFiles.push(
                <audio controls key =  {"s" + i}>
                    <source src = {this.props.simpleAudio[i]}/>
                </audio>
            );
        }
        return (
            
            <Modal dialogClassName = "custom_modal" show = {true} onHide = {this.handleClick} onClick = {this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Passage View
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                    <GridLoader size = {30} color = {"#9999ff"} loading = {this.state.loading}/>
                        <img alt = "" src = {this.props.imageURI} onLoad = {this.handleImageLoaded.bind(this)} style = {this.state.loading ? {display : 'none'} : {maxWidth: "100%"}}/>
                    </div>
                    <div>
                        <figure>
                            <figcaption>Simple narrations of this passage.</figcaption>
                                {simpleAudioFiles}
                        </figure>
                        <figure>
                            <figcaption>Complex narrations of this passage.</figcaption>
                                {complexAudioFiles}
                        </figure>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {this.handleClick}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}