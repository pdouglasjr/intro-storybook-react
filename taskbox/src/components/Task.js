import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ task:{ id, title, state }, onArchiveTask, onPinTask }) {
  onPinTask = (e) => {
    // disable page refresh
    e.preventDefault();

    console.log(document.getElementById());
  }

  return (
    <div className="list-item">
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="" onClick={ onPinTask } id={`Task-{id}`}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

// Specify data requirements
Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func
};