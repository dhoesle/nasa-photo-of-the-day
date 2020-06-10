import React from "react";

const Header = props  => {

    const { headerData } = props

    return (
        <div className='header-wrapper'>
            <span className='copyright'>
                {headerData.copyright}
            </span>
            <span className='date'>
                {headerData.date}
            </span>
            <span className='title'>
                {headerData.title}
            </span>
        </div>
    )
}
export default Header