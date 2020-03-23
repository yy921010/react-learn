import React, {Component} from 'react';
import PropTypes from 'prop-types'


class TodoHeader extends Component {

    static propTypes = {
        title: PropTypes.string,
        desc: PropTypes.string
    }

    render() {
        return (
            <div className="todoHeader">
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default TodoHeader;
