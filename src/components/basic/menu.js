import React from 'react';
import { Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
class Menus extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
          menulist: []
      }
    this.changeRoute = this.changeRoute.bind(this)
  }
  componentWillReceiveProps (nextProps) {
      this.setState({menulist:nextProps.menulist})
  }
  changeRoute (item, key, keyPath) {
      if(this.props.history.location.pathname !== key){
        this.props.history.push(key)
      }
  }
  render () {
    return (
        <div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              onClick={({item, key, keyPath})=>this.changeRoute(item, key, keyPath)}
              >
              {
                  this.state.menulist.map((v, k) => {
                      return (
                        <SubMenu key={k} title={<span><Icon type="mail" /><span>{v.menuName}</span></span>}>
                            {
                                v.childMenu.map((val, key) => {
                                    return <Menu.Item key={val.route.path}>{val.menuName}</Menu.Item>
                                })
                            }
                        </SubMenu>
                      )
                  })
              }
            </Menu>
        </div>
    );
  }
}
export default Menus;
