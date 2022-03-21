import React from 'react';

class HandleFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      rarity: 'todas',
      sTrunfo: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { name, type } = event.target;
    const value = type !== 'checkbox' ? event.target.value : event.target.checked;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  render() {
    const { filter, rarity, sTrunfo } = this.state;
    return (
      <div>
        <label htmlFor="filter">
          Filtros de busca
          <input
            data-testid="name-filter"
            id="filter"
            name="filter"
            type="text"
            value={ filter }
            onChange={ this.handleInput }
          />
          <select
            data-testid="rare-filter"
            id="rare"
            name="rarity"
            value={ rarity }
            onChange={ this.handleInput }
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
              checked={ sTrunfo }
              onChange={ this.handleInput }
            />
          </label>
        </label>
      </div>
    );
  }
}

export default HandleFilter;
