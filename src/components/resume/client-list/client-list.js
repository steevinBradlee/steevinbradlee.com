import React from 'react';
import PropTypes from 'prop-types';

import './client-list.scss';

const ClientList = ({ clients }) => (
  <div className="client-list">
    <div className="client-list-label">Clients</div>
    <ul>
      {clients.map(client => (
        <li className="client" key={client.name}>
          <div className="client-heading">
            <span className="client-name">{client.name}</span>
            {client.industry && (
              <span className="client-industry">{client.industry}</span>
            )}
          </div>
          <div className="body">{client.description}</div>
          {client.tech && <div className="client-tech">{client.tech}</div>}
        </li>
      ))}
    </ul>
  </div>
);

ClientList.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      industry: PropTypes.string,
      description: PropTypes.string.isRequired,
      tech: PropTypes.string,
    }),
  ).isRequired,
};

export default ClientList;
