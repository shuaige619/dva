import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import Usertable from '../components/User/Users';
function Users() {
  return (
    <div className={styles.normal}>
      <Usertable/>
    </div>
  );
}
export default connect()(Users);
