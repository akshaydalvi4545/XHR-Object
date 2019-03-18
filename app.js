document.getElementById("button").addEventListener('click',function(e){

loadData();
e.preventDefault();
});


function loadData(){
  console.log('Inside load Data');
const xhr=new XMLHttpRequest();


//OPEN
xhr.open('GET','data.txt',true);

//onload
xhr.onload=function(){
  if(this.status===200){
    const output=this.responseText;
    document.getElementById("getData").innerHTML=output;
    
  }
}

xhr.send();


}

document.getElementById("getCustomer").addEventListener('click',loadCustomer);


function loadCustomer(e){
  const xhr=new XMLHttpRequest();
  xhr.open('GET','customer.json',true);
  xhr.onload=function(){
    if(this.status===200){
      const customer=JSON.parse(this.responseText);
      const output=`
      <ul>
      <li>ID: <b>${customer.id}</b></li>
      <li>Name:<b> ${customer.name}</b></li>
      <li>Phone:<b> ${customer.Phone}</b></li>
      </sul>
      `;
      document.getElementById("getSCustomer").innerHTML=output
    }
    
  }
  xhr.send();

}

document.getElementById("getCustomers").addEventListener('click',loadCustomers);
function loadCustomers(e){
  const xhr=new XMLHttpRequest();
  xhr.open('GET','customers.json',true);
  xhr.onload=function(){
    if(this.status===200){
      const customers=JSON.parse(this.responseText);
      let output;

      customers.forEach(function(customer){

        output+=`
        <ul>
        <li>ID: <b>${customer.id}</b></li>
        <li>Name:<b> ${customer.name}</b></li>
        <li>Phone:<b> ${customer.Phone}</b></li>
        </ul>
        `;

      });


      document.getElementById("getSCustomer").innerHTML=output
    }
    
  }
  xhr.send();

}