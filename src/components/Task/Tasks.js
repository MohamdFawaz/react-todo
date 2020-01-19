import React from "react";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";

import { Container } from "semantic-ui-react";
import AddTask from "../AddTask/AddTask";

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            status: ''
        }
    }


    fetchNotCompletedTasks = () => {
        fetch(' http://localhost:8000/api/task/not-compeleted')
            .then(res => res.json())
            .then((data) => {
                this.setState({tasks: data.data})
            }).catch(console.log)
    };

    fetchCompletedTasks = () => {
        fetch(' http://localhost:8000/api/task/completed')
            .then(res => res.json())
            .then((data) => {
                this.setState({tasks: data.data})
            }).catch(console.log)
    };

    getFilter = (status) => {
        if (status){
            this.fetchCompletedTasks();
        }else{
            this.fetchNotCompletedTasks();
        }
    };

    getNewTask = (newTask) => {
        this.setState(prevState => ({
            tasks: [newTask, ...prevState.tasks]
        }))
    };

    componentDidMount() {
       this.fetchNotCompletedTasks();
    }

    render() {
        return (
            <Container>
                <TaskFilter onFilterChange={this.getFilter}/>
                <AddTask onNewTask={this.getNewTask}/>
                <TaskList tasks={this.state.tasks}/>
            </Container>
        );
    }
}

export default Tasks
