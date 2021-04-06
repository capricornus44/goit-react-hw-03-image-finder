import { Component } from 'react';
import Loader from 'react-loader-spinner';
import scss from './Spinner.module.scss';

class Spinner extends Component {
  render() {
    return (
      <Loader
        className={scss.loader}
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}

export default Spinner;
