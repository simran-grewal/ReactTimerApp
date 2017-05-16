var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown id valid seconds enter', () => {
    var spy = expect.createSpy();
    var countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown = {spy}/>);
    var $el = $(ReactDOM.findDOMNode(countDownForm));

    countDownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should Not call onSet', () => {
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown = {spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value = '190abcd';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
  });
});
