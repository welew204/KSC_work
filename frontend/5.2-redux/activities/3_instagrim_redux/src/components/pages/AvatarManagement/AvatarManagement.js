import React, { useState } from "react";
import { connect } from "react-redux";

import { Link, Route } from "react-router-dom";
import BoldButton from "../../BoldButton/BoldButton.js";
import BoldInput from "../../BoldInput/BoldInput.js";
import Modal from "../../Modal/Modal.js";
import "./AvatarManagement.css";
import { actions } from "../../../reducers/avatars.js";

function AddAvatarModal(props) {
  return (
    <Modal>
      <BoldInput
        label='Paste in a URL for a new avatar image'
        error={props.error}
        onChange={props.onAvatarInputChange}
        value={props.avatarInput}
      />
      <Link to='/avatars/'>
        <BoldButton>Cancel</BoldButton>
      </Link>
      <BoldButton onClick={props.createNewAvatar}>Save</BoldButton>
    </Modal>
  );
}

function AvatarManagement(props) {
  const [avatarInput, setAvatarInput] = useState("");
  const [error, setError] = useState("");

  function onAvatarInputChange(ev) {
    console.log(ev.target.value);
    setAvatarInput(ev.target.value);
  }

  function deleteAvatar(avatarId) {
    console.log("need to delete:", avatarId);
    // TODO Finish this!
    const data = { id: avatarId };
    const action = actions.deleteAvatar(data);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);
    // Challenge 6
  }

  function createNewAvatar(ev) {
    console.log(avatarInput);
    if (!avatarInput.startsWith("http")) {
      setError("Enter a valid URL before submitting");
      return;
    }

    // TODO Finish this!
    const data = {
      imageSrc: avatarInput,
    };

    const action = actions.createAvatar(data);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);

    setAvatarInput("");
    setError("");
    // Redirect (fake react-router redirect, that is) back to the "homepage"
    props.history.push("/");

    // Challenge 5 solution

    // Clear the input (& any possible errors)

    // Redirect (fake react-router redirect, that is) to remove the modal
    props.history.push("/avatars/");
  }

  return (
    <div className='AvatarManagement'>
      <Link to='/avatars/add/'>
        <BoldButton>Add</BoldButton>
      </Link>

      <div className='AvatarManagement-avatarList'>
        {props.avatars.map((avatarInfo) => (
          <div className='AvatarManagement-avatarWrapper' key={avatarInfo.id}>
            <img
              src={avatarInfo.imageSrc}
              className='AvatarManagement-avatar'
              alt='Avatar'
            />
            <BoldButton onClick={() => deleteAvatar(avatarInfo.id)}>
              x
            </BoldButton>
          </div>
        ))}
      </div>

      {/*
          An example of a "Route" that can be in a page, and have a custom bit
          of JSX that is showed only when we visit a "subpage" of this route
        */}
      <Route path='/avatars/add/' component={AddAvatarModal} />
    </div>
  );
}

// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = (state) => ({
  avatars: state.avatars,
});
export default connect(mapStateToProps)(AvatarManagement);
