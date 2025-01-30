```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/about/details">Go to Details</Link>
    </>
  );
}

function AboutDetails() {
  let { slug } = useParams();
  return <h1>About Details: {slug}</h1>
}

function NotFound() { return <h1>404</h1>; }

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="details/:slug" element={<AboutDetails />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
export default App;
```