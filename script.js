let detailexist=localStorage.getItem("data");
let Fname=document.querySelector(".fname");
let Lname=document.querySelector(".lname");
let Country=document.querySelector(".country");
let Phone=document.querySelector(".phone");
let State=document.querySelector(".state");
let City=document.querySelector(".city");
let Village=document.querySelector(".village");
let button=document.querySelector("button");
let body=document.querySelector("body");
let container=document.querySelector(".container");
let h1=document.querySelector("h1");

if(detailexist)
{
    displaydata(JSON.parse(detailexist));
    // console.log(JSON.parse(detailexist));
    // console.log(detailexist.Fname);
}
else{
    askdetail();
}

function askdetail(){
let fname=prompt("Enter your first name");
let lname=prompt("Enter your last name");
let country=prompt("Enter your country name");
let phone=prompt("Enter your phone number");
let state=prompt("Enter your state name");
let city=prompt("Enter your city name");
let village=prompt("Enter your village name");
let userdetail={
    fname,
    lname,
    country,
    phone,
    state,
    city,
    village
}
Fname.innerText=`${userdetail.fname}`;
Lname.innerText=`${userdetail.lname}`;
Country.innerText=`${userdetail.country}`;
Phone.innerText=`${userdetail.phone}`;
State.innerText=`${userdetail.state}`;
City.innerText=`${userdetail.city}`;
Village.innerText=`${userdetail.village}`;
localStorage.setItem("data",JSON.stringify(userdetail));
}
function displaydata(disdata){
Fname.innerText=`${disdata.fname}`;
Lname.innerText=`${disdata.lname}`;
Country.innerText=`${disdata.country}`;
Phone.innerText=`${disdata.phone}`;
State.innerText=`${disdata.state}`;
City.innerText=`${disdata.city}`;
Village.innerText=`${disdata.village}`;
}
// displaydata();
let count=0;
button.addEventListener('click',()=>{
    count++;
    if(count%2==0)
    {
        body.style.backgroundColor="white";
        container.style.color="black";
        container.style.backgroundColor="white";
        h1.style.color="black";
        container.style.boxShadow="0 0 15px 0 black";
    }
    else{
        body.style.backgroundColor="black";
        container.style.color="white";
        container.style.backgroundColor="black";
        h1.style.color="white";
        container.style.boxShadow="0 0 15px 0 white";
    }
})