// add product in the orderlist

let names = [];
let types = [];
let prices = [];
let qtys = [];
let total = [];

const delproduct = (index) => {
  names.splice(index, 1);
  types.splice(index, 1);
  prices.splice(index, 1);
  qtys.splice(index, 1);
  total.splice(index, 1);
  printitems(); // reload
};

const changeqty = (value, index) => {
  if (value > 0) {
    qtys[index] = value;
    total[index] = qtys[index] * prices[index];
    // alert(qtys[index]);
  } else {
    qtys[index] = 1;
    alert("invalid qty! value should be positive othewise 1 will be consider");
  }
  printitems();
};

const printitems = () => {
  let count = 0;
  let data = "";
  let sum = 0;
  if (total.length != 0) {
    total.map((price) => {
      sum = sum + parseInt(price);
    });
  }
  for (let i = 0; i < names.length; i++) {
    count = i + 1;
    data = data + "<tr class='text-center'>";
    data = data + "<td>" + count + "</td>";
    data = data + "<td>" + names[i] + "</td>";
    data = data + "<td>" + prices[i] + "</td>";
    data =
      data +
      "<td class='text-center'><input type='number' value='" +
      qtys[i] +
      "' class='form-control' style='width:70px; height:45px;' onchange='changeqty(this.value, " +
      i +
      ")' /></td>";
    data = data + "<td>" + total[i] + "</td>";
    data =
      data +
      "<td><div onclick='delproduct(" +
      i +
      ")'><i class='fa-solid fa-trash' style='color:red;' ></i> </div></td>";
    data = data + "</tr>";
  }
  data = data + "<tr class='text-center  fs-4'>";
  data = data + "<td colspan='6' class='text-danger'>";
  data = data + "Total -" + sum;
  data = data + "</td>";
  data = data + "</tr>";
  document.getElementById("p_details").innerHTML = data;
};

const place_order = () => {
  swal("", "Ordered Successfully !!", "success");
};

const add_allmenu = (p_id) => {
  let url1 = "http://localhost:1234/allmenu/" + p_id;
  document.getElementById("btncolor" + p_id).classList.add("changecolor");
  document.getElementById("btncolor" + p_id).innerHTML =
    "Added <i class='fa-solid fa-check-double'></i> ";

  fetch(url1)
    .then((aboutitem) => aboutitem.json())
    .then((responsedata) => {
      let t = names.includes(responsedata.name);
      if (t) alert("Already selected !! ");
      else {
        names.unshift(responsedata.name);
        types.push(responsedata.type);
        prices.unshift(responsedata.price);
        qtys.unshift(1);
        total.unshift(responsedata.price);
        printitems();
      }
    });
};

const add_drinks = (p_id) => {
  let url1 = "http://localhost:1234/drinks/" + p_id;
  document.getElementById("btncolor" + p_id).classList.add("changecolor");
  document.getElementById("btncolor" + p_id).innerHTML =
    "Added <i class='fa-solid fa-check-double'></i> ";
  fetch(url1)
    .then((aboutitem) => aboutitem.json())
    .then((responsedata) => {
      let t = names.includes(responsedata.name);
      if (t) alert("Already selected !! ");
      else {
        names.unshift(responsedata.name);
        types.push(responsedata.type);
        prices.unshift(responsedata.price);
        qtys.unshift(1);
        total.unshift(responsedata.price);
        printitems();
      }
    });
};

const add_lunch = (p_id) => {
  document.getElementById("btncolor" + p_id).classList.add("changecolor");
  document.getElementById("btncolor" + p_id).innerHTML =
    "Added <i class='fa-solid fa-check-double'></i> ";
  let url1 = "http://localhost:1234/lunch/" + p_id;

  fetch(url1)
    .then((aboutitem) => aboutitem.json())
    .then((responsedata) => {
      let t = names.includes(responsedata.name);
      if (t) alert("Already selected !! ");
      else {
        names.unshift(responsedata.name);
        types.push(responsedata.type);
        prices.unshift(responsedata.price);
        qtys.unshift(1);
        total.unshift(responsedata.price);
        printitems();
      }
    });
};

