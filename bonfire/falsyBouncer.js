function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function rem(value){

  if((typeof(value) === "number" && value !== 0 && (isNaN(value) === false))||(typeof(value) === "string" && value !== "")) 
 
    return true;
  
  return false;

  }

  return arr.filter(rem);
}

bouncer([false, null, 0, NaN, undefined, ""]);

