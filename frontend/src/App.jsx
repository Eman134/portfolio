import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Para scrollar a página para cima ao navegar em um link
import { useScrollToTop } from './services/scrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <FunctionScrollar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

function FunctionScrollar() {
  useScrollToTop();
  return null;
}
