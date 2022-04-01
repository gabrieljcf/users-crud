import { ApolloProvider } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";
import { client } from "./lib/apollo";
import { GlobalStyle } from "./styles/global";

export function App() {
    return (
        <ApolloProvider client={client}>
            <NewUserForm />
            <GlobalStyle />
        </ApolloProvider>
    );
}