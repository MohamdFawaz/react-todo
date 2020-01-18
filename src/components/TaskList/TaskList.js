import React from 'react'
import { List, Segment, Grid } from 'semantic-ui-react'
import CompletedCheck from "../CheckCompleted/CheckCompleted";
// const TODOList = () => (
//     <Segment inverted>
//         <div className="ui two item menu">
//             <a className="item active">To Do</a>
//             <a className="item">Completed</a>
//         </div>
//         <List divided inverted animated relaxed celled size={'big'}>
//             <List.Item>
//                 <List.Content>
//                     <List.Header>Snickerdoodle</List.Header>
//                     An excellent companion
//                 </List.Content>
//             </List.Item>
//             <List.Item>
//                 <List.Content>
//                     <List.Header>Poodle</List.Header>A poodle, its pretty basic
//                 </List.Content>
//             </List.Item>
//             <List.Item>
//                 <List.Content>
//                     <List.Header>Paulo</List.Header>
//                     He's also a dog
//                 </List.Content>
//             </List.Item>
//         </List>
//     </Segment>
// );
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Segment raised>
                <List divided animated relaxed celled size={'big'}>
                    {this.props.tasks.map((task) => (
                    <List.Item key={task.id}>
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
