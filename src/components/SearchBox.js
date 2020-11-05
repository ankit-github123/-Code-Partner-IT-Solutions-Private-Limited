import React, { Component } from "react"

class SearchBox extends Component {

    state={term:"positive"}

    handleStateTerm (event)  {
        console.log(event.target.value);
        const val =event.target.value;
        this.setState({term:val})
        console.log(this.state.term)
        event.preventDefault();

        this.onFormSubmit(event)
    }
    onFormSubmit(event) {
       console.log(event.target.value);
        this.setState({term:event.target.value})
        console.log(this.state.term)
        this.props.onSubmit(event.target.value)
        
    }

  
    render() {
        return <div style={{marginTop:"10px",width:"10rem"}}>
            <form >
                <div className="ui icon input">
                <input type="text" value={this.state.term} onChange={e => this.handleStateTerm(e) }  placeholder="Search..." style={{
    width: "50rem",
    margin:" auto",
    marginLeft: "29rem"
}}/>
                <i onClick={e => this.onFormSubmit(e)} className="circular search link icon"></i>
                </div>
            </form>
        
        </div>
    }
}
export default SearchBox
// eslint-disable-next-line
{/* <i onClick={()=>this.setState({count:this.state.count+1})} class="circular search link icon"></i> */}
