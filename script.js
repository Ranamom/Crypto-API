window.fetch("https://api.coinstats.app/public/v1/coins")
.then((response)=> response.json())
.then((data)=>cryptoDetails(data));

const cryptoDetails=(data)=>{
    var coins=data.coins;
    for(var i=0;i<100;i++){
        console.log(coins[i].name);
        const pElement=document.createElement('h1');
        pElement.innerHTML="Rank : "+coins[i].rank+" - "+coins[i].name;
        document.getElementById("root").appendChild(pElement);
        const imageElement=document.createElement('img');
        imageElement.src=coins[i].icon;
        document.getElementById("root").appendChild(imageElement);
        const price=document.createElement('p');
        price.innerHTML="Price :" +coins[i].price;
        document.getElementById("root").appendChild(price);
        const contact=document.createElement('p');
        contact.innerHTML="TwitterUrl :" +coins[i].twitterUrl;
        document.getElementById("root").appendChild(contact);
    }
};