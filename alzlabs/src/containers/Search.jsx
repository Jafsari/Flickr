import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Detail from '../components/Detail.jsx'
import '../assets/Search.css';

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:""
        }
    }

    handleRequest = (e) => {
        e.preventDefault();
        this.props.search({Search:this.state.search})
        this.setState({search:""})
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
             [e.target.name]: e.target.value
           });
     }
    
     render(){
        return(
        <div>
        <div>
        Search by tag
        </div>
        <form>
        <input onChange={this.handleChange} className='input' type="text" name="search" value={this.state.search} />
        <span className='button'>
        <button className='button' onClick={this.handleRequest}> Search</button>
        </span>
        </form>
          <Detail info={this.props.results} />
        </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        results: state.search
    };
  }
  export default connect(mapStateToProps,actions)(Search);
