import React from 'react';
import PropTypes from 'prop-types';

class HandleFilter extends React.Component {
  render() {
    const { filter, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="filter">
          Filtros de busca
          <input
            data-testid="name-filter"
            id="filter"
            name="filter"
            type="text"
            cardName={ filter }
            onChange={ onInputChange }
          />
          <select
            data-testid="rare-filter"
            id="rare"
            name="rarity"
            cardRare={ filter }
            onChange={ onInputChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <label htmlFor="super-trunfo">
            Super Trunfo?
            <input
              data-testid="trunfo-filter"
              name="sTrunfo"
              id="super-trunfo"
              type="checkbox"
              cardTrunfo={ filter }
              onChange={ onInputChange }
            />
          </label>
        </label>
      </div>
    );
  }
}

HandleFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  // cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default HandleFilter;
