import * as Appserver from '../services/App'
export default {
  namespace: 'App',
  state: {
      data:[]
  },
  reducers: {
      menu (state,{data}) {
          return {
              ...state,
            data
          }
      }
  },
  effects: {
      *getMenus ({payload},{call, put}) {
            let data = yield call(Appserver.getMenus)
            yield put({type: 'menu', data: data.data.data});
      }
  },
  subscriptions: {
      getMenulist ({dispatch, history}) {
        return history.listen(({pathname}) => {
          if(pathname !=='/login'){
            dispatch({
              type: 'getMenus',
            })
          }
        })
      }
  },
};
