const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');
  console.log(baseConfig);
  it('enry', () => {
    assert.equal(baseConfig.entry.index, '/Users/tqc/tanqichao/webpack/my-project/builder-webpack/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/tqc/tanqichao/webpack/my-project/builder-webpack/test/smoke/template/src/search/index.js');
  });
});
