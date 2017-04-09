const React = require('react')
const { connector } = require('./store')

import { Field, reduxForm } from 'redux-form'

const showResults = (addTask, reset, props) => {
  addTask(props.newItem)
  reset()
}


let InputForm = React.createClass({
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props
    return (
      <div className="InputBar">
        <form onSubmit={handleSubmit(showResults.bind(this, this.props.addTask, reset))}>
          <div>
            <Field name="newItem" component="input" placeholder="Add a new task"/>
          </div>
          <button type="submit" disabled={pristine || submitting} >Add</button>
        </form>
      </div>
    )}
})

InputForm = reduxForm({
  form: 'addForm'
})(InputForm)

module.exports = connector(InputForm)
