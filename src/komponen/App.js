import React from 'react'
import Searchbar from './Searchbar'
import unsplash from '../api/unsplash'
import Imagelist from './Imagelist'

class App extends React.Component{
    state={
        gambar:[],
        term:''

    };
    onSubmitForm= async (term)=>{
     const response=await unsplash.get('https://api.unsplash.com/search/photos',{
            params:{query:term},
            
        });
       this.setState({gambar:response.data.results})
       
       
       
    };
    onValueChange(key, event) {
        this.setState({[key]: event.target.value})
     }
    
    render(){
        
    return (
        <div> {this.state.term.charAt(0).toUpperCase() + this.state.term.slice(1)} Shown Image {this.state.gambar.length}
        <Searchbar onSubmit={this.onSubmitForm} value={this.state.term} onValueChange={this.onValueChange.bind(this, 'term')}/>
        <Imagelist images={this.state.gambar}/>
      </div>
    )
    }
}

export default App