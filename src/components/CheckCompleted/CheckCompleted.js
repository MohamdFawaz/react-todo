import React from 'react'
import { Checkbox } from 'semantic-ui-react'


class CompletedCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false
        }
    }

    toggleCompleted(e,taskId){
        let parentNode = e.currentTarget.parentNode.parentNode.parentNode; //TODO optimize this solution
        fetch(' http://localhost:8000/api/task/toggle-completed/' + taskId,{
            method: 'PUT'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.data.is_completed){
                    parentNode.className += ' hidden';
                }
            }).catch(console.log)
    };

    render() {
        return (
            <Checkbox defaultChecked={this.props.completed} onChange={(e) => this.toggleCompleted(e,this.props.taskID)}/>
        );
    }
}

export default CompletedCheck
