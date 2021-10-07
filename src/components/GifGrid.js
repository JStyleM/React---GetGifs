// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGif(category);

    return (
        <>
        <h2>{ category }</h2>
        <h3 className='animate__animated animate__flash'>{ loading && 'Cargando' }</h3>
        <div className='card-grid'>
            {
                images.map((img) => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }/>
                ))        
            }
        </div>
        </>
    )
}
