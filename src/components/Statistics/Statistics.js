import React from 'react';
import PropTypes from 'prop-types';
import {feedbackList,feedback, number} from "../FeedbackStat.module.css"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <ul className={feedbackList}>
        <li className={feedback}>
            <p>Good:<span className={number}>{good}</span></p>
        </li>
        <li className={feedback}>
            <p>Neutral:<span className={number}>{neutral}</span></p>
        </li>
        <li className={feedback}>
            <p>Bad:<span className={number}>{bad}</span></p>
        </li>
        <li className={feedback}>
            <p>Total:<span className={number}>{total}</span></p>
        </li>
        <li className={feedback}>
            <p>Positive feedback:<span className={number}>{positivePercentage}%</span></p>
        </li>
    </ul>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}


export default Statistics