// Temporary solution to avoid warning:
// https://github.com/facebook/jest/issues/4545#issuecomment-332762365
import raf from './tempPollyfills'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

window['flushPromises'] = () =>  {
  return new Promise(resolve => setImmediate(resolve));
}

