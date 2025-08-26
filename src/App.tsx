import { useRef, useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import CardList from './components/CardList/CardList'
import { ThemeContext } from './hooks/theme-context'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const countRef = useRef(0);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Card title="Card Title1" description="This is a description of the card 1." id={1} />
        <Card title="Card Title2" description="This is a description of the card 2." id={2} />
        <CardList />
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => {
            countRef.current++;
            console.log(countRef.current);
          }}>
            countRef
          </button>
        </div>
        {/* <button onClick={() => count++}>Click Me</button>
      <p>Count: {count}</p> */}
      </ThemeContext.Provider>
    </>
  )
}

export default App
