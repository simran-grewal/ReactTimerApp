var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('It should Exist', () => {
    expect(Countdown).toExist();
  });

//done() to stop the test
  describe('handleSetCountdown', () => {
      it('should set state to started and countdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);
        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countdown.state.count).toBe(9);
          done();
        }, 1001);
      });
  });


  describe('handleSetCountdown', () => {
      it('should set state never less than zero', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(1);
        expect(countdown.state.count).toBe(1);
        expect(countdown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          done();
        }, 3000);
      });
  });

});
