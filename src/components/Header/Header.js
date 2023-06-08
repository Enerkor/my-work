import React from 'react';
import {ImSpoonKnife} from 'react-icons/im';

// import '../Header/Header.scss';

function Header() {
  return (
    <header className='header bg-center bg-no-repeat bg-cover mb-16' style={{backgroundImage: `url(https://assets.epicurious.com/photos/5c1146159ee3cf630f891235/16:9/w_2560%2Cc_limit/spiced-chickpeas-and-greens-frittata-recipe-BA-121218.jpg)`}}>
        <div className='layer  bg-black/[.5]'>
            <div className='conteiner'>
                <nav className='logo-wrapper py-9 flex justify-center'>
                    <div className='logo border-solid border-2 border-white rounded-full p-3 cursor-pointer'>
                        <ImSpoonKnife className='brand text-5xl text-white' />
                    </div>
                </nav>
                <div className='header-text p-28 text-center'>
                    <h1 className=' text-white mb-5 text-5xl'>Recipes for you</h1>
                    <p className='text-base text-white'>Find a recipe for every occasion</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header