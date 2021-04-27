import React from 'react';
import PropTypes from 'prop-types';
import {btnCont,btn} from "../FeedbackStat.module.css"

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <>
        <div className={btnCont}>
            <button onClick={onLeaveFeedback} key={options[0]} id={options[0]} className={btn}>
                Good
            </button>
            <button onClick={onLeaveFeedback} key={options[1]} id={options[1]} className={btn}>
                Neutral
            </button>
            <button onClick={onLeaveFeedback} key={options[2]} id={options[2]} className={btn}>
                Bad
            </button>
        </div>
    </>
)

FeedbackOptions.propTypes = {
    options: PropTypes.oneOf(['good','neutral','bad']).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions