// src/store.js
import { legacy_createStore as createStore } from 'redux';

import { dataReducer } from './dataReducer';

const store = createStore(dataReducer);

export default store;
