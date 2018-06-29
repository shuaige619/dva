import * as userServer from '../services/users';
let arr = [];
let obj = {};
export default {
  namespace: 'users',
  state: {
      list: [],
      total: null,
      pageNum:1,
      listNum: 0
  },
  reducers: {
      users (state, {payload: {data: list, listNum}}) {
          return {
            ...state,
            list,
            listNum
          }
      }
  },
  effects: {
      *fetch({payload}, {call, put, select}){
          if([...new Set(arr)].indexOf(payload.pageNum)===-1){
              const {data} = yield call(userServer.users, payload)
              yield put({type: 'users', payload: {data: data.data,listNum: data.listNum}})
              obj[payload.pageNum] = data.data;
              obj.listNum = data.listNum;
          }else{
              yield put({type: 'users', payload: {data: obj[payload.pageNum],listNum: obj.listNum}})
          }
          arr.push(payload.pageNum);
      },
      *dellist({payload}, {call, put}){
          arr = [];
          const newdata = yield call(userServer.dellist, payload)
          const {data} = yield call(userServer.users, newdata.data)
          yield put({type: 'users', payload: {data: data.data,listNum: data.listNum}})
      }
  },
  subscriptions: {
      holdup ({dispatch}) {
          dispatch({type: 'fetch', payload: {pageNum: 1, pagesize: 5}})
      }
  },
};
