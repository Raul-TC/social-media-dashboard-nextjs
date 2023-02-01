import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CountFollowers from './CountFollowers'

const Card = ({ icon, mediaName, userName, followers, type, isUp, recentNotify, arrow }) => {
    return (
        <div className='relative flex flex-col items-center dark:bg-card-light dark:text-text-light dark:hover:bg-[#dadeeb] hover:bg-[#45455c] bg-card-dark text-text-dark h-auto rounded overflow-hidden transition-colors ease-linear duration-300  w-full cursor-pointer  '>
            <span className={`${mediaName === 'facebook' ? 'bg-fb-color' : ''} ${mediaName === 'twitter' ? 'bg-tw-color' : ''} ${mediaName === 'instagram' ? 'bg-gradient-to-r from-ig-left-gradient to-ig-right-gradient' : ''} ${mediaName === 'youtube' ? 'bg-yt-color' : ''} h-[4px] w-full block absolute top-0`} />
            <span className='flex mt-8 mb-7'>
                <Image src={icon} height={20} width={20} alt={`icon_${mediaName}`} />
                <p className='ml-2 font-semibold'>@{userName}</p>
            </span>
            <span className='text-center'>
                <CountFollowers followers={followers} card={true} />
                <p className='uppercase space tracking-[.25em] mt-2'>{type}</p>
            </span>
            <span className='mb-6 mt-7' >
                <p className={`${isUp ? 'text-text-green-arrow' : 'text-text-red-arrow'}`}><Image src={arrow} width={12} height={15} className='inline-block' alt='arrow_stat' /> {recentNotify}Today</p>
            </span>
        </div>
    )
}

export default Card