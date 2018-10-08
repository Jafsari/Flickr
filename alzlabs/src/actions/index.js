import axios from 'axios';
import { 
    SET_SEARCH_SUCCESS, SET_SEARCH_LOADING, SET_SEARCH_FAIL, // SEARCH
 } from './types.js'


export function search(data){
    console.log(this.data)
    let BASE_URL = 'http://localhost:9000/api/flickr'
    return dispatch => {
     dispatch(setSearchLoading('loading'))
    return axios.post(BASE_URL,data).then(res => {
      const information = res.data;
      return dispatch(setSearch(information))
     }).catch(e => {
      console.log(e)
      return dispatch(setSearchFail(`${e}`))
     })
    }
  }
 export function setSearch(information){
    return{
      type:SET_SEARCH_SUCCESS,
      information
    }
  }

  export function setSearchLoading(information){
      return{
          type:SET_SEARCH_LOADING,
          information
      }
  }

  export function setSearchFail(information){
      return{
          type:SET_SEARCH_FAIL,
          information
      }
  }