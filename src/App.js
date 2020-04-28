import React, { useEffect, useReducer } from "react";
import "./App.scss";
import Home from "./components/home/Home";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import CategoryPage from "./components/category/CategoryPage";
import ProductPage from "./components/products/ProductPage";
import LoginPage from "./components/login/LoginPage";
import { Switch, Route } from "react-router-dom";
import CategoryContext, { initialCategory } from "./context/CategoryContext";
import AuthContext, { initialAuth } from "./context/authContext";
import CartContext, { initialCart } from "./context/CartContext";
import categoryReducer from "./store/reducers/category";
import authReducer from "./store/reducers/auth";
import cartReducer from "./store/reducers/cart";
import {
  categorySend,
  categorySuccess,
  categoryFail,
  newSet,
  amazingSet,
  topSet,
  login,
  setCart,
} from "./store/actions";
import { useCookies } from "react-cookie";
import CartPage from "./components/cart/CartPage";

function App() {
  const [categoryState, dispatch] = useReducer(
    categoryReducer,
    initialCategory
  );
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuth);
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCart);
  const value = { state: categoryState, dispatch: dispatch };
  const [cookies, setCookie, removeCookie] = useCookies(["token", "cart"]);

  useEffect(() => {
    const asyncFunc = async (item) => {
      const res = await fetch(
        "http://5.9.249.45:8000/finance/MyShoppingCart/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `jwt ${authState.token}`,
          },
          body: JSON.stringify({ item: item.id, quantity: item.quantity }),
        }
      );
      return res.json();
    };

    const syncCartWithBackend = async () => {
      try {
        await Promise.all(cartState.cartItems.map(item => asyncFunc(item)));
      } catch (error) {
        console.log(error);
      }
    };
    if (authState.token) syncCartWithBackend();
  }, [authState.token]);

  useEffect(() => {
    async function fetchCategory() {
      try {
        const urls = [
          "http://5.9.249.45:8000/menu/",
          "http://5.9.249.45:8000/new_items",
          "http://5.9.249.45:8000/Amazing_Offers",
          "http://5.9.249.45:8000/Top_Products",
        ];

        const [categoryList, newList, amazingList, topList] = await Promise.all(
          urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
          })
        );

        dispatch(categorySuccess(categoryList));
        dispatch(newSet(newList));
        dispatch(amazingSet(amazingList));
        dispatch(topSet(topList));
      } catch (error) {
        dispatch(categoryFail(error));
      }
    }

    if (cookies.cart) {
      dispatchCart(setCart(cookies.cart));
    }

    if (cookies.token) {
      dispatchAuth(login(cookies.token));
    }

    dispatch(categorySend());
    fetchCategory();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ authState, dispatchAuth }}>
        <CategoryContext.Provider value={value}>
          <CartContext.Provider value={{ cartState, dispatchCart }}>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LoginPage} />
              <Route
                path="/signup"
                exact
                render={(props) => <LoginPage signup {...props} />}
              />
              /> */}
              <Route path="/cart" exact component={CartPage} />
              <Route
                path="/:category"
                exact
                render={(props) => <CategoryPage ads {...props} />}
              />
              <Route
                path="/:category/:subcategory"
                exact
                render={(props) => <CategoryPage products {...props} />}
              />
              <Route
                path="/:category/:subcategory/:product"
                exact
                component={ProductPage}
              />
            </Switch>
            <Footer />
          </CartContext.Provider>
        </CategoryContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
