import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                {this.props.id}--{this.props.title}--{this.props.isCompleted?'完成':'未完成'}
            </div>
        );
    }
}

export default TodoItem;
