import './App.css';
import Header from './parts/header';
import Navigation from './parts/nav';
import Profile from './parts/profile';
import Dialogs from './parts/dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './parts/news';
import Music from './parts/music';
import Settings from './parts/settings';

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs data={props.data} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
