import React from 'react';
import ListItem from "../list-item/ListItem";

class List extends React.Component {

    state = {
        data: []
    }

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            initialState: props.data
        }
    }

    componentDidMount() {

    }

    handleRestore = () => {
        this.setState({
            data: this.state.initialState
        })
    }

    handleDelete = (id) => {
        this.setState({
            data: this.state.data.filter(item => item.customer_group_id !== id)
        })
    }

    render() {
        const state = this.state;
        return (
            <div>
                <ul>
                    {state.data.map((item) => {
                        return <ListItem
                            key={item.customer_group_id}
                            id={item.customer_group_id}
                            text={item.customer_group_code}
                            onDelete={this.handleDelete}
                        />
                    })}
                </ul>
                <button onClick={this.handleRestore}>restore</button>
            </div>
        );
    }
}

export default List;
