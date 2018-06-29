import React from 'react';
import styles from "./Users.css";
import {connect} from 'dva';
import {Table} from 'antd';
let defaultCurrent = 1;
let pageSize = 5;
function Users({list, loading, dispatch, listNum}) {
  const columns = [{
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '姓名',
    dataIndex: 'username',
    key: 'username',
  }, {
    title: '密码',
    dataIndex: 'password',
    key: 'password',
  }, {
    title: '操作',
    dataIndex: 'action',
    render: (text, row, key) => (
      <span>
          <a
            onClick={()=>{dispatch({type: 'users/dellist', payload: {id: row.id, pagesize: pageSize, pageNum: defaultCurrent}})}}
            >Delete</a>
      </span>
    ),
  }];
  return (
  <div className={styles.normal}>
      <Table rowKey="id"
             dataSource={list}
             columns={columns}
             loading={loading}
             pagination={{
                          pageSize: pageSize,
                          defaultCurrent: defaultCurrent,
                          total: listNum,
                          onChange:(page, pagesize)=>{
                               dispatch({ type: 'users/fetch', payload: {pageNum: page, pagesize: pagesize}})
                               defaultCurrent = page
                          }}
                        }
        />
  </div>
    );
}
function mapStateToProps(state) {
  return {
    list: state.users.list,
    loading: state.loading.models.users,
    listNum: state.users.listNum
  };
}
export default connect(mapStateToProps)(Users);
