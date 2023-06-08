import React, { useState } from 'react';
import {BsSearch} from 'react-icons/bs';

import { useGetPosts } from '../../service/Service';
import Spinner from '../Spinner/Spinner';
import '../List/List.scss';

function List() {
    const [search, setSearch] = useState();

    const {data, isLoading, isFetching, refetch} = useGetPosts(search);

  return (
    <div className='conteiner'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper'>
                <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type='text' 
                placeholder='Search...' />
                <button onClick={() => refetch()}><BsSearch /></button>
            </div>
        </div>
        <div className='flexbox'>
            {
                isLoading || isFetching ? <Spinner /> :
                data && data.hits.map((item,index) =>(
                    <div key={index} className='flex-item'>
                        <div className='img-wrapper'>
                            <img src={item.recipe.image} alt={item.recipe.label}/>
                        </div>
                        <p>{item.recipe.label}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default List