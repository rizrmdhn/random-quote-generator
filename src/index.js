import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Apps from './components/Apps';

import './styles/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<Apps />)