import React, { useState } from 'react';
import NavigationBar from './Navbar';
import WelcomePage from './pages/welcome_page';
import Main from './pages/main_page';
import RegisterPage from './pages/register';
import NoCards from './components/NoCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkTokenCookie } from './helpers/cookie_helper';
import './App.css';


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(checkTokenCookie());

    
  
    const renderPage = () => {
      switch (currentPage) {
        case 'main':
          return <Main />;
        case 'welcome':
          return <WelcomePage />;
        case 'register':
          return <RegisterPage changePage={changePage} />;
        case 'noCards':
          return <NoCards />;
        default:
          return <Main />;
      }
    };

    if (!isLoggedIn) {
        return (
          <Router>
          <Switch>
            <Route path="/register" component={RegisterPage} />
            {/* Add other routes here */}
          </Switch>
        </Router>
        );
    }

  
    return (
      <div>
        {renderPage()}
      </div>
    );
};

export default App;
