import React from 'react'
import './home.less';
export default class Hello extends React.Component {
    render () {
        return <div onClick={this.click} className='hello'>hello worssdsdwldsas</div>
    }

    click(){
        alert(1231)
    }
}