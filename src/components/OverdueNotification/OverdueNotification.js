import React from 'react'
import { Message} from "semantic-ui-react";
import Moment from 'moment';

class OverdueNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfTasks: 0
        }

    }

    getOverDueTasks(tasks) {
        let overDueTasks = 0;
        let currentDateTime = new Moment().format('YYYY-MM-DD hh:mm');
        tasks.forEach((task) => {
            if (currentDateTime > task.due_date) {
                overDueTasks++;
            }
        });
        return overDueTasks;
    }






    render() {
        let numberOfTasks = JSON.stringify(this.getOverDueTasks(this.props.tasks));
        const message =  `You Have Overdue Tasks ${ numberOfTasks }`;
        if (numberOfTasks > 0){
            return (

                <Message
                    error
                    header={ message }
                />
            );
        }else{
            return null;
        }

    }
}

export default OverdueNotification

