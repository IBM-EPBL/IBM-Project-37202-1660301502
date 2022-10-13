import React from 'react'
import Potato from "../../../assets/temp/potato.png"
import { OrderStatusBadge } from './orderStatusBadge'

export default function RecentOrderCard() {
    return (
        <div className="recent-item-card p-2">

            <div className="row justify-content-between">
                <div className="col">
                    <span > Order Id : #8817260</span>
                </div>
                <div className="col text-end">
                    <span >Date : 12 Sept 2022 , 9:20 PM</span></div>
            </div>
            <h6 className="mt-3 row">
                <div className="col-9 text-start">
                    <img src={Potato} width="30px" className='mr-3' alt="prod" />
                    <span className='mx-2' > Horlicks 500Gm Pack of 3</span>
                </div>
                <div className="col-3 text-end">
                    <span ><OrderStatusBadge status={"Cancelled"} /></span></div>
            </h6>
        </div>
    )
}
