import config from '../../config';
const Norm = () => (
  <>
    <h1>normal page component</h1>
    <h2>config:</h2>
    <pre>{JSON.stringify(config, null, 2)}</pre>
  </>
);

export default Norm;
