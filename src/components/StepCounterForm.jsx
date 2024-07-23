function StepCounterForm(props) {
    const {onFormSubmit} = props;

    return (
        <>
            <form className="form-container" onSubmit={onFormSubmit}>
                <label class="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Дата (ДД.ММ.ГГ)</span>
                        
                    </div>
                    <input className="input input-bordered w-full max-w-xs" type="text" name="date" required></input>
                </label>
                <label class="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Пройдено км</span>
                    </div>
                    <input className="input input-bordered w-full max-w-xs" type="text" name="distance" required></input>
                </label>    
                <input className="btn" type="submit" value="OK"></input>
            </form>
        </>
    )
}

export default StepCounterForm