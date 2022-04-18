function validateForm(){
    var input = document.getElementById('emailInput').value;
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(input)){
      document.getElementById('emailInput').style.border="2px solid green"
      document.getElementById('validationInfo').style.color="green";
      document.getElementById('validationInfo').style.fontSize="14px";
      document.getElementById('validationInfo').style.paddingLeft="20px";
      document.getElementById('validationInfo').innerHTML="Email recieved sucessfuly";
    
    } else {
        document.getElementById('emailInput').style.border="2px solid red"
        document.getElementById('validationInfo').style.color="red";
        document.getElementById('validationInfo').style.fontSize="14px";
        document.getElementById('validationInfo').style.paddingLeft="20px";
        document.getElementById('validationInfo').innerHTML="Please provide a valid email";
    }
    }