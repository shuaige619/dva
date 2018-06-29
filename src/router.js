import React from 'react';
import { Route, Switch, routerRedux,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/App';
const {ConnectedRouter} = routerRedux
const routes = [
    {
        path: '/home/users',
        models: () => [import('./models/users')],
        component: () => import ('./routes/Users')
    },
    {
        path: '/login',
        models: () => [import('./models/login')],
        component: () => import ('./routes/login')
    },
    {
        path: '/home/map',
        models: () => [],
        component: () => import ('./routes/Map')
    }
]
function RouterConfig({ history, app }) {
    return (
      <ConnectedRouter history={history}>
          <App>
              <Switch>
                <Route path="/" exact render={()=><Redirect to="/login" />}/>
                {
                    routes.map((v, k) => {
                        return <Route key={k} path={v.path} exact component = {dynamic({
                            app,
                            models: v.models,
                            component: v.component
                        })}/>
                    })
                }
              </Switch>
          </App>
      </ConnectedRouter>
    )
}
export default RouterConfig;
