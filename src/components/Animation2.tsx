import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css';

export default function Animation() {
  const [items, setItems] = React.useState([
    { id: 1, text: 'Buy eggs' },
    { id: 2, text: 'Pay bills' },
    { id: 3, text: 'Invite friends over' },
    { id: 4, text: 'Fix the TV' },
  ]);

  return (
    <>
      <div className="main">
        <button
          onClick={() =>
            setItems(items =>
              items.map(item => {
                item.id += 10;
                return item;
              })
            )
          }
        >
          switch
        </button>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition key={id} timeout={500} classNames="item">
              <div>
                <button
                  onClick={() =>
                    setItems(items => items.filter(item => item.id !== id))
                  }
                >
                  &times;
                </button>
                {text}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
}
