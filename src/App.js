import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root':{
    margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

function App() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName:''},
  ]);

const handleChangeInput = (index, event) => {
 const values = [...inputFields];
 values[index][event.target.name]= event.target.value;
 setInputFields(values);
}

const handleAddFields = () => {
  setInputFields([...inputFields, {firstName: ''}])
}

const handleRemoveFields = (index) => {
  const values = [...inputFields];
  values.splice(index, 1);
  setInputFields(values);
}

  return (
    <Container>
      <form>
      <h4>USD - United States Dollars</h4>
        <h1>USD</h1>
        <form className={classes.root}>
          { inputFields.map((inputField, index) => (
            <div key={index}>
              <TextField 
              name="firstName"
              label="FirstName"
              variant="filled"
              value={inputField.firstName}
              onChange={event => handleChangeInput(index, event)}
              />
              <IconButton
              onClick={() => handleRemoveFields(index)}
              >
                <RemoveButton />
              </IconButton>
              
            </div>
          ))}
        </form>
        <IconButton className={classes.button}
        onClick={() => handleAddFields()}
        > 
          <AddIcon />
          Add More Currencies
        </IconButton>
      </form>
    </Container>
  );
}

export default App;
