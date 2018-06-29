import React from 'react';
import styles from './App.css'
import { connect } from 'dva';
import {withRouter} from  'dva/router'
import { Layout, Icon } from 'antd';
import  Menus from '../components/basic/menu';
const { Header, Sider, Content } = Layout;
function App({children, location, menulist, history}) {
  let {pathname} = location
    pathname = pathname.startsWith('/')? pathname : `/${pathname }`
    if(pathname === '/login'){
        return (
            <div>
                {
                  children
                }
            </div>
        )
    }
    return (
        <div className={styles.App}>
            <Layout style={{"height": "100%"}}>
                <Sider
                    trigger={null}
                    collapsible
                    >
                  <div className="logo" />
                  <Menus menulist={menulist} history={history}/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                      <Icon
                        className="trigger"
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {
                            children
                        }
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
const mapStateToProps = (state) => {
  console.log(state);
    return {
        menulist: state.App.data
    }
}
export default withRouter(connect(mapStateToProps)(App));
