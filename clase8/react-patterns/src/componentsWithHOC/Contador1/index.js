import { withCounter  } from '../../HOC/withCounter'


const Contador1 = ({ 
  counter,
  handleSetCounter,
  title
 }) => {
    return (
      <div>
        <h1>{title} {counter}</h1>
        <button onClick={handleSetCounter}>
          Counter
        </button>
      </div>
    )
  }

  export default withCounter(Contador1, {initialValues: 8})