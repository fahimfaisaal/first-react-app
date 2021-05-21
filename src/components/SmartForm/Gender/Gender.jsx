const Gender = props => {
    const { handleOnChange } = props;

    return (
        <div className="gender">
            <input type="radio" id="male" name="gender" className="radio" value="Male" onChange={handleOnChange} />
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="gender" className="radio" value="Female" onChange={handleOnChange} />
            <label htmlFor="female">Female</label>

            <input type="radio" id="other" name="gender" className="radio" value="Other" onChange={handleOnChange} />
            <label htmlFor="other">Other</label>
        </div>
     )
}

export default Gender