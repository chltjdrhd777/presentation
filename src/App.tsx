import Home from 'Pages/Home';
import About from 'Pages/About';
import Works from 'Pages/Works';
import Studying from 'Pages/Studying';
import Closing from 'Pages/Closing';
import { AnimatePresence, motion } from 'framer-motion';

import { Routes, Route, useLocation } from 'react-router-dom';
import AnimationProvider from 'Components/Provider/ColorProvider';
import { PathnameType } from 'Constants/navigation';
import useKeyboardNavigation from 'hook/useKeyboardNavigation';

function App() {
  const location = useLocation();
  useKeyboardNavigation();

  return (
    <AnimationProvider pathname={location.pathname as PathnameType}>
      <AnimatePresence mode="wait" initial={true}>
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
