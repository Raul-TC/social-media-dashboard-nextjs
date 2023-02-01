import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='w-[85%] m-auto max-w-[1440px]'>{children}</div>
    )
}

export default Layout