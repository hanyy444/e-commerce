import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';


// Redux
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


// GraphQL - Apollo
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient, gql } from 'apollo-boost';

// graphql server
const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com',
})

// apollo cache
const cache = new InMemoryCache();

// apollo client
const client = new ApolloClient({
  link: httpLink,
  cache
})

// query graphql server
// client.query({
//   query: gql`
//     {
//       getCollectionsByTitle(title: "hats"){
//         id
//         title
//         items {
//           id
//           name
//           price
//           imageUrl
//         }
//       }
//     }
//   `
// }).then(response => console.log(response));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
      {/* </React.StrictMode> */}
    </Provider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
