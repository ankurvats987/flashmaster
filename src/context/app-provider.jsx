import CardContextProvider from "./card/card-context-provider";
import DeckContextProvider from "./deck/deck-context-provider";

const AppProvider = ({ children }) => {
  return (
    <CardContextProvider>
      <DeckContextProvider>{children}</DeckContextProvider>
    </CardContextProvider>
  );
};

export default AppProvider;
