import {Component} from 'react'

class ClassComp extends Component{
    constructor(props){
        super()
        console.log(props)
    }

    render(){
        return(
            <div>
                <h4>This is class component</h4>
                <h5>MobileName : {this.props.phoneName}</h5>
            </div>
        )
    }
}

export default ClassComp