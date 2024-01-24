import { PathnameType } from 'Constants/navigation';
import { useLocation } from 'react-router-dom';
import { getPathColor } from 'utils/getPathColor';

export default function useGetPathColor() {
  const location = useLocation();
  const pathname = location.pathname as PathnameType;
  const pathColor = getPathColor(pathname);

  return pathColor;
}