const add_dinner = (p_id) => {
  document.getElementById("btncolor" + p_id).classList.add("changecolor");
  document.getElementById("btncolor" + p_id).innerHTML =
    "Added <i class='fa-solid fa-check-double'></i> ";
  let url1 = "http://localhost:1234/dinner/" + p_id;

  fetch(url1)
    .then((aboutitem) => aboutitem.json())
    .then((responsedata) => {
      let t = names.includes(responsedata.name);
      if (t) alert("Already selected !! ");
      else {
        names.unshift(responsedata.name);
        types.push(responsedata.type);
        prices.unshift(responsedata.price);
        qtys.unshift();
        total.unshift(responsedata.price);
        printitems();
      }
    });
};

const all_product = () => {
  let url = "http://localhost:1234/allmenu";
  let data =
    " <div class='container bg-white shadow-lg rounded p-4 food' style='margin-bottom: 5%; ' > ";
  let list_type = "allmenu";
  fetch(url)
    .then((aboutallmenu) => aboutallmenu.json())
    .then((responsedata) => {
      responsedata.map((itemname, index) => {
        let p_id = itemname.id;
        let p_image = itemname.image;
        let name = itemname.name;
        let type = itemname.type;
        let price = itemname.price;
        let rating = itemname.rating;

        data = data + "<section class=' p-4'>";
        data =
          data +
          "<div class='bg-light container shadow-lg rounded p-4 food-item' >";
        data = data + "<div class=' row img-frame  rounded'>";
        data =
          data +
          "<div  class='pic rounded' style='background-image: url(" +
          p_image +
          ");'> </div>";
        data = data + "</div>";

        data =
          data +
          "<div class='row p-3' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-dark' style='font-weight: bold;'> <p>" +
          name +
          "</p> <font style='background-color:orange; margin-left: 5px;' class='p-1 rounded text-white'>" +
          type +
          "</font></div>";
        data = data + " </div>";

        data =
          data +
          " <div class='row' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          "<div class='col-lg-12 text-center' style=' font-size: 12px;'>";
        data = data + "  <label class='text-danger'>Ratting-</label>";
        data = data + rating;
        data = data + "</div>";

        data =
          data +
          "<div class='row p-2' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-danger fs-5' style='font-weight: bold;'> Price -  <font class'p-1  text-dark'>" +
          price +
          " <i class='fa-solid fa-indian-rupee-sign text-dark'></i></font></div>";
        data = data + "</div> ";

        data = data + "<div class='row p-3'>";
        data =
          data +
          "<div class='col-lg-12 text-center'><button class='btn btn-dark' id='btncolor" +
          p_id +
          "' onclick='add_allmenu(" +
          p_id +
          ")' style=' border-radius:0px; width:80%;' > Add </button></div>";
        data = data + "</div>";
        data = data + "</div>";
        data = data + "</section>";
      });
      data = data + "</div>";
      document.getElementById("product-box").innerHTML = data;
    });
};

const drinks = () => {
  let url = "http://localhost:1234/drinks";
  let data =
    " <div class='container bg-white shadow-lg rounded p-4 food' style='margin-bottom: 5%; ' > ";

  fetch(url)
    .then((aboutallmenu) => aboutallmenu.json())
    .then((responsedata) => {
      responsedata.map((itemname, index) => {
        let p_id = itemname.id;
        let p_image = itemname.image;
        let name = itemname.name;
        let type = itemname.type;
        let price = itemname.price;
        let rating = itemname.rating;
        data = data + "<section class=' p-4'>";
        data =
          data +
          "<div class='bg-light container shadow-lg rounded p-4 food-item' >";
        data = data + "<div class=' row img-frame  rounded'>";
        data =
          data +
          "<div  class='pic rounded' style='background-image: url(" +
          p_image +
          ");'> </div>";
        data = data + "</div>";

        data =
          data +
          "<div class='row p-3' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-dark' style='font-weight: bold;'> <p>" +
          name +
          "</p> <font style='background-color:orange; margin-left: 5px;' class='p-1 rounded text-white'>" +
          type +
          "</font></div>";
        data = data + " </div>";

        data =
          data +
          " <div class='row' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          "<div class='col-lg-12 text-center' style=' font-size: 12px;'>";
        data = data + "  <label class='text-danger'>Ratting-</label>";
        data = data + rating;
        data = data + "</div>";

        data =
          data +
          "<div class='row p-2' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-danger fs-5' style='font-weight: bold;'> Price -  <font class'p-1  text-dark'>" +
          price +
          " <i class='fa-solid fa-indian-rupee-sign text-dark'></i></font></div>";
        data = data + "</div> ";

        data = data + "<div class='row p-3'>";
        data =
          data +
          "<div class='col-lg-12 text-center'><button class='btn btn-dark' id='btncolor" +
          p_id +
          "' onclick='add_drinks(" +
          p_id +
          ")' style=' border-radius:0px; width:80%;'> Add </button></div>";
        data = data + "</div>";
        data = data + "</div>";
        data = data + "</section>";
      });
      data = data + "</div>";
      document.getElementById("product-box").innerHTML = data;
    });
};

