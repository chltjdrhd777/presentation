import Home from 'Pages/Home';
import About from 'Pages/About';
import Works from 'Pages/Works';
import Studying from 'Pages/Studying';
import Closing from 'Pages/Closing';
import { AnimatePresence } from 'framer-motion';

import { Routes, Route, useLocation } from 'react-router-dom';
import AnimationProvider, {
  Pathname,
} from 'Components/Provider/AnimationProvider';

function App() {
  const location = useLocation();

  return (
    <AnimationProvider pathname={location.pathname as Pathname}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/studying" element={<Studying />} />
          <Route path="/closing" element={<Closing />} />
        </Routes>
      </AnimatePresence>
    </AnimationProvider>
  );
}

export default App;
