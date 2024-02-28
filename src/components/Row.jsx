import axios from 'axios'
import React, { useEffect } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = React.useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slider = React.useRef(null)

    const slideLeft = () => {
        slider.current.scrollLeft -= 500;
    }
    const slideRight = () => {
        slider.current.scrollRight += 500;
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='absolute left-2 bg-white rounded-full text-black text-2xl md:text-4xl cursor-pointer z-50 hover:scale-110 transform transition duration-100 ease-in-out group-hover:opacity-100 opacity-0'
                />
                <div ref={slider} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((movie) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='absolute right-2 bg-white rounded-full text-black text-2xl md:text-4xl cursor-pointer z-50 hover:scale-110 transform transition duration-100 ease-in-out group-hover:opacity-100 opacity-0'
                />
            </div>
        </>
    )
}

export default Row