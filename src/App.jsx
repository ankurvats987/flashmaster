import "./sass/App.scss";
import Home from "./pages/home/home";
import CreateDeck from "./pages/create/create-deck";
import DeckView from "./pages/view/deck-view";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";

import AppProvider from "./context/app-provider";
import DeckDetail from "./pages/deckDetail/deck-detail";
import Layout from "./layout/layout";
import NotFound from "./components/not-found";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/create-deck/:pathParam?"
        element={<CreateDeck key={window.location.pathname} />}
      />
      <Route path="/view-deck" element={<DeckView />} />
      <Route
        path="/view-deck/:deckId"
        element={<DeckDetail />}
        errorElement={
          <NotFound errorMessage="This card does not exist. Please try again." />
        }
      />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/create-deck/:pathParam" element={<CreateDeck />} /> */}
    </Route>
  )
);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={Router} />
    </AppProvider>
  );
};

export default App;
