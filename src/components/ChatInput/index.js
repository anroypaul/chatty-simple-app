import React, { useState } from 'react';
import { useStateValue } from '../../StateContext';
import './style.css';
import db from '../../firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState();
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.email,
      userImage: user?.photoURL,
    });

    setInput('');
  };

  return (
    <div className="chatInput">
      {channelId !== null ? (
        <>
          <form>
            <input
              value={input}
              placeholder={`Message #${channelName}`}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendMessage}>
              SEND
            </button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ChatInput;
