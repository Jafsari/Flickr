import React from 'react';
import '../assets/Detail.css';


const Detail = (props) => {
    const renderDetail = () => {
        if (props.info.results.items){
            return(
       props.info.results.items.map((item) => {
           return (
            <span className='media'>
             <img className='media' src={item.media.m} alt ='' />
            </span>
           )
       })
    )
    } else {
        return <div> </div>
    }
    }
 return(
    <div>
    {renderDetail()}
    </div>
    )

}

export default Detail