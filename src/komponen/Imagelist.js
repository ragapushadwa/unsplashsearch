import React from 'react';
import './Imagelist.css'
import Imagecard from './Imagecard'
const Imagelist = (props) =>{
    console.log(props.images)
   const gambar = props.images.map((images)=>{
       return <Imagecard key={images.id} images={images}/>})

return <div className='image-list'>
        {gambar}
       </div>
}


export default Imagelist