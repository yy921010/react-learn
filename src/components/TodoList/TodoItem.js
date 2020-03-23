import React, {Component} from 'react';

class TodoItem extends Component {

    handleChangeBox = () => {
        /**
         * 尽量采用结构语法，可以有效的规避的方法错误
         */
        const {
            props: {
                onComplete = () => {
                }
            }
        } = this

        onComplete(this.props)
    }

    render() {
        return (
            <div>
                <span>{this.props.id}--{this.props.title}--{this.props.isCompleted ? '完成' : '未完成'}</span>
                <input type="checkbox" checked={this.props.isCompleted} onChange={this.handleChangeBox}/>
            </div>
        );
    }
}

export default TodoItem;
