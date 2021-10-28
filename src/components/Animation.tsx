import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.css';

export default function Animation() {
  // const [mode, setMode] = React.useState('out-in');
  const [state, setState] = React.useState(true);
  const nodeRef = React.useRef(null);
  return (
    <>
      <div className="main">
        <SwitchTransition mode="out-in">
          <CSSTransition
            nodeRef={nodeRef}
            key={state}
            timeout={200}
            classNames="fade"
          >
            <div ref={nodeRef}>
              <button
                className="btn"
                style={{ padding: '20px', border: 'thin solid' }}
                onClick={() => setState(state => !state)}
              >
                {state ? 'Hello, world!' : 'Goodbye, world!'}
              </button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
