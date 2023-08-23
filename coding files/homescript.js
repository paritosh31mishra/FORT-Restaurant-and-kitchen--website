
          // Get the button
          let mybutton = document.getElementById("myBtn");
          
          // When the user scrolls down 20px from the top of the document, show the button
          window.onscroll = function() {scrollFunction()};
          
          function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }
          
          // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }

          // activate the link on scroll start
          document.addEventListener("scroll", change);
          function change() {
            let links = document.getElementsByClassName("link");
            let sect = document.getElementsByClassName("sect");
            for(let j = 0;j<sect.length;j++)
            {
              if(window.scrollY >= sect[j].offsetTop)
              {
                if(j>0)
                links[j-1].classList.remove("act");
                links[j].classList.add("act");
                if(j+1 < links.length)
                 links[j+1].classList.remove("act");
              }
              
            }
          }

          // content appear on scroll
          document.addEventListener("scroll", effectt);
          function effectt(){
            let a = document.getElementsByClassName("animate");
            for(let k = 0;k<a.length;k++)
            {
              if(window.scrollY >= a[k].offsetTop)
              {
                a[k].classList.remove("animate");
                a[k].classList.add("effect");
              }
            }
          }
          // activate the link on scroll end
         

          const validation = () =>{
            let orderstatus = true;
             let name = document.getElementById("name");
             if(name.value == "")
             {
              orderstatus = false;
              name.style.borderColor = "red";
              document.getElementById("nameerror").innerText = "invalid name ! ";
             }
             else{
              name.style.borderColor = "";
              document.getElementById("nameerror").innerText = "";
             }

             let mob = document.getElementById("mob");
             let mobpattern =  /^[0]?[6789]\d{9}$/;
             if(! mobpattern.test(mob.value))
             {
              orderstatus = false;
              mob.style.borderColor = "red";
              document.getElementById("moberror").innerText = " invalid mobile no.!";
             }
             else{
              mob.style.borderColor = "";
              document.getElementById("moberror").innerText = "";
             }

             let cityname = document.getElementById("city");
             if(cityname.value == "")
             {
              orderstatus = false;
              cityname.style.borderColor = "red";
              document.getElementById("cityerror").innerText = "invalid city name !";
             }
             else{
              cityname.style.borderColor = "";
              document.getElementById("cityerror").innerText = "";
             }

             let  adrs= document.getElementById("adrs");
             if(adrs.value.length < 20)
             {
              orderstatus = false;
              adrs.style.borderColor = "red";
              document.getElementById("adrserror").innerText = "invalid Address !";
             }
             else{
              adrs.style.borderColor = "";
              document.getElementById("adrserror").innerText = "";
             }
          }
        