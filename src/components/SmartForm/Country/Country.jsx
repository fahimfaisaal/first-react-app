const Country = props => {
    const { country, handleOnChange } = props;
        
    return (
        <div className="country">
            <select name="country" value={country} onChange={handleOnChange}>
                <option value="">Select your country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Afganisthan">Afganisthan</option>
                <option value="Packisthan">Packisthan</option>
                <option value="India">India</option>
            </select>
        </div>
    )
}

export default Country