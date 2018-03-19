import React from 'react';
import PropTypes from 'prop-types';

const getMessageBgColor = (type) => {
    switch (type) {
        case 'info':
            return '#17a2b8';
        case 'success':
            return '#28a745';
        case 'warning':
            return '#ffc107';
        case 'error':
            return '#dc3545';
        default:
            return '#007bff';
    }
};

const Message = ({ message }) => {
    const bgColor = getMessageBgColor(message.type);

    return (
        <div
            style={{
                color: '#fff',
                backgroundColor: bgColor,
                padding: '1rem',
                margin: '0.5rem',
                borderRadius: 4,
            }}>
            Message: {message.title}
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.any,
};

export default Message;
