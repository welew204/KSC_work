import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../reducers/avatars.js';

import { Link, Route } from 'react-router-dom'
import BoldButton from '../../BoldButton/BoldButton.js';
import BoldInput from '../../BoldInput/BoldInput.js';
import Modal from '../../Modal/Modal.js';
import './AvatarManagement.css';

function AvatarManagement(props) {
  const [avatarInput, setAvatarInput] = useState('');
  const [error, setError] = useState('');

  function onAvatarInputChange(ev) {
    setAvatarInput(ev.target.value);
  }

  function deleteAvatar(avatarId) {
    // TODO Finish this!

    // Challenge solution:
    const action = actions.deleteAvatar({id: avatarId});
    props.dispatch(action);
  }

  function createNewAvatar(ev) {
    if (!avatarInput.startsWith('http')) {
      setError('Enter a valid URL before submitting');
      return;
    }


    // TODO Finish this!

    // Challenge solution:
    const data = {
      imageUrl: avatarInput,
    };
    const action = actions.createAvatar(data);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);

    // Clear the input (& any possible errors)
    setError('');
    setAvatarInput('');

    // Redirect (fake react-router redirect, that is) to remove the modal
    props.history.push('/avatars/');
  }

  return (
    <div className="AvatarManagement">
      <Link to="/avatars/add/">
        <BoldButton>Add</BoldButton>
      </Link>

      <div className="AvatarManagement-avatarList">
        {
          props.avatars.map(avatarInfo => (
            <div className="AvatarManagement-avatarWrapper" key={avatarInfo.id}>
              <img
                src={avatarInfo.imageSrc}
                className="AvatarManagement-avatar"
                alt="Avatar"
              />
              <BoldButton onClick={() => deleteAvatar(avatarInfo.id)}>
                  x
              </BoldButton>
            </div>
          ))
        }
      </div>

      {/*
          An example of a "Route" that can be in a page, and have a custom bit
          of JSX that is showed only when we visit a "subpage" of this route
        */}
      <Route
        path='/avatars/add/'
        component={() => (
          <Modal>
            <BoldInput
              label="Paste in a URL for a new avatar image"
              error={error}
              onChange={onAvatarInputChange}
              value={avatarInput}
            />
            <Link to="/avatars/">
              <BoldButton>Cancel</BoldButton>
            </Link>
            <BoldButton onClick={createNewAvatar}>
                Save
            </BoldButton>
          </Modal>
        )}
      />
    </div>
  );
}

// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = state => ({
  avatars: state.avatars,
});
export default connect(mapStateToProps)(AvatarManagement);
