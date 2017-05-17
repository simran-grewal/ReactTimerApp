var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('It should Exist', () => {
      expect(Timer).toExist();
  });

  it('It should start Timer on start Status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      expect(timer.state.count).toBe(0);
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.count).toBe(2);
        done();
      }, 2001);
  });

  it('It should pause Timer on paused Status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({
        count: 10
      });
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      expect(timer.state.count).toBe(10);
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.count).toBe(10);
        done();
      }, 1001);
  });

  it('It should Clear Count on Stopped Status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({
        count: 10
      });
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
        done();
      }, 1001);
  });

});
