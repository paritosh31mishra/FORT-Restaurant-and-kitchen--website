const registervalidate = () => {
  let formstatus = true;

  //mobile
  let mob = document.getElementById("rmob");
  let mobpattern = /^[0]?[6789]\d{9}$/;
  if (!mobpattern.test(mob.value)) {
    formstatus = false;
    document.getElementById("rmoberror").innerText = " invalid mobile no.!";
  } else {
    document.getElementById("rmoberror").innerText = "";
  }

  //password
  let password = document.getElementById("rpassword");
  if (password.value.length < 8) {
    formstatus = false;
    document.getElementById("rpassworderror").innerText =
      "Password should be in 8 character!";
  } else {
    document.getElementById("rpassworderror").innerText = "";
  }

  //email
  let epattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // here before @ username will come it can have characters in a-z, A-Z, 0-9, _, ., -,
  // then @ required , then domainname will come that can have word with a-z,A-z, 0-9, -,
  // then . will come and then extension with size 2-4 character with a-z, A-z , 0-9 will come
  let email = document.getElementById("remail");
  if (!epattern.test(email.value)) {
    formstatus = false;
    document.getElementById("remailerror").innerText = "Invalid email !";
  } else {
    document.getElementById("remailerror").innerText = "";
  }

  //post data
  if (formstatus) {
    let url = "http://localhost:1234/user";
    let newuser = {
      email: email.value,
      mob: mob.value,
      password: password.value,
    };

    let postdata = {
      headers: { "Content-Type": "application/json" },
      // headers should be in small case
      // what type of data we are sending
      method: "POST",
      body: JSON.stringify(newuser), // array to json before sending
    };

    fetch(url, postdata)
      .then((data) => data.json)
      .then((responsedata) => {
        swal(
          "Registered Successfully !!",
          "Now you can login in...",
          "success"
        );
      });
  }
};

const uservalidate = () => {
  let formstatus = true;

  //email
  let epattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // here before @ username will come it can have characters in a-z, A-Z, 0-9, _, ., -,
  // then @ required , then domainname will come that can have word with a-z,A-z, 0-9, -,
  // then . will come and then extension with size 2-4 character with a-z, A-z , 0-9 will come
  let email = document.getElementById("uemail");
  if (!epattern.test(email.value)) {
    formstatus = false;
    document.getElementById("uemailerror").innerText = "Invalid email !";
  } else {
    document.getElementById("uemailerror").innerText = "";
  }

  //password
  let password = document.getElementById("upassword");
  if (password.value.length < 8) {
    formstatus = false;
    document.getElementById("upassworderror").innerText =
      "Password should be in 8 character!";
  } else {
    document.getElementById("upassworderror").innerText = "";
  }

  if (formstatus) {
    let url = "http://localhost:1234/user";
    let flag = 0;
    fetch(url)
      .then((data) => data.json())
      .then((responsedata) => {
        responsedata.map((itemname) => {
          if (
            password.value == itemname.password &&
            email.value == itemname.email
          ) {
            flag = 1;
            swal("Logged in Successfully !!", "Welcome to Fort", "success");
            location.replace("home.html");
            //direct to link
          }
        });
        if (flag == 0) {
          alert("Wrong email and password ! try again...");
          document.getElementById("uemail").value = "";
          document.getElementById("upassword").value = "";
        }
      });
  }
};

const adminvalidate = () => {
  let formstatus = true;

  //email
  let epattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // here before @ username will come it can have characters in a-z, A-Z, 0-9, _, ., -,
  // then @ required , then domainname will come that can have word with a-z,A-z, 0-9, -,
  // then . will come and then extension with size 2-4 character with a-z, A-z , 0-9 will come
  let email = document.getElementById("aemail");
  if (!epattern.test(email.value)) {
    formstatus = false;
    document.getElementById("aemailerror").innerText = "Invalid email !";
  } else {
    document.getElementById("aemailerror").innerText = "";
  }

  //password
  let password = document.getElementById("apassword");
  if (password.value.length < 8) {
    formstatus = false;
    document.getElementById("apassworderror").innerText =
      "Password should be in 8 character!";
  } else {
    document.getElementById("apassworderror").innerText = "";
  }

  //mobile
  let mob = document.getElementById("amob");
  let mobpattern = /^[0]?[6789]\d{9}$/;
  if (!mobpattern.test(mob.value)) {
    formstatus = false;
    document.getElementById("amoberror").innerText = " invalid mobile no.!";
  } else {
    document.getElementById("amoberror").innerText = "";
  }

  if (formstatus) {
    let url = "http://localhost:1234/admin";
    let flag = 0;
    fetch(url)
      .then((data) => data.json())
      .then((responsedata) => {
        responsedata.map((itemname) => {
          if (
            password.value == itemname.password &&
            email.value == itemname.email &&
            mob.value == itemname.mob
          ) {
            flag = 1;
            swal("Logged in Successfully !!", "Welcome to Fort", "success");
            //direct to link
            location.replace("product.html");
          }
        });
        if (flag == 0) {
          alert("Wrong input data ! try again...");
          document.getElementById("aemail").value = "";
          document.getElementById("apassword").value = "";
          document.getElementById("amob").value = "";
        }
      });
  }
};
