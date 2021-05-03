import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import { cont, statCont } from './components/FeedbackStat.module.css';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    handleCount = e => {
        const elementById = e.currentTarget.id;
        this.setState(prevState => {
            return {
                [elementById]: prevState[elementById] + 1,
            };
        });
    };
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const result = Math.round(
            (this.state.good / this.countTotalFeedback()) * 100,
        );
        return result;
    };
    render() {
        const { good, neutral, bad } = this.state;
        const {
            countTotalFeedback,
            countPositiveFeedbackPercentage,
            handleCount,
            state,
        } = this;
        return (
            <div className={cont}>
                <div className={statCont}>
                    <Section title="Please, leave feedback">
                        <FeedbackOptions
                            options={Object.keys(state)}
                            onLeaveFeedback={handleCount}
                        />
                    </Section>
                </div>
                <div>
                    <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={countPositiveFeedbackPercentage()}
                        />
                    </Section>
                </div>
            </div>
        );
    }
}

export default App;
