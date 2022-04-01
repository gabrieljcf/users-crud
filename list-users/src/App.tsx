import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { List } from "./components/List";
import { GlobalStyle } from "./styles/global";


export function App() {
    return (
        <ApolloProvider client={client}>
            <List />
            <GlobalStyle />
        </ApolloProvider>
    );
}