function StepCounterList(props) {
    const {list, onDeleteClick} = props;

    return (
        <>
            <div className="text-container">
                <p className="text-date">Дата (ДД.ММ.ГГ)</p>
                <p className="text-distance">Пройдено км</p>
                <p className="text-action">Действия</p>
            </div>
            <div className="list-container">
                {list.map((item) => (
                    <div className="item" key={item.time}>
                        <p className="item-date">{item.date}</p>
                        <p className="item-distance">{item.distance}</p>
                        <div id={item.time} className="item-delete" onClick={onDeleteClick}>
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StepCounterList