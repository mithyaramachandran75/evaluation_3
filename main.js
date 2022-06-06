function page(n,e,a,a){
this.name=n;
this.email=e;
this.address=a;
this.amount=a;
}


function storeData(e){
    e.preventDefault();
    storeData.innerHTML=null;
let form = document.getElementById("signin");
let name= form.name.value;
let email=form.email.value;
let address=form.address.value;
let amount=form.amount.value;

let store=new page(name,email,address,amount)

let data=JSON.parse(localStorage.getItem("user")) || [];
data.push(store);
localStorage.setItem('user',JSON.stringify(data));

console.log(store)
}