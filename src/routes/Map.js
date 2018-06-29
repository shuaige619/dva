import React from 'react';
import { connect } from 'dva';
import styles from './Map.css';
import Maps from '../components/map/Map'
function Map() {
  return (
    <div className={styles.normal}>
        <Maps/>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Map);
