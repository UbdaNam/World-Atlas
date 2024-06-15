import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CountryInfoPage from './pages/CountryInfoPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='countries/:country' element={<CountryInfoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
