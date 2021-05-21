const Skills = props => {
    const { handleSkills } = props;
    
    return (
        <div className="skills">
            <label>Skills: </label>
            <input type="checkbox" name="skills" className="radio" value="Java" id="Java" onChange={ handleSkills }/>
            <label htmlFor="java">Java</label>

            <input type="checkbox" name="skills" className="radio" value="javaScript" id="javaScript" onChange={ handleSkills }/>
            <label htmlFor="javaScript">javaScript</label>

            <input type="checkbox" name="skills" className="radio" value="python" id="python" onChange={ handleSkills }/>
            <label htmlFor="python">python</label>

            <input type="checkbox" name="skills" className="radio" value="Golang" id="Golang" onChange={ handleSkills }/>
            <label htmlFor="Golang">Golang</label>

            <input type="checkbox" name="skills" className="radio" value="php" id="php" onChange={ handleSkills }/>
            <label htmlFor="php">php</label>
        </div>
    )
}

export default Skills;