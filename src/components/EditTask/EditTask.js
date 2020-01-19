import React from 'react'
import {Form, Button, Header} from "semantic-ui-react";
import Moment from 'moment';

class EditTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            showForm: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                id: this.props.id,
                name: this.props.name,
                due_date: this.props.due_date,
                showForm: this.props.showForm
            });

        }
    }



    editTask = (id, name, dueDate) => {
        fetch(' http://localhost:8000/api/task/' + id, {
            method: 'PUT',
            body: JSON.stringify({name, due_date: dueDate.slice(0, 19).replace('T', ' ')}),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then((data) => {
                window.location.reload();
            }).catch(console.log)
    };


    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    };

    handleSubmit = () => {
        const {id, name, due_date} = this.state;
        this.editTask(id, name, due_date);
    };


    render() {
        const {name, due_date} = this.state;
        if (this.state.showForm){
            return (
                <Form onSubmit={this.handleSubmit}>
                    <Header textAlign="center">Edit Task</Header>

                    <Form.Field>
                        <label>Task Name</label>
                        <Form.Input
                            placeholder='Enter Task Name..'
                            name='name'
                            defaultValue={name}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Date</label>
                        <Form.Input
                            name='due_date'
                            type="datetime-local"
                            defaultValue={(due_date) ? new Moment(due_date).format('YYYY-MM-DD[T]HH:mm:ss') : null}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            );
        }else{
            return null;
        }
    }
}

export default EditTask

