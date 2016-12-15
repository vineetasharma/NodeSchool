
import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data = {this.props.data} />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        console.log('Props------------------------------',this.props);
        var todo = this.props.data.map(function(obj) { return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>});
        return (
            <div className = "todoList">
                <table style={{border: "2px solid black"}}>
                    <tbody>
                    {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}


class TodoForm extends React.Component {
    // Write code here
    render(){
        return (<div className="todoForm">
            I am a TodoForm.
        </div>);
    }
}


class Todo extends React.Component {
    constructor(props){
        console.log('Propes----------------->>>', props);
        super(props);
        this.state = {checked: false};
        this.handleChange=function(event){
            console.log('Event---------------',event);
        }

    }
    render() {
        return (
            < tr >
                <td style = {{ border: "1px solid black" }} >
                <input type = "checkbox"
                    checked = {this.state.checked}
                    onChange = {this.handleChange.bind(this)}/>
            </ td >
                < td
                    style ={style.tableContent}>
                    {
                        this.props.title
                    }
                </
                    td >
                < td
                    style = {
{
    border: "1px solid black"
}
}>
                    {
                        this.props.children
                    }
                </
                    td >
            </tr>
        )
            ;
    }
}
Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};

let style = {
    tableContent: {
        border: "1px solid black"
    }
};
