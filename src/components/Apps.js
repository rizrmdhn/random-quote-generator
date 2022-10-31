import React from "react";
import QuoteWrapper from "./QuoteWrapper";

class Apps extends React.Component {
    constructor() {
        super ();
        this.state = { lists: '' }
        this.getNewQoute = this.getNewQoute.bind(this);
    }
    componentDidMount() {
        this.getNewQoute();
    }
    getNewQoute = () => {
        this.setState({ lists: '' });
        fetch('https://api.quotable.io/random').then(res => res.json())
            .then(lists => {
                this.setState({lists});
            })
 
    };
      
      _getRandomColor(){
        var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
        this.setState({
          selectedColor: item,
        })
      }

    render () {
        return (
            <>
            <QuoteWrapper content={this.state.lists.content} author={this.state.lists.author} onActive={this.getNewQoute}/>
            </>    
        )
    }
}

export default Apps;