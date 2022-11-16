import React, { useRef } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

function Sidebar({ urls, activeChannel, setActiveChannel }) {

    const sidebarRef = useRef(null);

    const toggleNav = () => {
        console.log("toggling nav")
        sidebarRef.current.classList.toggle('-translate-x-full');
    }



    return (
        <>
            <div className=''>
                <nav className='flex items-center z-20 py-1 text-xl font-semibold sm:text-2xl md:text-3xl px-3 sm:px-4 md:px-5 space-x-3'>
                    <button
                        onClick={toggleNav}
                    >
                        <GiHamburgerMenu className='' />
                    </button>
                    <h3>WorldCup LiveStream 24/7</h3>
                </nav>
                <aside
                    ref={sidebarRef}
                    className={`absolute w-fit bg-gray-100 h-[600px] -translate-x-full md:translate-x-0 transition-all duration-300 flex flex-col md:pr-5`}>
                    {urls.map(({ name, url }, i) => (
                        <button
                            key={name + url}
                            onClick={() => {
                                setActiveChannel(i);
                                toggleNav();
                            }}
                            className={`text-left text-lg font-semibold px-3 sm:px-4 md:px-5 py-1 hover:bg-zinc-200 active:bg-zinc-300 rounded-md`}
                        >
                            {name}
                        </button>
                    ))}
                </aside>
            </div>
        </>
    )
}

export default Sidebar