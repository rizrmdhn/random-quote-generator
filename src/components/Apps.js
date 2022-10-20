import React from "react";
import QuoteWrapper from "./QuoteWrapper";

class Apps extends React.Component {
    constructor() {
        super ();
        this.state = { lists: '', selectedColor: '', bgColor: ['red', 'blue', 'yellow']}
        this.getNewQoute = this.getNewQoute.bind(this);
        this._getRandomColor = this._getRandomColor.bind(this);
    }
    componentDidMount() {
        this.getNewQoute();
        this._getRandomColor();
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
            <QuoteWrapper style={{backgroundColor: this.state.selectedColor}} content={this.state.lists.content} author={this.state.lists.author} onActive={this.getNewQoute}/>
            </>    
        )
    }
}

export default Apps;