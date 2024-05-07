import { useLocation, useNavigate } from 'react-router-dom';

export function useLocationService() {
    const location = useLocation();
    const navigate = useNavigate();

    return { location, navigate };
}
