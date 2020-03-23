import React, {Component} from 'react';

class Like extends Component {

    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    /**
     * 使用箭头函数，将作用域保护
     */
    handleLikeClick = () => {
        console.log('handleLikeClick')
        //使用setState，可以是一个对象
        // this.setState({
        //     isLiked: !this.state.isLiked
        // })
        //第二情况，是一种方法,有时候无法确定页面是否更改，可以采用这种异步方式，来进行更改
        this.setState((prevState)=>{
            console.log('prevState',prevState)
            console.log('setState 内部 this.state.isLiked',this.state.isLiked)
            return {
                isLiked: !this.state.isLiked
            }
        },()=>{
            //由于setState是异步的，可以在第二回调里面获得最新参数
            console.log('this.state.isLiked',this.state.isLiked)
        })

    }

    render() {
        return (
            <div>
                <span onClick={this.handleLikeClick}>
                   {
                       this.state.isLiked ? '💙' : '💔'
                   }
                </span>
            </div>
        );
    }
}

export default Like;
