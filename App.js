import { Provider } from 'react-redux'
import store from './app/store'
import ThunkComponent from './features/thunk/ThunkComponent';

export default function App() {
  return (
    <Provider store={store}>
      <ThunkComponent />
    </Provider>
  );
}

