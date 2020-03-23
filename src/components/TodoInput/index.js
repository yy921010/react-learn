import React, {Component} from 'react';

class TodoInput extends Component {

    constructor() {
        super();
        // this.handleButt在于每点击一次都会执行bind，不利于性能onClick = this.handleButtonClick.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    state = {
        inputValue:""
    }

    handleInput=(event)=>{
        // 改event对象是经react合成
        console.log(event);

        this.setState({
            inputValue: event.currentTarget.value
        })
    }
    // 需要添加bind 但是采用这种方式，在于每点击一次都会执行bind，不利于性能
    handleButtonClick(){
        this.props.addTodo(this.state.inputValue)
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
                <button onClick={this.handleButtonClick}>ad</button>
            </div>
        );
    }
}

export default TodoInput;
