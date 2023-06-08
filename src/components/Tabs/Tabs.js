import React, { useState } from 'react';

import { CiPizza } from 'react-icons/ci';
import { GiNoodles, GiFruitBowl, GiCheckMark} from 'react-icons/gi';
import { MdOutlineIcecream } from 'react-icons/md';

import { fetchData } from '../../service/Service';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import '../Tabs/Tabs.scss';


function Tabs() {
    const [active, setActive] = useState('Pizza');
    const [tabsData, setTabsData] = useState('')
    const [tabsLabel, setTabsLabel] = useState([
        {
            name: 'Pizza',
            icon: <CiPizza />,
            id: '687b61a316de39be04b86911cff4dfe6',

        },
        {
            name: 'Noodles',
            icon: <GiNoodles />,
            id: 'bbfc1a248bd6fe277e35fe01027de91f',

        },
        {
            name: 'Desert',
            icon: <GiFruitBowl />,
            id: 'bc865476ffe2b8a03fbe9aee2f739740',

        },
        {
            name: 'Ice cream',
            icon: <MdOutlineIcecream />,
            id: '7ec8f5551e74e6050e5ca3290e4654ef',

        }
    ])

    const { isLoading, isFetching } = useQuery()

    const handleClick = (name, id) => {
        setActive(name)
        fetchData(id).then((response) => {
            setTabsData(response)
        })
    }

    useQuery('post', () => {
        fetchData(tabsLabel[0].id).then((response) => {
            setTabsData(response)
        })
    }, {
        refetchOnWindowFocus: false,
    })

  return (
    <div className='conteiner'>
        <h1 className='recipeHeading'>What would you like to have</h1>
        <div className='tabs'>
            {tabsLabel.map((item, index) => (
                <div onClick={() => handleClick(item.name, item.id)} key ={index} className={`tablist ${active === item.name ? 'active' : ''}`}>
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        <div className='recipe-banner flex justify-center'>
            {isLoading || isFetching ? <Spinner /> : tabsData !== '' && <>
            <div className='left-col'>
                <span className='badge'>{tabsData.recipe.cuisineType[0].toUpperCase()}</span>
                <h1>{tabsData.recipe.label}</h1>
                <p><strong>Recipe by:</strong><small>{tabsData.recipe.source}</small></p>
                <h3>Ingredients</h3>
                <div className='ingredients'>
                    <ul>
                        {tabsData.recipe.ingredientLines.map((list, index) => (
                            <li key={index}><GiCheckMark /><span>{list}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='right-col'>
                <div className='img-wrapper'>
                    <img src={tabsData.recipe.image} alt={tabsData.recipe.label} />
                </div>
            </div>
            </>}
        </div>
    </div>
  )
}

export default Tabs