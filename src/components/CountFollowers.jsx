import React, { useEffect, useLayoutEffect, useState } from 'react'

const CountFollowers = ({ followers, card }) => {
    const [counter, setCounter] = useState(0)

    let animInterval;

    function startAnim() {
        animInterval = setInterval(animNumValue, 15, counter, followers);
    }

    function animNumValue(num, newValue) {
        let valor = num
        let diferencia = newValue - valor;

        if (counter >= followers) return
        if (diferencia > 1500) {
            valor += 519;
        } else if (diferencia > 400) {
            valor += 200;
        } else if (diferencia > 200) {
            valor += 100;
        } else if (diferencia > 100) {
            valor += 20;
        }
        else {
            valor++;
        }
        setCounter(valor)
    }

    useEffect(() => {
        if (!(counter >= followers)) startAnim()
        return (() => {
            clearInterval(animInterval)
        })
    }, [counter])
    return (
        <p className={`${card ? 'text-[4rem] tracking-[3px]' : 'text-4xl md:text-4xl '} font-bold dark:text-titles-light dark:group-hover:text-white text-titles-dark `}>{`${counter.toString().replace('000', "k")}`}</p>
    )
}

export default CountFollowers