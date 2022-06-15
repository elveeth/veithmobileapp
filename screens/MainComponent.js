import { useState } from 'react';
import { POEMS } from '../shared/poems';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [poems, setPoems] = useState(POEMS);

    return <DirectoryScreen poems={poems} />;
};

export default Main;