import React from 'react'
import './menu-item.scss'
import {withRouter} from 'react-router-dom'

const MenuItem =({title , key ,imageUrl,size ,match,history,linkUrl})=>{
    return(
       
                    <div className={ `menu-item  ${size}`} key={key}   onClick={() => history.push(`${match.url}${linkUrl}`)} >
                        <div  className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>                        <div className=" content" >
                            <h1 className="title">{title.toUpperCase()}</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>
               
    )
}
export default withRouter(MenuItem);