const lunch = () => {
  let url = "http://localhost:1234/lunch";
  let data =
    " <div class='container bg-white shadow-lg rounded p-4 food' style='margin-bottom: 5%; ' > ";

  fetch(url)
    .then((aboutallmenu) => aboutallmenu.json())
    .then((responsedata) => {
      responsedata.map((itemname, index) => {
        let p_id = itemname.id;
        let p_image = itemname.image;
        let name = itemname.name;
        let type = itemname.type;
        let price = itemname.price;
        let rating = itemname.rating;
        data = data + "<section class=' p-4'>";
        data =
          data +
          "<div class='bg-light container shadow-lg rounded p-4 food-item' >";
        data = data + "<div class=' row img-frame  rounded'>";
        data =
          data +
          "<div  class='pic rounded' style='background-image: url(" +
          p_image +
          ");'> </div>";
        data = data + "</div>";

        data =
          data +
          "<div class='row p-3' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-dark' style='font-weight: bold;'> <p>" +
          name +
          "</p> <font style='background-color:orange; margin-left: 5px;' class='p-1 rounded text-white'>" +
          type +
          "</font></div>";
        data = data + " </div>";

        data =
          data +
          " <div class='row' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          "<div class='col-lg-12 text-center' style=' font-size: 12px;'>";
        data = data + "  <label class='text-danger'>Ratting-</label>";
        data = data + rating;
        data = data + "</div>";

        data =
          data +
          "<div class='row p-2' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-danger fs-5' style='font-weight: bold;'> Price -  <font class'p-1  text-dark'>" +
          price +
          " <i class='fa-solid fa-indian-rupee-sign text-dark'></i></font></div>";
        data = data + "</div> ";

        data = data + "<div class='row p-3'>";
        data =
          data +
          "<div class='col-lg-12 text-center'><button class='btn btn-dark' id='btncolor" +
          p_id +
          "' onclick='add_lunch(" +
          p_id +
          ")' style=' border-radius:0px; width:80%;'> Add </button></div>";
        data = data + "</div>";
        data = data + "</div>";
        data = data + "</section>";
      });
      data = data + "</div>";
      document.getElementById("product-box").innerHTML = data;
    });
};

const dinner = () => {
  let url = "http://localhost:1234/dinner";
  let data =
    " <div class='container bg-white shadow-lg rounded p-4 food' style='margin-bottom: 5%; ' > ";

  fetch(url)
    .then((aboutallmenu) => aboutallmenu.json())
    .then((responsedata) => {
      responsedata.map((itemname, index) => {
        let p_id = itemname.id;
        let p_image = itemname.image;
        let name = itemname.name;
        let type = itemname.type;
        let price = itemname.price;
        let rating = itemname.rating;
        data = data + "<section class=' p-4'>";
        data =
          data +
          "<div class='bg-light container shadow-lg rounded p-4 food-item' >";
        data = data + "<div class=' row img-frame  rounded'>";
        data =
          data +
          "<div  class='pic rounded' style='background-image: url(" +
          p_image +
          ");'> </div>";
        data = data + "</div>";

        data =
          data +
          "<div class='row p-3' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-dark' style='font-weight: bold;'> <p>" +
          name +
          "</p> <font style='background-color:orange; margin-left: 5px;' class='p-1 rounded text-white'>" +
          type +
          "</font></div>";
        data = data + " </div>";

        data =
          data +
          " <div class='row' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          "<div class='col-lg-12 text-center' style=' font-size: 12px;'>";
        data = data + "  <label class='text-danger'>Ratting-</label>";
        data = data + rating;
        data = data + "</div>";

        data =
          data +
          "<div class='row p-2' style='font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;'>";
        data =
          data +
          " <div class='col-lg-12 text-center text-danger fs-5' style='font-weight: bold;'> Price -  <font class'p-1  text-dark'>" +
          price +
          " <i class='fa-solid fa-indian-rupee-sign text-dark'></i></font></div>";
        data = data + "</div> ";

        data = data + "<div class='row p-3'>";
        data =
          data +
          "<div class='col-lg-12 text-center'><button class='btn btn-dark' id='btncolor" +
          p_id +
          "' onclick='add_dinner(" +
          p_id +
          ")' style=' border-radius:0px; width:80%;'> Add </button></div>";
        data = data + "</div>";
        data = data + "</div>";
        data = data + "</section>";
      });
      data = data + "</div>";
      document.getElementById("product-box").innerHTML = data;
    });
};

