import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt='Loading...' />
      <br />
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Spinner;
