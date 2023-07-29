import './styles.css'
import User from './userClass'

const hayashi = new User('hayashi');
console.log(hayashi.name);
hayashi.sayHi();

export default function App() {
  return (
    <div>
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
  return(
    <>
      <p>This is the text.</p>
      <p>{hayashi.name}</p>
      <button>sayhi</button>
    </>
  )
}