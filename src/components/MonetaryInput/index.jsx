import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import React from 'react';
import TextField from '@material-ui/core/TextField';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      placeholder="R$ 0,00"
      decimalScale={2}
      decimalSeparator=","
      fixedDecimalScale
      thousandSeparator="."
      isNumericString
      prefix="R$ "
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function MonetaryInput({ id, label, value, inputRef }) {
  const [values, setValues] = React.useState({ label: value });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <TextField
      id={label}
      label={label}
      name={id}
      defaultValue={value}
      inputRef={inputRef}
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  );
}
