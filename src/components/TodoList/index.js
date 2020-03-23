import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        return (
            <div className="to-do-list">
                {
                    this.props.todos.map(item=><TodoItem key={item.id} {...item}/>)
                }
            </div>
        );
    }
}

export default TodoList;
