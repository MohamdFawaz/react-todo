import React from "react";
import { Step } from "semantic-ui-react";
class TaskFilter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    filterTasks = (e) =>  {
        this.props.onFilterChange(e.currentTarget.classList.contains('completed'));
    };

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
                    completed
                />
            </Step.Group>
        );
    }
}

export default TaskFilter
