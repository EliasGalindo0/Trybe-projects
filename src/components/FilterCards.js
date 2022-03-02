import React from 'react';
import PropTypes from 'prop-types';

class FilterCards extends React.Component {
  render() {
    const { className, name, type, id, label, value, onInputChange, testId } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          className={ className }
          value={ value }
          name={ name }
          type={ type }
          onInputChange={ onInputChange }
          data-testid={ testId }
          id={ id }
        />
      </label>
    );
  }
}

FilterCards.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

FilterCards.defaultProps = {
  type: 'text',
  label: null,
};

export default FilterCards;
