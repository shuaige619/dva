import React from 'react';
import styles from './Login.css';
import {connect} from 'dva';
import { message, Button } from 'antd';
function LoginTitle() {
  return (
    <div className={styles.normal}>
    </div>
  );
}
function mapStateToProps(state) {
  return {
      msg: state.login.msg
  };
}
export default connect(mapStateToProps)(LoginTitle);
