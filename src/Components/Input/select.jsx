import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SiteSelect = (props) => {
  return (
    <>
        {props.label?<label className={`site-label ${props.labelClass?props.labelClass:''}`}>{props.label}{props.requiredStar?<span className='red-text'>*</span>:''}</label>:''}
        {props.oneIcon?(
          <div className='position-relative'>
            <FontAwesomeIcon className='left-icon l-grey-text' icon={props.leftIcon} />
            {/* <input type={props.type} readOnly={props?.readOnly} onChange={props?.onChange} placeholder={props.placeholder} value={props?.value} className={`site-input ps-5 ${props.className?props.className:''}`} /> */}
            <select name={props.name} id={props.id} className={`site-input ps-5 ${props.className?props.className:""}`}>
                {props.items.map(item=>(
                  <option value={item.value} key={item.id}>{item.option}</option>
                ))}
            </select>
          </div>
        ):(
          <select name={props.name} id={props.id} className={`site-input ${props.className?props.className:""}`}>
              {props.items.map(item=>(
                <option value={item.value} key={item.id}>{item.option}</option>
              ))}
          </select>
        )}
    </>
  )
}
