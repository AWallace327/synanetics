import { QueryClient, QueryClientProvider } from 'react-query';

import 'App.css';
import Layout from 'ui/layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBurger,
  faCakeCandles,
  faGlassWater,
  faMugHot,
  faPizzaSlice,
  faMinus,
  faPlus,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBurger,
  faCakeCandles,
  faGlassWater,
  faMugHot,
  faPizzaSlice,
  faMinus,
  faPlus,
  faTrash
);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Layout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
