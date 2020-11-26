import React from 'react';

class Imagecard extends React.Component{
    render(){
        return(
            <div className='image-kontainer'>
                <img 
                alt={this.props.images.description}
                src={this.props.images.urls.regular}
                />
            </div>
        )
    }

 }


export default Imagecard
