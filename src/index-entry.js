import dva from 'dva';
import createLoading from 'dva-loading';
import './index.html';
import { browserHistory } from 'dva/router';

const app = dva({
  onError(error) {
    console.error(error.stack);
  },
});


app.use(createLoading());

app.model(require('./models/signModel'));
app.model(require('./models/listModel'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#react-root');
