import React from 'react'

export default class Hello extends React.Component {
    render () {
        return <div onClick={this.click}>hello worsdwld</div>
    }

    click(){
        alert(123)
    }
}