import cfg from '../../../config';

// TODO: don't use noop for prod stuff
const noop = () => {};

const devError = console.error;
const devLog = console.log;
const devDir = console.dir;
const devWarn = console.warn;
const devJson = (obj) => {
  let json: string;
  try {
    json = JSON.stringify(obj, null, 2);
    console.log(json);
  } catch (e) {
    console.log('could not serialize object');
  }
};

const devErrorHandler = (e: Error | any) => {
  console.error(e);
};

export const error = cfg.prod ? noop : devError;
export const log = cfg.prod ? noop : devLog;
export const dir = cfg.prod ? noop : devDir;
export const warn = cfg.prod ? noop : devWarn;
export const handler = cfg.prod ? noop : devErrorHandler;
export const json = cfg.propd ? noop : devJson;

// create a default, all-in-one export that can be called like log, but
// also contains the other functions as properties.
const aio = log.bind({});
aio.error = error;
aio.dir = dir;
aio.warn = warn;
aio.handler = handler;
aio.json = json;

export default aio;
``;
