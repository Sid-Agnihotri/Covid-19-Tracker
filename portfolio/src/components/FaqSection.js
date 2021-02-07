import React from "react";

import styled from "styled-components";
import { About } from "../styles";
function FaqSection() {
  return (
    <Faq className="faq">
      <h2>
        Any Questions? <span>FAQ </span>
      </h2>
      <div className="questions">
        <h4>How do i start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
            eligendi ea eos pariatur autem cumque maiores voluptatem voluptates
            harum? Voluptas repellat voluptatibus nihil maxime quas delectus
            consectetur quaerat exercitationem.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
            eligendi ea eos pariatur autem cumque maiores voluptatem voluptates
            harum? Voluptas repellat voluptatibus nihil maxime quas delectus
            consectetur quaerat exercitationem.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="questions">
        <h4>Different payment methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
            eligendi ea eos pariatur autem cumque maiores voluptatem voluptates
            harum? Voluptas repellat voluptatibus nihil maxime quas delectus
            consectetur quaerat exercitationem.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="questions">
        <h4>What product do you offer?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit atque
            eligendi ea eos pariatur autem cumque maiores voluptatem voluptates
            harum? Voluptas repellat voluptatibus nihil maxime quas delectus
            consectetur quaerat exercitationem.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .questions {
    padding: 3rem 0 rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem p {
      padding: 1rem 0 rem;
    }
  }
`;

export default FaqSection;
