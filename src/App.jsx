// COURSE INFO STEP 1
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>The course name is {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>Part 1: {props.part1}, number of exercises: {props.exercises1}</p>
      <p>Part 2: {props.part2}, number of exercises: {props.exercises2}</p>
      <p>Part 3: {props.part3}, number of exercises: {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div> 
      <p>The total number of exercises is {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content 
      part1 = {part1} 
      exercises1 = {exercises1} 
      part2 = {part2}
      exercises2 = {exercises2}
      part3 = {part3}
      exercises3 = {exercises3}
      />
      <Total 
      exercises1 = {exercises1}
      exercises2 = {exercises2}
      exercises3 = {exercises3}/>
    </div>
  )
}

export default App