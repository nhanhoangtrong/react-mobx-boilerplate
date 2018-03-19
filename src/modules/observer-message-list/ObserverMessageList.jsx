import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import ObserverMessage from './ObserverMessage';
import store from '../../store';

const ObserverMessageList = observer(({ messageList }) => (
    <>
        <h1>Msg</h1>
        {messageList.messages.map((msg, i) => (
            <ObserverMessage key={i} message={msg} />
        ))}
        <button
            onClick={() => {
                messageList.addMessage(Math.random().toString(), 'info');
            }}>
            Add Message
        </button>
        <button
            onClick={() => {
                messageList.removeMessage(messageList.count - 1);
            }}>
            Remove Message
        </button>
    </>
));

ObserverMessageList.propTypes = {
    messageList: PropTypes.any,
};

const MergedWithStore = () => {
    return <ObserverMessageList messageList={store.messageList} />;
};

export default MergedWithStore;
