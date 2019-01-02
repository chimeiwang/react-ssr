import React from 'react'
export default class Hello extends React.Component {
    render () {
        return <div onClick={this.click} className='hello'>hello word</div>
    }

    click(){
        alert(1231)
    }
}