
const FuncComp = (props) => {
    const {phoneName} = props
    console.log(props)
    const courseName = 'ReactJs'
    return(
        <div>
            <p>This is functional component</p>
            <h4>courseName - {courseName}</h4>
            <h5>Mobile Name: {phoneName}</h5>
        </div>
    )
}

export default FuncComp