const storeorder = () => {
  let name = document.getElementById("name").value;
  let mob = document.getElementById("mob").value;
  let city = document.getElementById("city").value;
  let adrs = document.getElementById("adrs").value;
  let neworder = {
    name: name,
    city: city,
    mob: mob,
    adrs: adrs,
    orderdetails: {
      items: names,
      types: types,
      prices: prices,
      qtys: qtys,
      total: total,
    },
  };
  let url = "http://localhost:1234/orderes";
  let postdata = {
    headers: { "Content-Type": "application/json" },
    // headers should be in small case
    // what type of data we are sending
    method: "POST",
    body: JSON.stringify(neworder), // array to json before sending
  };
  fetch(url, postdata)
    .then((aboutitem) => aboutitem.json())
    .then((responsedata) => {
      swal("Ordered Successfully !", "", "success");
      names = [];
      types = [];
      prices = [];
      qtys = [];
      total = [];
      let data = "";
      data = data + "<tr>";
      data =
        data +
        " <td colspan='6' class='text-center text-danger'>No Record !!</td>";
      data = data + "</tr>";

      document.getElementById("p_details").innerHTML = data;
    });
};

const validation = () => {
  let orderstatus = true;
  let name = document.getElementById("name");
  if (name.value == "") {
    orderstatus = false;
    name.style.borderColor = "red";
    document.getElementById("nameerror").innerText = "invalid name ! ";
  } else {
    name.style.borderColor = "";
    document.getElementById("nameerror").innerText = "";
  }

  let mob = document.getElementById("mob");
  let mobpattern = /^[0]?[6789]\d{9}$/;
  if (!mobpattern.test(mob.value)) {
    orderstatus = false;
    mob.style.borderColor = "red";
    document.getElementById("moberror").innerText = " invalid mobile no.!";
  } else {
    mob.style.borderColor = "";
    document.getElementById("moberror").innerText = "";
  }

  let cityname = document.getElementById("city");
  if (cityname.value == "") {
    orderstatus = false;
    cityname.style.borderColor = "red";
    document.getElementById("cityerror").innerText = "invalid city name !";
  } else {
    cityname.style.borderColor = "";
    document.getElementById("cityerror").innerText = "";
  }

  let adrs = document.getElementById("adrs");
  if (adrs.value.length < 20) {
    orderstatus = false;
    adrs.style.borderColor = "red";
    document.getElementById("adrserror").innerText = "invalid Address !";
  } else {
    adrs.style.borderColor = "";
    document.getElementById("adrserror").innerText = "";
  }

  if (orderstatus) {
    if (names.length == 0) alert("Please add products !!");
    else {
      swal("", "Ordered Successfully !!", "success");
      storeorder();
      name.value = "";
      mob.value = "";
      adrs.value = "";
      city.value = "";
      names = [];
      types = [];
      prices = [];
      qtys = [];
      total = [];
    }
  }
  // return orderstatus;
};

const reset = () => {
  let name = document.getElementById("name");
  name.value = "";
  name.style.borderColor = "";
  document.getElementById("nameerror").innerText = "";

  let mob = document.getElementById("mob");
  mob.value = "";
  mob.style.borderColor = "";
  document.getElementById("moberror").innerText = "";

  let cityname = document.getElementById("city");
  cityname.value = "";
  cityname.style.borderColor = "";
  document.getElementById("cityerror").innerText = "";

  let adrs = document.getElementById("adrs");
  adrs.value = "";
  adrs.style.borderColor = "";
  document.getElementById("adrserror").innerText = "";
};
