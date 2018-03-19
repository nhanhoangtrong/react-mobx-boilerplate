import MessageList from './models/MessageList';

// Initializing store goes first
const store = {
    messageList: new MessageList(),
};

// Add some example messages
store.messageList.addMessage('Hello World!', 'error');

export default store;
window.store = store;
