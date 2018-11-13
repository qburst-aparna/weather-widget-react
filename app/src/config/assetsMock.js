// const path = require("../assets/weather-widget-01.png");

// module.exports = {
//   process(src, filename, config, options) {
//     return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
//   },
// };
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

module.exports = 'IMAGE_MOCK'