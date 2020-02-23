import React from 'react';
import { data } from './Data';
import './Detail.css'

class Detail extends React.Component{
    constructor(Props){
        super(Props);
        this.state={
            datap:[]
        }
    }
    componentDidMount(){
       const id=this.props.match.params.id
       const filters= data.filter(datap => datap.id == id)
       this.setState({datap:filters})
    }
    render(){
        return(
            <div>
            {
                this.state.datap.map(param => {
                    return(
                        <div>
                            <h1>{param.title}</h1>
                            <p className="author">{param.author}</p>
                            <h5>{param.pubDate}</h5>
                            <img className="gambar" src={param.thumbnail} />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Detail;