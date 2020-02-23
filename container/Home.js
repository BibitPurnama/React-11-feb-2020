import React, { Component } from 'react';
import { data } from './Data'
import HomeProps from './HomeProps'

class Home extends Component{
    constructor(Props){
        super(Props);
        this.state={
            datap:[]
        }
    }
    
    componentDidMount(){
        this.setState({
            datap:data
        })
    }
    
    handleClick = (id) => {
        this.props.history.push(`/home/${id}`)
    }
    render(){
        return(
            <div>
                {this.state.datap.map(param => {
                    return(
                        <div>
                            <HomeProps title={param.title} pubDate={param.pubDate} author={param.author} thumbnail={param.thumbnail} handleClick={() => this.handleClick(param.id)} />
                            <img src={param.thumbnail} alt ="Props"/>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}

export default Home;