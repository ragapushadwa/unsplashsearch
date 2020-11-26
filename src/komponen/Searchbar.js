import React from 'react';

class Searchbar extends React.Component {
  
        onFormSubmit=(event)=>{
            event.preventDefault()  
            this.props.onSubmit(this.props.value) 
            //e=>
               // {e.preventDefault();
                //console.log(this.state.term)
               // }
        }

        onFieldChange(event) {
            // for a regular input field, read field name and value from the event
            const fieldName = event.target.name;
            const fieldValue = event.target.value;
            this.props.onChange(fieldName, fieldValue);
        }
    render() {
      
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit
                }
                    
                    className='ui form'>
                    <div className='field'>
                        <input type='text'
                         value={this.props.value}
                         placeholder='Image Search'
                         onChange={this.props.onValueChange}/>
                    </div>  
                   
                </form>
            </div>
        );
    }
}

export default Searchbar;