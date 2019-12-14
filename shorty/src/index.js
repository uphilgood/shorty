import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const wsLink = new WebSocketLink({
    uri: 'wss://subscriptions.us-west-2.graph.cool/v1/ck44kr3zo4p210122vr20vl7g',
    options: {
        reconnect: true
    }
});

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/ck44kr3zo4p210122vr20vl7g'
 });

const link = split(({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const withApolloProvider = Comp => (
     <ApolloProvider client={client}>{Comp}</ApolloProvider>
     );


     ReactDOM.render(withApolloProvider(<App />),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();