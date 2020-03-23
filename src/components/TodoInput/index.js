import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types'

//createRef 通过ref 组件或者dom，使用之前必须调用react的 createRef 方法创建的ref

class TodoInput extends Component {

    constructor() {
        super();
        // this.handleButt在于每点击一次都会执行bind，不利于性能onClick = this.handleButtonClick.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)


        // 在constructor创建业务

        this.inputDom = createRef()
    }

    state = {
        inputValue: ""
    }

    handleInput = (event) => {
        // 改event对象是经react合成
        this.setState({
            inputValue: event.currentTarget.value
        })

    }

    // 需要添加bind 但是采用这种方式，在于每点击一次都会执行bind，不利于性能
    handleButtonClick(e) {
        if (this.state.inputValue === '') {
            return
        }
        this.setState({
            inputValue: e.currentTarget.value
        }, () => {
            this.inputDom.current.focus()
        })
        this.props.addTodo(this.state.inputValue)
        console.log(this.inputDom);
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.props.addTodo(this.state.inputValue)
        }
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInput} onKeyUp={this.handleKeyUp}
                       ref={this.inputDom}/>
                <button onClick={this.handleButtonClick}>ad</button>
            </div>
        );
    }
}

export default TodoInput;
