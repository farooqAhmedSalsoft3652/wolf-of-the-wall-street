import React from 'react'
import { Table } from 'react-bootstrap'
import './index.css'

export const SiteTable = (props) => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    {props.tableHeadings.map(item=>(
                        <th>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.tableBody.map(e=>(
                    <tr>
                        {e.type?<td>{e.type}</td>:""}
                        {e.date?<td>{e.date}</td>:""}
                        {e.expiryDate?<td>{e.expiryDate}</td>:""}
                        {e.price?<td className="table-price">{e.price}</td>:""}
                        {e.status=="Active"?<td><span className='table-tag green-table-tag'>{e.status}</span></td>:e.status=="Inactive"?<td><span className='table-tag red-table-tag'>{e.status}</span></td>: ""}
                    </tr>
                ))}
            </tbody>
        </Table>

    )
}
