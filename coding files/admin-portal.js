const del_allmenu = (p_id) => {
  let url = "http://localhost:1234/allmenu/"+p_id;
  let postdata = {method:"DELETE"};
  fetch(url,postdata)
  .then(response => response.json())
  .then(itemdata =>{
    swal("Deleted Successfully !!", "", "success" );
    all_product();
  })
};

const del_drinks = (p_id) => {
  let url = "http://localhost:1234/drinks/"+p_id;
  let postdata = {method:"DELETE"};
  fetch(url,postdata)
  .then(response => response.json())
  .then(itemdata =>{
    swal("Deleted Successfully !!", "", "success" );
    drinks();
  })
};

const del_lunch = (p_id) => {
  let url = "http://localhost:1234/lunch/"+p_id;
  let postdata = {method:"DELETE"};
  fetch(url,postdata)
  .then(response => response.json())
  .then(itemdata =>{
    swal("Deleted Successfully !!", "", "success" );
    lunch();
  })
};

const del_dinner = (p_id) => {
  let url = "http://localhost:1234/dinner/"+p_id;
  let postdata = {method:"DELETE"};
  fetch(url,postdata)
  .then(response => response.json())
  .then(itemdata =>{
    swal("Deleted Successfully !!", "", "success" );
    dinner();
  })
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
            "' onclick='del_allmenu(" +
            p_id +
            ")' style=' border-radius:0px; width:80%;' > Delete </button></div>";
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
            "' onclick='del_drinks(" +
            p_id +
            ")' style=' border-radius:0px; width:80%;'> Delete </button></div>";
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
            "' onclick='del_lunch(" +
            p_id +
            ")' style=' border-radius:0px; width:80%;'> Delete </button></div>";
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
            "' onclick='del_dinner(" +
            p_id +
            ")' style=' border-radius:0px; width:80%;'> Delete </button></div>";
          data = data + "</div>";
          data = data + "</div>";
          data = data + "</section>";
        });
        data = data + "</div>";
        document.getElementById("product-box").innerHTML = data;
      });
  };
  
  const additem = () => {
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
      });
  };
  
  const validation = () => {
    //name
    let formstatus = true;
    let name = document.getElementById("name");
    if (name.value == "") {
      formstatus = false;
      name.style.borderColor = "red";
      document.getElementById("nameerror").innerText = "invalid name ! ";
    } else {
      name.style.borderColor = "";
      document.getElementById("nameerror").innerText = "";
    }
  
    //price
    let price = document.getElementById("price");
    if (price.value == 0) {
      formstatus = false;
      price.style.borderColor = "red";
      document.getElementById("priceerror").innerText = "invalid price ! ";
    } else {
      price.borderColor = "";
      document.getElementById("priceerror").innerText = "";
    }
    
  //product type
    let type = document.getElementById("type");
    if (type.value == "") {
      formstatus = false;
      type.style.borderColor = "red";
      document.getElementById("typeerror").innerText = "invalid type !";
    } else {
      type.style.borderColor = "";
      document.getElementById("typeerror").innerText = "";
    }
  
    //list type
    let listtype = document.getElementById("listtype");
    if (listtype.value == "" || listtype.value == "Choose") {
      formstatus = false;
      listtype.style.borderColor = "red";
      document.getElementById("listtypeerror").innerText = "invalid listtype !";
    } else {
      listtype.style.borderColor = "";
      document.getElementById("listtypeerror").innerText = "";
    }
  
    //image url
    let url = document.getElementById("url");
    if (url.value == "") {
      formstatus = false;
      url.style.borderColor = "red";
      document.getElementById("urlerror").innerText = "invalid url !";
    } else {
      url.style.borderColor = "";
      document.getElementById("urlerror").innerText = "";
    }


    if (formstatus) {
     
      let newproduct = {
        image: url.value,
        name: name.value,
        price: price.value,
        type: type.value,
        rating: "<i class='fa fa-star' style='color:gold'></i> <i class='fa fa-star' style='color:gold'></i><i class='fa fa-star' style='color:gold'></i>"
      }

      let postdata = {
        headers: { "Content-Type": "application/json" },
        // headers should be in small case
        // what type of data we are sending
        method: "POST",
        body: JSON.stringify(newproduct), // array to json before sending
      };

    
      let url1 = "http://localhost:1234/"+listtype.value;
      fetch(url1,postdata)
      .then(aboutitem => aboutitem.json())
      .then((item)=>{
        swal("Successfully Added !", "", "success");
      });
    }
   
  };
  
  const reset = () => {
    let name = document.getElementById("name");
    name.value = "";
    name.style.borderColor = "";
    document.getElementById("nameerror").innerText = "";
  
    let price = document.getElementById("price");
    price.value = 0;
    price.style.borderColor = "";
    document.getElementById("priceerror").innerText = "";
  
    let type = document.getElementById("type");
    type.value = "";
    type.style.borderColor = "";
    document.getElementById("typeerror").innerText = "";

    let listtype = document.getElementById("listtype");
    listtype.value = "";
    listtype.style.borderColor = "";
    document.getElementById("listtypeerror").innerText = "";

    let url = document.getElementById("url");
      url.value = "";
      url.style.borderColor = "";
      document.getElementById("urlerror").innerText = "";
  
  };
  

