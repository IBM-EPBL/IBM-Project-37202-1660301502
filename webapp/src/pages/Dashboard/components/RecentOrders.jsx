import React from 'react'
import RecentOrderCard from './RecentOrderCard'

export default function RecentOrders() {
    return (
        <div className='recent-order-main col-md-5 col-12 p-3 '>
            <h5 className="mb-3">
                Recent Orders
            </h5>
            <div className="recent-orders-list">
                <RecentOrderCard />
                <RecentOrderCard />
                <RecentOrderCard />
                <RecentOrderCard />
                <RecentOrderCard />
                <RecentOrderCard />
            </div>
        </div >
    )
}
