import React, { Component } from 'react'
// REACT REFS->GIVE DIRECT ACCESS TO DOM'S SINGLE ELEMENT

export default class Imagecard extends Component {
    constructor(props){
        super(props);
        this.state={spans:0}
        this.imageRef=React.createRef();
    }
    componentDidMount(){ //called after comp renders
        // console.log(this.imageRef.current.clientHeight); //getting height 0 coz it looking to tag
        this.imageRef.current.addEventListener('load',this.setSpan)

    }
    setSpan=()=>{
        const height=this.imageRef.current.clientHeight;
        const spans=Math.ceil(height/10)
        this.setState({spans})

    }
    render()
    {
        const {urls,description}=this.props.image;
        
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description}/>
            </div>
        )
    }
}
