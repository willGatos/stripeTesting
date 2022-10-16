import React from 'react'

function AuthFormWrapper({onSubmit, children}) {
  return (
    <div className="authContainer" style={{}}>
      <form style={{paddingTop: "30px"}} onSubmit={onSubmit}>
        <div className="formContainer align-start flex flex-column justify-center">
            {children}
        </div>
      </form>
    </div>
  )
}

export default AuthFormWrapper