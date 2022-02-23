import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Adicionar nova Carta</h2>
        <label htmlFor="card-name">
          Nome
          <input data-testid="name-input" id="card-name" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea data-testid="description-input" id="description" />
        </label>
        <label htmlFor="first-attribute">
          Attr01
          <input data-testid="attr1-input" id="first-attribute" type="number" />
        </label>
        <label htmlFor="second-attribute">
          Attr02
          <input data-testid="attr2-input" id="second-attribute" type="number" />
        </label>
        <label htmlFor="third-attribute">
          Attr03
          <input data-testid="attr3-input" id="third-attribute" type="number" />
        </label>
        <label htmlFor="src-img">
          Imagem
          <input data-testid="image-input" id="src-img" />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" id="trunfo" type="checkbox" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </div>
    );
  }
}

export default Form;
