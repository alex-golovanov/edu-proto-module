import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import { makeStyles } from '@material-ui/core/styles'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import AssignmentIcon from '@material-ui/icons/Assignment'
import Typography from '@material-ui/core/Typography'

import ListItemIcon from '@material-ui/core/ListItemIcon'

import Module from './Module/'
import Task from './Task/'

import './normalize.css'
import './styles.css'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    background: '#eee'
  },

  menu: {
    width: 250,
    alignSelf: 'center'
  }
})

const Index = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.menu}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <ViewModuleIcon fontSize="small" />
            </ListItemIcon>
            <NavLink to="/module">
              <Typography variant="inherit">Module demo</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AssignmentIcon fontSize="small" />
            </ListItemIcon>
            <NavLink to="/task">
              <Typography variant="inherit">Task demo</Typography>
            </NavLink>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  )
}

const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/module/:step?" component={Module} />
        <Route path="/task/:step?" component={Task} />
      </Switch>
    </div>
  </Router>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
