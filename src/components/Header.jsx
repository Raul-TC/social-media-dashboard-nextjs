import React from 'react'
import Layout from './Layout'
import ToogleTheme from './ToogleTheme'

const Header = () => {
    return (
        <header className='dark:bg-header-light dark:text-text-light bg-header-dark text-text-dark w-full h-64 md:h-[280px] rounded-b-3xl pt-10'>
            <Layout>
                <div className='flex flex-col md:flex-row justify-between md:items-center'>
                    <div>
                        <h1 className='dark:text-titles-light text-titles-dark text-2xl md:text-4xl mb-1 font-bold'>Social Media Dashboard</h1>
                        <p className='font-bold'> Total Followers: 23,004</p>
                    </div>
                    <hr className='dark:bg-slate-600 bg-slate-200 h-[2px] md:hidden my-5' />
                    <ToogleTheme />
                </div>
            </Layout>
        </header>
    )
}

export default Header