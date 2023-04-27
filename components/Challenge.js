import React from 'react';
import styles from '../styles/challengeObjective.module.css';

const Challenge = () => {
  return (
    <div className="objective">
      <div className="objective_content">
        <h2 className='objective_content_h'>Challenge Objective</h2>
        <p className='objective_content_p'>
          Choose your evaluation steps according to your trading style . Get
          quick with 1-step evaluation or play long with Standard evaluation.
        </p>
        <div className="objective_cards">
          <div className="objective_card objective_card-standard">
            <div className="objective_card_heading">
              <h3>Standard Evaluation</h3>
              <p className='objective_card_heading_p'>For experienced traders.</p>
            </div>
            <div className="objective_card_content">
              <p>&#10003; No maximum days</p>
              <p>&#10003; Max Daily Loss: 5%</p>
              <p>&#10003; Max Total Loss: 12%</p>
              <p>&#10003; Account Sizes: $25k to $800k</p>
              <button className="objective_card_content_btn-split">
              &#43; Profit Split : 85%
              </button>
              <button className="objective_card_content_btn-plan">
                Choose Plans
              </button>
            </div>
          </div>
          <div className="objective_card objective_card-onestep">
            <div className="objective_card_heading">
              <h3>1-step Evaluation</h3>
              <p className='objective_card_heading_p'>Get Funded by skipping one step</p>
            </div>
            <div className="objective_card_content">
              <p>&#10003; No Maximum Days</p>
              <p>&#10003; Max Daily Loss: 5%</p>
              <p>&#10003; Max Total Loss: 5%</p>
              <p>&#10003; Account Sizes $25k to $200k</p>
              <button className="objective_card_content_btn-split">
              &#43; Profit Split: 70%
              </button>
              <button className="objective_card_content_btn-plan">
                Choose Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
