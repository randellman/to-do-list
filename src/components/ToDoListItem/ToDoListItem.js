import React, { Component } from 'react';

import './ToDoListItem.css';

export default class ToDoListItem extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        let { title, onDeleted, onToggleDone, onToggleImportant } = this.props;

        // let { done, important } = this.state;

        let classNames = "to-do-list-item";

        // if(done) {
        //     classNames += " done";
        // }

        // if(important) {
        //     classNames += " important";
        // }

        return (
            <div 
            className={ classNames } >
                <span 
                      className="to-do-list-item-label"
                      onClick={ onToggleDone }>
                    { title }
                </span>
                <div className="button_wrapper">
                    <button type="button" 
                            className="btn btn-outline-success btn-sm mr-2"
                            onClick={ onToggleImportant } >
                        <i className="fa fa-exclamation"></i>
                    </button>
                    <button type="button" 
                            className="btn btn-outline-danger btn-sm"
                            onClick={ onDeleted } >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}
