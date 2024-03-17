// import CountUp from 'react-countup/build/CountUp'
import './FunFacts.css';
function FunFacts({num , text}) {
  return (
    <div className='fun-facts'>
        <h2 className='count-number' >
           {num}
        </h2>
        <p>
            {text}
        </p> 
    </div>
  )
}

export default FunFacts