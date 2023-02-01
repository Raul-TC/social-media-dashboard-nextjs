import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const ToogleTheme = () => {
    const [darkTheme, setDarkTheme] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("theme") === 'true') {
            setDarkTheme(true)
            document.documentElement.classList.add('dark')
        } else {
            setDarkTheme(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const handleTheme = () => {
        if (darkTheme) {
            setDarkTheme(false)
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', false)
        } else {
            setDarkTheme(true)
            localStorage.setItem('theme', true)
            document.documentElement.classList.add('dark')
        }
    }
    return (
        <>
            <Head>
                <meta name="theme-color" content={darkTheme ? '#F8F8FA' : '#171723'} />
            </Head>
            <div className='flex justify-between md:justify-start items-center md:gap-3'>
                <h2 className='font-bold'>Dark Mode</h2>
                <span className={`w-16 h-8 rounded-full ${darkTheme ? 'bg-toggle-light hover:bg-gradient-to-r  from-toogle-gradient-left to-toogle-gradient-right ' : ' bg-gradient-to-r from-toogle-gradient-left to-toogle-gradient-right'}  transition-all ease-in-out duration-500 flex flex-col justify-center`}>
                    <span onClick={handleTheme} className={`w-6 h-6 cursor-pointer rounded-full dark:bg-white bg-toggle-dark transition-all ease-in-out duration-500  ${darkTheme ? 'ml-9' : 'ml-1'}`}></span>
                </span>
            </div>
        </>
    )
}

export default ToogleTheme