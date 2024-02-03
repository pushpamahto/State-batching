import React,{ useState ,useEffect} from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p style={{marginLeft:"750px",width:"100%"}}>Button is clicked {count} times</p>
      <button style={{marginLeft:"700px",width:"30%"}} onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
