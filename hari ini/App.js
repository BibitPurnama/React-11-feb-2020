import React from 'react';

class App extends React.Component {
    constructor(){
        super();
            // nama: 'Purnomo',
        this.state = {
            title: 'Belajar State',
            tanggal:'12 February 2020',
            data:[
                {
                nama: 'Bpur',
                asal: 'Mojogedang',
                warna: 'blue'
                },{
                    nama: 'Pur',
                    asal: 'karangnyar',
                    warna: 'green'
                }
            ]
        }
    }
    handleClick = () => {
        this.setState({
            title:'Belajar Props'
        })
    }
    render (){
        return(
            <div>
            <h1 onClick={this.handleClick}
            >{this.state.title}</h1>
            <p>Tanggal : {this.state.tanggal} </p>
            {/* <p>{this.state.nama}</p> */}
            {
                this.state.data.map((param , index)  => {
                    return <div key={index} style={{color: param.warna}}
                    >{index +1} .{param.nama}</div>  
              })
            }
            </div>
        )
    }
}

export default App;