import React, { useEffect, useState } from 'react';
import PersonReview from '../PersonReview/PersonReview';

const DisplayReview = ({id}) => {
    const [displayReview, setDisplayReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${id}`)
        .then((res) => res.json())
        .then((data) => setDisplayReview(data))
    }, [id])
    return (
        <div className="py-5 2xl:py-44 bg-blueGray-100 border-fuchsia-200 overflow-hidden w-9/12 mx-auto ">
            {displayReview.map((review) => (
                <PersonReview key={review._id} review={review} />
            ))}
        </div>
    );
};

export default DisplayReview;