export default function HeadingText(props){
    const {tasks, setTasks, filter} = props;
    const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
    return (`${tasks.length} ${tasksNoun} remaining`)
}

