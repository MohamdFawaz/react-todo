import React from 'react'
import {List, Segment, Grid} from 'semantic-ui-react'
import CompletedCheck from "../CheckCompleted/CheckCompleted";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    editTask(task) {
        this.props.onEditTask(task);
    };

    render() {
        return (
            <Segment raised>
                <List divided animated relaxed celled size={'big'}>
                    {this.props.tasks.map((task) => (
                        <List.Item key={task.id} onClick={() => this.editTask(task)}>
                            <List.Content>
                                <Grid columns='three' divided>
                                    <Grid.Row centered>
                                        <Grid.Column width="2">
                                            <CompletedCheck taskID={task.id} completed={task.is_completed}/>
                                        </Grid.Column>
                                        <Grid.Column width="10">
                                            <List.Header>{task.name}</List.Header>
                                        </Grid.Column>
                                        <Grid.Column width="3">
                                            <List.Description>{task.due_date}</List.Description>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </List.Content>
                        </List.Item>

                    ))}
                </List>
            </Segment>
        );
    }

}

export default TaskList
