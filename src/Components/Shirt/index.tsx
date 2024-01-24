import './styles.css';
import { App as Canvas } from './Canvas';
import Overlay from './Overlay';

export default function index() {
  return (
    <>
      <Canvas />
      <Overlay />
    </>
  );
}
