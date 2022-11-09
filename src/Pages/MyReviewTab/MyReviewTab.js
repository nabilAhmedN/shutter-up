import React from 'react';

const MyReviewTab = ({review}) => {
    const { _id, serviceName, message, reviewer, img, service, rating, status } = review
    return (
        <tr>
            <td>
                <label>
                    <button>X</button>
                </label>
            </td>
            <td>{serviceName}</td>
            <td>{reviewer}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avater">
                        <div className="rounded-lg h-16 w-16">
                            {<img src={img} alt="" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <td>
                {rating}
            </td>
            <td>
                <button className='btn btn-ghost btn-xs'>
                    {
                        status ? status : "panding"
                    }
                </button>
            </td>
        </tr>
    );
};

export default MyReviewTab;