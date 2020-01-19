import React from "react";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";

import { Container } from "semantic-ui-react";
import AddTask from "../AddTask/AddTask";
import OverdueNotification from "../OverdueNotification/OverdueNotification";
import EditTask from "../EditTask/EditTask";

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            uncompletedTasks: [],
            status: "",
            taskID: 0,
            editName: "",
            editDueDate: ""
        }
    }


    fetchNotCompletedTasks = () => {
        fetch(' http://localhost:8000/api/task/not-compeleted')
            .then(res => res.json())
            .then((data) => {
                this.setState({tasks: data.data, uncompletedTasks: data.data})
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


    editTask = (task) => {
        return this.setState({taskID: task.id, editName: task.name,editDueDate: task.due_date,showForm: true});
    };

    componentDidMount() {
       this.fetchNotCompletedTasks();
    }

    render() {
        return (
            <Container>
                <OverdueNotification tasks={this.state.uncompletedTasks}/>
                <TaskFilter onFilterChange={this.getFilter}/>
                <AddTask onNewTask={this.getNewTask} className="hidden"/>
                <EditTask name={this.state.editName} due_date={this.state.editDueDate} id={this.state.taskID} showForm={this.state.showForm}/>
                <TaskList tasks={this.state.tasks} onEditTask={this.editTask}/>
            </Container>
        );
    }
}

export default Tasks
