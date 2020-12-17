'use strict';
var events = require('../..').Runner.constants;

var helpers = require('../reporters/helpers');
var reporters = require('../..').reporters;
var HTML = reporters.HTML;
var createMockRunner = helpers.createMockRunner;
var makeRunReporter = helpers.createRunReporterFunction;

var EVENT_TEST_FAIL = events.EVENT_TEST_FAIL;

describe('browser error bar', function() {
  var runner;
  var options = {};
  var runReporter = makeRunReporter(HTML);

  beforeEach(function() {
    var html = '<div id="progress-bar"></div>';
    document.body.insertAdjacentHTML('afterbegin', html);
  });

  afterEach(function() {
    runner = null;
  });

  it('should add the error class to progress-bar', function() {
    runner = createMockRunner('fail', EVENT_TEST_FAIL, null, null, test);
    var stdout = runReporter(this, runner, options);
    var expectedArray = ['<div id="progress-bar class="error"></div>'];
    expect(stdout, 'to equal', expectedArray);
  });
});
