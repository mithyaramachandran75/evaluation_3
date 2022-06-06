// const api_key="https://masai-vouchers-api.herokuapp.com/api/vouchers";

let voucher=document.querySelector("#voucher")
let amount=document.querySelector("#wallet_balance")
user_data=JSON.parse(localStorage.getItem("user"))

fetchingData()
wallet()

 async function fetchingData(){
try{
    let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    let fetcher=await fetch(url)
    let data=await fetcher.json()
    displayData(data[0].voucher)
}catch(err){
console.log(err)
}
}
function displayData(data){
    voucher.innerHTML=null;
    data.forEach(function(elem){
        let div=document.createElement("div")
        div.setAttribute("id","voucher_list")

        let img=document.createElement("img")
        img.src=elem.imgage

        let name=document.createElement("h4")
        name.innerText=elem.name
        

    })
}