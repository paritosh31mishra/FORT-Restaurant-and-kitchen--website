

  const table_validation = () => {
    let tablestatus = true;
    //name
    let name = document.getElementById("name");
    if (name.value == "") {
      tablestatus = false;
      name.style.borderColor = "red";
      document.getElementById("nameerror").innerText = "invalid name ! ";
    } else {
      name.style.borderColor = "";
      document.getElementById("nameerror").innerText = "";
    }
  
    //mobile
    let mob = document.getElementById("mob");
    let mobpattern = /^[0]?[6789]\d{9}$/;
    if (!mobpattern.test(mob.value)) {
      tablestatus = false;
      mob.style.borderColor = "red";
      document.getElementById("moberror").innerText = " invalid mobile no.!";
    } else {
      mob.style.borderColor = "";
      document.getElementById("moberror").innerText = "";
    }
  
    //email
    let epattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // here before @ username will come it can have characters in a-z, A-Z, 0-9, _, ., -,
  // then @ required , then domainname will come that can have word with a-z,A-z, 0-9, -,
  // then . will come and then extension with size 2-4 character with a-z, A-z , 0-9 will come
  let email = document.getElementById("email");
  if (!epattern.test(email.value)) {
    tablestatus = false;
    email.style.borderColor = "red";
    document.getElementById("emailerror").innerText = "Invalid email !";
  } else {
    email.style.borderColor = "";
    document.getElementById("emailerror").innerText = "";
  }

    //date
    let date = document.getElementById("date");
    if (date.value == "") {
      tablestatus = false;
      date.style.borderColor = "red";
      document.getElementById("dateerror").innerText = "invalid date  !";
    } else {
      date.style.borderColor = "";
      document.getElementById("dateerror").innerText = "";
    }

    //time
    let time = document.getElementById("time");
    if (time.value == "") {
      tablestatus = false;
      time.style.borderColor = "red";
      document.getElementById("timeerror").innerText = "invalid time  !";
    } else {
      time.style.borderColor = "";
      document.getElementById("timeerror").innerText = "";
    }

    let people = document.getElementById("people");
    if (people.value < 1 || people.value> 10) {
      tablestatus = false;
      people.style.borderColor = "red";
      document.getElementById("peopleerror").innerText = "invalid number of people (table for more than 10 people not available) !";
    } else {
      people.style.borderColor = "";
      document.getElementById("peopleerror").innerText = "";
    }
  
    let message = document.getElementById("message");
    if (message.value.length < 10) {
      tablestatus = false;
      message.style.borderColor = "red";
      document.getElementById("messageerror").innerText = "invalid message (message should contain atleast 10 characters)!";
    } else {
      message.style.borderColor = "";
      document.getElementById("messageerror").innerText = "";
    }
  
    if (tablestatus) 
    {
      swal("","Table for "+ people.value +" people booked successfully !!", "success");
      name.value= "";
      email.value = "";
      date.value = "";
      time.value = "";
      message.value = "";
      people.value = "";
      mob.value = "";
    }
     
     
  };
  
  const reset = () => {
    let name = document.getElementById("name");
    name.value = "";
    name.style.borderColor = "";
    document.getElementById("nameerror").innerText = "";
  
    let email = document.getElementById("email");
    email.value = "";
    email.style.borderColor = "";
    document.getElementById("emailerror").innerText = "";

    let mob = document.getElementById("mob");
    mob.value = "";
    mob.style.borderColor = "";
    document.getElementById("moberror").innerText = "";

    let date = document.getElementById("date");
    date.value = "";
    date.style.borderColor = "";
    document.getElementById("dateerror").innerText = "";

    let time = document.getElementById("time");
    time.value = "";
    time.style.borderColor = "";
    document.getElementById("timeerror").innerText = "";

    let people = document.getElementById("people");
    people.value = "";
    people.style.borderColor = "";
    document.getElementById("peopleerror").innerText = "";
  
    let message = document.getElementById("message");
      message.value = "";
      message.style.borderColor = "";
      document.getElementById("messageerror").innerText = "";
  };
  


  //message validation

  const message_validation = () => {
    let messagestatus = true;
    //name
    let name = document.getElementById("mname");
    if (name.value == "") {
      messagestatus = false;
      mname.style.borderColor = "red";
      document.getElementById("mnameerror").innerText = "invalid name ! ";
    } else {
      mname.style.borderColor = "";
      document.getElementById("mnameerror").innerText = "";
    }
  
    //email
    let epattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // here before @ username will come it can have characters in a-z, A-Z, 0-9, _, ., -,
  // then @ required , then domainname will come that can have word with a-z,A-z, 0-9, -,
  // then . will come and then extension with size 2-4 character with a-z, A-z , 0-9 will come
  let email = document.getElementById("memail");
  if (!epattern.test(email.value)) {
   messagestatus = false;
    memail.style.borderColor = "red";
    document.getElementById("memailerror").innerText = "Invalid email !";
  } else {
    memail.style.borderColor = "";
    document.getElementById("memailerror").innerText = "";
  }

  //subject
  let subject = document.getElementById("msub");
  if (subject.value == "") {
    messagestatus = false;
    msub.style.borderColor = "red";
    document.getElementById("msuberror").innerText = "invalid subject ! ";
  } else {
    msub.style.borderColor = "";
    document.getElementById("msuberror").innerText = "";
  }

  //message
    let message = document.getElementById("mmessage");
    if (message.value.length < 10) {
      messagestatus = false;
      mmessage.style.borderColor = "red";
      document.getElementById("mmessageerror").innerText = "invalid message (message should contain atleast 10 characters)!";
    } else {
      message.style.borderColor = "";
      document.getElementById("mmessageerror").innerText = "";
    }
  
    if (messagestatus) 
    {
      swal("","Message sent successfully !!", "success");
      name.value= "";
      email.value = "";
      subject.value = "";
      message.value = "";
    }
     
     
  };
  
  const mreset = () => {
    let name = document.getElementById("mname");
    name.value = "";
    mname.style.borderColor = "";
    document.getElementById("mnameerror").innerText = "";
  
    let email = document.getElementById("memail");
    email.value = "";
    memail.style.borderColor = "";
    document.getElementById("memailerror").innerText = "";

    let sub = document.getElementById("msub");
    sub.value = "";
    msub.style.borderColor = "";
    document.getElementById("msuberror").innerText = "";

    let message = document.getElementById("mmessage");
      message.value = "";
      mmessage.style.borderColor = "";
      document.getElementById("mmessageerror").innerText = "";
  };
  