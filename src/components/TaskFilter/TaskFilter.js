import React from "react";
import { Button, Step } from "semantic-ui-react";
class TaskFilter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: ['TO DO','Completed'],
            active: ''
        }
    }


    render() {
        return (
            <Step.Group>
                <Step
                    icon='list'
                    onClick={this.filter}
                    title='TO DO'
                />
                <Step
                    icon='check'
                    onClick={this.filter}
                    title='Completed'
                />
            </Step.Group>
        );
    }
}

export default TaskFilter
