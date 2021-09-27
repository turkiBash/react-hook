export const emailValidation = (email) => {
  let isValid = false;
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    isValid = true;
  }
  return isValid;
};



export const passwordValidation = (password) => {
  let isValid = false;
  if (
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    )
  ) {
    isValid = true;
  }
  return isValid;
};


export const logInValidation = (isLoggedIn) => {
    if (isLoggedIn)
    {
        window.location.pathname="/"
    }
    
}; 


