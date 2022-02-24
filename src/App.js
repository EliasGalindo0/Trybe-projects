import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const defaultState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  hasTrunfo: false,
  cardSaved: [],
};

class App extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange(event) {
    const { name, type } = event.target;
    const value = type !== 'checkbox' ? event.target.value : event.target.checked;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }), () => this.isSaveButtonDisabled());
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      cardRare,
      cardSaved,
    } = this.state;

    const currentCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      cardRare,
    };
    const cards = [...cardSaved, currentCard];
    const superTrunfo = cards.some((card) => card.cardTrunfo);
    this.setState(defaultState, () => {
      this.setState({
        cardSaved: cards,
        hasTrunfo: superTrunfo,
      });
    });
  }

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    let disabled = false;
    const max = 90;
    const min = 0;
    const maxSum = 210;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (!cardName
      || !cardDescription
      || !cardImage
      || !cardRare
      || sum > maxSum
      || cardAttr1 > max
      || cardAttr1 < min
      || cardAttr2 > max
      || cardAttr2 < min
      || cardAttr3 > max
      || cardAttr3 < min) disabled = true;
    this.setState(() => ({
      isSaveButtonDisabled: disabled,
    }));
  }

  render() {
    const showCards = this.state;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { showCards.cardSaved.map((card) => (
          <Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
        ))}
      </div>
    );
  }
}

export default App;
