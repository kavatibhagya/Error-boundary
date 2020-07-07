import React, { Component } from 'react';


class Errorboundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }
    render(){
        
        return(
            if(this.state.error){
                <h2>something went wrong</h2>
            }
        );
    }
}

export default Errorboundary;