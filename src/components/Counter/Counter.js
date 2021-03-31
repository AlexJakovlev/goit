import React, { Component } from "react";
import Layout from "../Layout/Layout";
import Statistic from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
export default class Counter extends Component {
  static propTypes = {};
  static defaultProps = { step: 5 };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedBack: 0,
  };

  onClick = ({ target }) => {
    const { type } = target.dataset;
    this.setState((prevState) => {
      return { [type]: prevState[type] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      return {
        positiveFeedBack: Math.round(100 / (prevState.total / prevState.good)),
      };
    });
  };

  render() {
    return (
      <>
        <Layout title="Please leave Feedback">
          <FeedbackOptions onClick={this.onClick} />
        </Layout>
        <Layout title="Statistic">
          {this.state.total > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positiveFeedBack={this.state.positiveFeedBack}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Layout>
      </>
    );
  }
}
