import dva from 'dva';
import creatLloading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva();
// 2. Plugins
app.use(creatLloading());
// 3. Model
// app.model(require('./models/example').default);
app.model(require("./models/App").default);
// 4. Router
app.router(require('./router').default);
// 5. Start
app.start('#root');
