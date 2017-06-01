import { HASCONSOLE } from './env';

const logger = {
  warn: function (msg, e){
    if (HASCONSOLE) {
      console.warn('[DING WEB SDK Warning]:', msg);
      if (e) {
        throw e;
      } else {
        const warning = new Error('WARNING STACK TRACE');
        console.warn(warning.stack);
      }
    }
  },
  info: function (msg){
    if (HASCONSOLE) {
      console.info('[DING WEB SDK INFO]:', msg);
    }
  },
  error: function (msg){
    if (HASCONSOLE){
      console.error('[DING WEB SDK ERROR]:', msg);
    }
  }
};

if (process.env.NODE_ENV !== 'production') {

}

export default logger;