import React from 'react';
import { createRoot } from 'react-dom/client';
import Apps from './components/Apps';

import './styles/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<Apps />)