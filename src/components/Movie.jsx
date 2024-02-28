import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({ _, movie }) => {
    const [liked, setLiked] = React.useState(false)

    const like = () => {
        setLiked(!liked)
    }

    return (
        <>
            <div key={movie.id} className='relative inline-block w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto cursor-pointer m-2'>
                <img
                    className='w-full h-auto object-cover object-center block'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center text-wrap'>{movie?.title}</p>
                    <p onClick={like}>
                        {liked ?
                            <FaHeart className='absolute top-4 left-4 text-gray-300' /> :
                            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                        }
                    </p>
                </div>
            </div>
        </>
    )
}

export default Movie