import { ComponentProps, type Component } from 'solid-js';
import { render } from "solid-js/web";
import { Router, Route, A } from "@solidjs/router";
import './App.scss'
import HomePage from './pages/HomePage/home-page';
import UserProfilePage from './pages/UserProfilePage/user-profile-page';
import CardDatabasePage from './pages/CardDatabasePage/card-database-page';
import GlobalHeader from './components/GlobalHeader/global-header';
import AboutPage from './pages/AboutPage/about-page';

const App: Component<ComponentProps<any>> = (props) => (
    <>
    <GlobalHeader />
    {props.children}
    </>
  );

render(() => (  
<Router root={App}>
<Route path="/" component={HomePage} />
<Route path="/users" component={UserProfilePage} />
<Route path="/cards" component={CardDatabasePage} />
<Route path="/about" component={AboutPage} />
{/* <Route path="/users" component={Users} /> */}
{/* <Route path="*paramName" component={NotFound} /> */}
</Router>
), 
document.getElementById('root')!);

export default App;
