import React, { useEffect, useReducer } from 'react';
import './App.scss';
import Home from './components/home/Home';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import CategoryPage from './components/category/CategoryPage';
import ProductPage from './components/products/ProductPage';
import LoginPage from './components/login/LoginPage';
import { Switch, Route } from 'react-router-dom';
import CategoryContext, { initialCategory } from './context/CategoryContext';
import AuthContext, { initialAuth } from './context/authContext';
import categoryReducer from './store/reducers/category';
import authReducer from './store/reducers/auth';
import {
  categorySend, categorySuccess, categoryFail, newSet, amazingSet, topSet, login
} from './store/actions';
import { useCookies } from 'react-cookie';

function App() {
  const [categoryState, dispatch] = useReducer(categoryReducer, initialCategory);
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuth);
  const value = { state: categoryState, dispatch: dispatch };
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const urls = [
          'http://5.9.249.45:8000/menu/',
          'http://5.9.249.45:8000/new_items',
          'http://5.9.249.45:8000/Amazing_Offers',
          'http://5.9.249.45:8000/Top_Products'
        ];

        const [categoryList, newList, amazingList, topList] =
          await Promise.all(urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();

          }));

        dispatch(categorySuccess(categoryList));
        dispatch(newSet(newList));
        dispatch(amazingSet(amazingList));
        dispatch(topSet(topList));

      } catch (error) {
        dispatch(categoryFail(error));
      }
    }
    if (cookies.token) {
      const fetchCart = async token => {
        const res = await fetch('http://5.9.249.45:8000/finance/MyShoppingCart/', {
          headers: {
            'Authorization': `jwt ${token}`
          }
        });
        const data = await res.json();
        console.log('CART', data);
      }
      fetchCart(cookies.token);
      dispatchAuth(login(cookies.token));
    }
    dispatch(categorySend());
    fetchCategory();
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ authState, dispatchAuth }}>
        <CategoryContext.Provider value={value}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact render={() => <LoginPage signup />} />
            <Route path="/cart" exact render={() => <CategoryPage cart />} />
            <Route path="/:category" exact render={(props) => <CategoryPage ads {...props} />} />
            <Route path="/:category/:subcategory" exact render={(props) => <CategoryPage products {...props} />} />
            <Route path="/:category/:subcategory/:product" exact component={ProductPage} />
          </Switch>
          <Footer />
        </CategoryContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;