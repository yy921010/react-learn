import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
        })).isRequired
    }


    render() {
        return (
            <div className="to-do-list">
                {
                    this.props.todos.map(item=><TodoItem key={item.id} {...item}  onComplete={this.props.onComplete}/>)
                }
            </div>
        );
    }
}

export default TodoList;
