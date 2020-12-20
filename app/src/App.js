import './App.css'
import {
	BrowserRouter as Router,
  Switch,
	Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LogInPage from './pages/LogInPage/LogInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MarketplacePage from './pages/MarketplacePage/MarketplacePage';
import UserAccountPage from './pages/UserAccountPage/UserAccountPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  return (
		<Router>
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/login' exact component={LogInPage} />
				<Route path='/signup' exact component={SignUpPage} />
				<Route path='/marketplace' exact component={MarketplacePage} />
				{/* <ProtectedRoute 
					path='/users'
					component={UserAccountPage}
				/> */}
				<Route path='/users' component={UserAccountPage} />
			</Switch>
		</Router>
	);
}

export default App;