import './styles.css';
import User from './userClass';
import Clock from './components/clock';
import { useState, useEffect } from 'react';


const hayashi = new User('hayashi');
console.log(hayashi.name);
//hayashi.sayHi();

function useTime() {
  const [time, setTime] = useState(() => new Date);
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  },[]);
  return time;
}



export default function App() {
  const time = useTime();
  return (
    <div>
      <Clock time={time.toLocaleTimeString()} />
      <Header>
        <h1 className="title">Title</h1>
      </Header>
      <Main />
      <Footer></Footer>
    </div>
  )
}

function Header({ children }) {
  return (
    <header className="header">Header<br/>
      {children }
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">Footer</footer>
  )
}

export function Main() {
  return (
    <main className="main">
      <h2>Main content</h2>
      <Content></Content>
    </main>
  )
}

function Content() {
  const handleHi = () => {
    hayashi.sayHi()
  }
  return(
    <>
      <p>This is the text.</p>
      <p>{hayashi.name}</p>
      <button onClick={handleHi}>sayhi</button>
    </>
  )
}