'use strict';

import './fixtures/esm.fixture.mjs';
import HTML from '../../lib/reporters/html.js'


describe('browser error bar', function() {

  beforeEach(function() {
    var html = '<div id="progress-bar"></div>';
    document.body.insertAdjacentHTML('afterbegin', html);
    console.log('this is window root', window.root)
    console.log('this is html' ,HTML)
  });

  it('should add the error class to progress-bar', function() {

    // runner = createMockRunner('fail', EVENT_TEST_FAIL, null, null, test);
    var stdout = ['<div id="progress-bar class="error"></div>'];
    var expectedArray = ['<div id="progress-bar class="error"></div>'];
    expect(stdout, 'to equal', expectedArray);
  });
});

it('should register a global if it did not fail', function() {
  expect(window.MOCHA_IS_OK, 'to be ok');
});

it('should has global Mocha', function() {
  expect(window.Mocha, 'not to be', undefined);
});
