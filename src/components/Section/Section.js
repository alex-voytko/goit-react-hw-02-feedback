import React from 'react';
import PropTypes from 'prop-types';
import {sectionTitle} from "../FeedbackStat.module.css"

const Section = ({title, children}) => (
    <>
        <h2 className={sectionTitle}>{title}</h2>
            {children}
    </>
)

Section.propTypes = {
    title: PropTypes.string.isRequired
}
export default Section