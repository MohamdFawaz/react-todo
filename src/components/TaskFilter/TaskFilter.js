import React from "react";
import { Step } from "semantic-ui-react";
class TaskFilter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: ['TO DO','Completed'],
        }
    }


    filterTasks() {
        //
    }

    render() {
        return (
            <Step.Group>
                <Step
                    icon='list'
                    onClick={this.filterTasks}
                    title='TO DO'
                />
                <Step
                    icon='check'
                    onClick={this.filterTasks}
                    title='Completed'
                />
            </Step.Group>
        );
    }
}

export default TaskFilter
