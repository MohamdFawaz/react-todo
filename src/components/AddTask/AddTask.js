import React from 'react'
import {Form, Button } from "semantic-ui-react";

class AddTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            dueDate: ''
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });


    addNewTask = (name, dueDate) => {

        fetch(' http://localhost:8000/api/task',{
            method: 'POST',
            body: JSON.stringify({ name, due_date: dueDate.slice(0, 19).replace('T', ' ')}),
            headers: {
                'Content-Type': 'application/json'
            },
            }).then(res => res.json())
                .then((data) => {
                // console.log(data.data);
                this.props.onNewTask(data.data);
            }).catch(console.log)
    };

    handleSubmit = () => {
        const { name, dueDate } = this.state;
        this.addNewTask(name,dueDate);
        this.setState({ name: name, dueDate: dueDate })
    };

    render() {
        const { name, dueDate } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Task Name</label>
                    <Form.Input
                        placeholder='Enter Task Name..'
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <Form.Input
                        name='dueDate'
                        type="datetime-local"
                        value={dueDate}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default AddTask

