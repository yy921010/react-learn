import React, {Component} from 'react';
import {counterIncrement, counterDecrement} from '../../actions'

class Shops extends Component {

    constructor() {
        super();
        this.state = {
            list: []
        }

    }

    componentDidMount() {
        const {counter} = this.props.store.getState()

        this.props.store.subscribe(item=>{
            this.setState({
                list: this.props.store.getState().counter
            })
        })

        this.setState({
            list: counter
        })
    }

    // static getDerivedStateFromProps(props){
    //     const {counter}  = props.store.getState()
    //     console.log(counter);
    // }


    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>标题</th>
                    <th>数量</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.list.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>
                                <button onClick={() => {
                                    this.props.store.dispatch(counterIncrement(item.id))
                                }}>-
                                </button>
                                {item.counter}
                                <button onClick={() => {
                                    this.props.store.dispatch(counterDecrement(item.id))
                                }
                                }>+
                                </button>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default Shops;
