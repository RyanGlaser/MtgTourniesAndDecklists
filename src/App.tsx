import { ComponentProps, type Component } from 'solid-js';
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import './App.scss'
import HomePage from './pages/HomePage/home-page';
import UserProfilePage from './pages/UserProfilePage/user-profile-page';
import CardDatabasePage from './pages/CardDatabasePage/card-database-page';
import GlobalHeader from './components/GlobalHeader/global-header';
import AboutPage from './pages/AboutPage/about-page';

// TODO: fix the eslint issue not sure why syntax is wrong 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App: Component<ComponentProps<any>> = (props) => (
    <>
    <GlobalHeader />
    {props.children}
    </>
  );

render(() => (  
<Router root={App}>
<Route path="/" component={HomePage} />
<Route path="/user-profile" component={UserProfilePage} />
<Route path="/cards" component={CardDatabasePage} />
<Route path="/about" component={AboutPage} />
{/* <Route path="/users" component={Users} /> */}
{/* <Route path="*paramName" component={NotFound} /> */}
</Router>
), 
document.getElementById('root')!);

export default App;
