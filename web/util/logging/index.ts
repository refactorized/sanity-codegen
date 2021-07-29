import cfg from '../../../config';

// TODO: don't use noop for prod stuff
const noop = () => {};

const devError = console.error;
const devLog = console.log;
const devDir = console.dir;
const devWarn = console.warn;

const devErrorHandler = (e: Error | any) => {
  console.error(e);
};

export const error = cfg.prod ? noop : devError;
export const log = cfg.prod ? noop : devLog;
export const dir = cfg.prod ? noop : devDir;
export const warn = cfg.prod ? noop : devWarn;
export const handler = cfg.prod ? noop : devErrorHandler;
