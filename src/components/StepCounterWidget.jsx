import { useState } from "react"
import StepCounterForm from "./StepCounterForm"
import StepCounterList from "./StepCounterList"

function StepCounterWidget() {
    const [list, setList] = useState([]);

    function onFormSubmit(event) {
        event.preventDefault();
        const {target} = event;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        const currentDate = new Date(data.date.replace(/(...)(...)?/g, "$2$1"));
        const currentDistance = parseInt(data.distance);
        data.distance = currentDistance;
        if (!currentDate.getDate()) {
            alert('incorrect date'); //Лень делать тултипы(
            return
        } else if (!currentDistance) {
            alert('incorrect distance');
            return
        }
        data.time = currentDate.getTime();
        const currentListLength = list.length;
        for (let i = 0; i <= currentListLength; i++) {
            if (!list[i]) {
                list.push(data);
            } else if (data.time < list[i].time) {
                continue
            } else if (data.time == list[i].time) {
                list[i].distance += currentDistance;
                break
            } else {
                list.splice(i, 0, data);
                break
            }
        }
        event.target[0].value = "";
        event.target[1].value = "";
        setList([...list]);
    }

    function onDeleteClick(event) {
        const target = parseInt(event.currentTarget.id);
        const currentlist = list.filter((item) => {
            return item.time != target
        });
        setList([...currentlist]);
    }

    return (
        <div className="widget-container">
            <StepCounterForm onFormSubmit={onFormSubmit} />
            <StepCounterList list={list} onDeleteClick={onDeleteClick}/>
        </div>
    )
}

export default StepCounterWidget