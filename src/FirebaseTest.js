const React = require('react')
const { connector } = require('./store')

const FirebaseTest = React.createClass({
  render () {
    return (
      <div>
        <h1>Hello {this.props.CompletedTaskList[0]}</h1>
      </div>
    )
  }
})

module.exports = connector(FirebaseTest)