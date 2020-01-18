import React from "react";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        fetch(' http://localhost:8000/api/task/not-compeleted')
            .then(res => res.json())
            .then((data) => {
                this.setState({tasks: data.data})
            }).catch(console.log)
    }

    render() {
        return (
            <div>
                <TaskFilter/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default Tasks
