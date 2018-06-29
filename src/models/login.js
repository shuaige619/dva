import * as loginServer from '../services/login'
import {routerRedux} from 'dva/router';
export default {
  namespace: 'login',
  state: {
  },
  reducers: {
  },
  effects: {
      *userlogin ({payload},{call,put}) {
           const {data} = yield call(loginServer.login, payload.values)
           if(data.code){
                localStorage.setItem('token',data.token)
                yield put(routerRedux.push('/home/users'));
                return data
           } else {
                return data
           }
      }
  },
  subscriptions: {
  },
};
