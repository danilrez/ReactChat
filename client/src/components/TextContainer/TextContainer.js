import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    {users ? (
      <div>
        <h5>People currently chatting:</h5>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}

    <div className="infoApp">
      <p>
        Realtime Chat Application{' '}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </p>
      <p>
        Created with React, Express, Node and Socket.IO{' '}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </p>
      <p>
        Try it out right now!{' '}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </p>
    </div>
  </div>
);

export default TextContainer;
