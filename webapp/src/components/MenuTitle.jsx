import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dropDown from "../assets/icons/dropdown.svg"
import { useLocation } from 'react-router-dom'

export default function MenuTitle({ e, onClick, }) {
    const [isExpanded, setExpanded] = useState(e.expanded)
    const history = useLocation()
    const [active, setActive] = useState(e.childrens.findIndex((e) => e.url === window.location.pathname))
    useEffect(() => {
        console.log('> Router', history.pathname)
        setActive(e.childrens.findIndex((e) => e.url === window.location.pathname))
        if (active != null) {
            setExpanded(true)
        }
        else {
            setExpanded(false)
        }
    }, [history.pathname, e.childrens, active])


    return (


        < div >
            <div className='menu-title my-1' onClick={() => {
                setExpanded(!isExpanded)
            }}>
                <Link to="/"><div className="item-title p-1  " key={e.name}>
                    <img src={e.icon} className="m-2 " width={"20px"} alt="logo" />
                    <h5 className="mx-1">{e.name}</h5>
                </div>
                </Link>
                {e.childrens.length > 0 && <img src={dropDown} width="10px" alt="dropdown" />}
            </div>
            {isExpanded ? e.childrens.map((e, i) => <Link to={e.url ?? ''} key={i} onClick={onClick}><h6 className={`menu-childrens ${active === i ? 'active-menu-item' : null}`} key={e.name}>•  {e.name}</h6></Link>) : null}
        </ div>
    )
}