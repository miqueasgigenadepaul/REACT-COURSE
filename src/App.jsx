import {useState} from 'react'

// destructuring the properties of the object props
const Statistics = ({good, neutral, bad, total, average, positive}) => {
  
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}</p>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad 
  const average = (good * 1 + neutral * 0 + bad * (-1)) / total
  const positive = good / total 

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick = {() => setGood(good + 1)}>good</button>
      <button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick = {() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      average = {average}
      positive = {positive}
      />
    </div>
    )
}

export default App