const show_history = () =>{
 
  let url = "http://localhost:1234/orderes";
  let names = [];
  let types = [];
  let prices = [];
  let qtys = [];
  let total = [];
  let data = "";
  let flag = 0;
  fetch(url)
  .then(aboutitem => aboutitem.json())
  .then((itemname) =>{
    itemname.map((item) =>{
      names = item.orderdetails.items;
      types = item.orderdetails.types;
      prices = item.orderdetails.prices;
      qtys = item.orderdetails.qtys;
      total = item.orderdetails.total;
      let sum = 0;
      flag = 1;
      total.map((a)=>{
        sum = sum + parseInt(a);
      })
      data = data + "<table class='table  table-hover table-bordered mb-4 mt-4' cellpadding ='2%' cellspacing='1%' border=''>";
      data = data + "<tr>";
      data = data + "<th>Name  </th>";
      data = data + "<td>"+ item.name + "</td>"
      data = data + "</tr>";
      data = data + "<tr>";
      data = data + "<th>city  </th>";
      data = data + "<td>"+ item.city+" </td>"
      data = data + "</tr>";
      data = data + "<tr>";
      data = data + "<th>Mobile  </th>";
      data = data + "<td>"+ item.mob+" </td>"
      data = data + "</tr>";
      data = data + "<tr>";
      data = data + "<th>Address  </th>";
      data = data + "<td>"+ item.adrs+" </td>"
      data = data + "</tr>";
      data = data + "</table>"

      //items details
      data = data + "<table class='table table-bordered table-hover mb-5' cellpadding ='5%' cellspacing='1%' border=''>";
      data = data + "<tr class='table-secondary'>";
      data = data + "<th>Name  </th>";
      data = data + "<th>Type </th>";
      data = data + "<th>Price </th>";
      data = data + "<th>Qty </th>";
      data = data + "<th>Total </th>";
      data = data + "</tr>";

      for(let i = 0;i<names.length;i++)
      {
        data = data + "<tr>";
        data = data + "<td>"+ names[i]+" </td>";
        data = data + "<td>"+ types[i] +"</td>";
        data = data + "<td>"+ prices[i] +"</td>";
        data = data + "<td>"+ qtys[i] +"</td>";
        data = data + "<td>"+ total[i]+" </td>";
        data = data + "</tr>";
      }

      data = data + "<tr >";
      data = data + "<td class='text-center text-danger fs-2' colspan='5'>Grand-Total: "+ sum + " </td>";
      data = data + "</tr>";
      data = data + "</table>"
      data = data + "<hr style='width: 100%;'/>";
    })
     if(flag == 1)
    document.getElementById("history-box").innerHTML = data;
    else{
      let text = "No history available !!"
      document.getElementById("history-box").innerText = text;
    }
  })
  
}

const del_user = (id) =>{
  let url = "http://localhost:1234/user/"+id;
  let data = {method: "DELETE"};
   fetch(url,data)
   .then(aboutitem => aboutitem.json())
   .then(item =>{
    swal("Deleted Successfully !!", "", "success");
    show_user(); //reload
   })
}

const show_user = () =>{
 
  let url = "http://localhost:1234/user";
  let data = "";
  let flag = 0;
  fetch(url)
  .then(aboutitem => aboutitem.json())
  .then((itemname) =>{
    itemname.map((item)=>{
      flag = 1;
      data = data + "<table class='table  table-hover table-bordered mb-4 mt-4 box' cellpadding ='2%' cellspacing='1%' >";
      data = data + "<tr>";
      data = data + "<th>Email  </th>";
      data = data + "<td>"+ item.email + "</td>"
      data = data + "</tr>";
      data = data + "<tr>";
      data = data + "<th>Mobile no.  </th>";
      data = data + "<td>"+ item.mob+" </td>"
      data = data + "</tr>";
      data = data + "<tr>";
      data = data + "<th>Password  </th>";
      data = data + "<td>"+ item.password+" </td>"
      data = data + "</tr>";
      data = data + "<tr>";
      data = data + "<td colspan='2' class='text-center'> <button class='btn btn-danger' onclick='del_user("+item.id+")'>Delete </button> </td>"
      data = data + "</tr>";
      data = data + "</table>"
      data = data + "<hr style='width: 100%;'/>";
    })
   if(flag == 1)
    document.getElementById("user-box").innerHTML = data;
  else
   {
    let text = "No user available !!";
    document.getElementById("user-box").innerText = text;
   }
  })
  
}