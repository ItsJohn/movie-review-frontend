import React from 'react';
import { MovieType } from '../../types';

type MovieCardProps = {
    movie: MovieType;
};

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <div>
            <h2>{movie.name}</h2>
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
        </div>
    )
}
