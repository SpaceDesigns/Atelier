import React, { useState } from 'react';
import axios from 'axios';
import Star from './stars.jsx';
import {Button} from '../../Styles/Reviews/bars.styled.js';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

export default function Review({ review }) {
  const reviewDate = new Date(review.date).toLocaleDateString('en-US', options);
  const [helpCount, setHelpCount] = useState(review.helpfulness);
  // const [notClicked, setClick] = useState(true); //One click per user

  const helpHandler = () => {
    axios.put(`/reviews/mark/helpful?review_id=${review.review_id}`)
      .then((response) => {
        // console.log(response);
        setHelpCount(helpCount + 1);
        // setDidClick(false);
      })
      .catch((err) => { console.log(err); });
  };

  const reportHandler = () => {
    axios.put(`/reviews/mark/report?review_id=${review.review_id}`)
      .then((response) => {
        // console.log(response);
        // setDidClick(false);
      })
      .catch((err) => { console.log(err); });
  };
  console.log(review);
  return (
    <div>
      <Star rating={review.rating} review_id={review.review_id} />
      <small>
        {`${review.reviewer_name},  ${reviewDate}`}
      </small>

      <h3>{review.summary.slice(0, 250)}</h3>

      <p>{review.body}</p>

      {review.recommend && <small>{`I recommend this product  `}</small>}
      {review.response && <p>{review.response}</p>}
      <small>
        {`Helpful?  `}
        <Button type="button" onClick={helpHandler}>Yes</Button>
        {`(${helpCount})`}
        |
        <Button type="button" onClick={reportHandler}>Report</Button>
      </small>
    </div>
  );
}
