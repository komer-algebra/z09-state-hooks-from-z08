import PropTypes from 'prop-types';
const Paragraf = ({name, age}) => <p>Ovo je funkcijska komponenta paragrafa koja ispisuje jednog korisnika: {name} ({age})</p>

Paragraf.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default Paragraf;
