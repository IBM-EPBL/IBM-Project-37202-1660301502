import React from 'react'
import bag from "../../../assets/images/bag.png"
import cancelled from "../../../assets/images/cancelled.png"
import completed from "../../../assets/images/completed.png"
import processing from "../../../assets/images/processing.png"
import outfordelivery from "../../../assets/images/out-for-delivery.png"
import StatCard from "./StatCard"
export default function Stats() {
    return (
        <div className="row dash-top-cards justify-content-lg-between justify-content-md-start ">
            <StatCard title={"Open Orders"} icon={bag} value="60" bgColor={"#09433a"} />
            <StatCard title={"Processing"} icon={processing} value="60" bgColor={"#063034"} />
            <StatCard title={"Delivered"} icon={completed} value="07" bgColor={"#002F5F"} />
            <StatCard title={"Shipped"} icon={outfordelivery} value="30" bgColor={"#400835"} />
            <StatCard title={"Cancelled"} icon={cancelled} value="10" bgColor={"#5F1624"} />
        </div>
    )
}
