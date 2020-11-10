import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import GenieListPage from './pages/genie-list-page';
import GenieFormPage from './pages/genie-form-page';

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Genies List
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/genie/new"
        >
          Add Genie Research Paper
        </NavLink>
      </div>
      <Route exact path="/" component={GenieListPage} />
      <Route path="/genie/new" component={GenieFormPage} />
      <Route path="/genie/edit/:_id" component={GenieFormPage} />
    </Container>
  );
};

export default App;
