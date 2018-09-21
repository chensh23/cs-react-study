import React, {Component} from "react"
import img404 from '../../style/img/404.png'

export default class NoMatch extends Component{
    render(){
        return (
            <img src={img404} alt={'not found '} style={{width: '100%',overflow: 'hidden'}}/>
        )
    }
}
