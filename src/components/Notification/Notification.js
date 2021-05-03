import React from 'react';
import { notificationText } from '../FeedbackStat.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <div>
        <p className={notificationText}>{message}</p>
    </div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
