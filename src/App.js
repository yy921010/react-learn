import React, {Fragment, Component} from 'react';
import './App.css';
import {TodoHeader, TodoInput, TodoList,Like} from './components'


class App extends Component {


    state = {
        title: '待办事项',
        desc: '今日事今日毕',
        todos: [
            {
                id: 1,
                title: 'work',
                isCompleted: true
            },
            {
                id: 2,
                title: 'sleep',
                isCompleted: false
            }
        ]
    }

    render() {
        return (
            <Fragment>
                <TodoHeader title={this.state.title} desc={this.state.desc}/>
                <TodoInput/>
                <TodoList todos={this.state.todos}/>
                <Like/>
            </Fragment>
        )
    }
}


export default App;
