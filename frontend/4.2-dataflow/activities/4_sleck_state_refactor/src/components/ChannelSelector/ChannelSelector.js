import React, { useState } from "react";
import "./ChannelSelector.css";

function ChannelSelector(props) {
  /* function selectChannel(channelName) {
    setSelectedChannel(channelName);
  } */

  return (
    <div className='ChannelSelector'>
      <div className='ChannelSelector-channelHeader'>All Channels</div>
      {props.channels.map((channelName, index) =>
        props.selectedChannel === channelName ? (
          <div
            key={index}
            className='ChannelSelector-channel ChannelSelector-channel--selected'>
            # {channelName}
          </div>
        ) : (
          <div
            onClick={() => props.handleChannelSelect(channelName)}
            key={index}
            className='ChannelSelector-channel'>
            # {channelName}
          </div>
        )
      )}
    </div>
  );
}

export default ChannelSelector;
