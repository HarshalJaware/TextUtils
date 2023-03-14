import React from 'react'

function Alert(props) {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <div style={{height:'50px'}}>
      {props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalizeFirstLetter(props.alert.type)}:</strong> {props.alert.message}
          </div>
      </div>}
    </div>
  )
}

export default Alert
