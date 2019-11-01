var yapayPostUrl = "";
var shopIdValue = "";
var scidValue = "";

var form = document.createElement("form");
form.setAttribute('method',"post");
form.setAttribute('action', yapayPostUrl);

var shopId = document.createElement("input");
shopId.setAttribute('type', "hidden");
shopId.setAttribute('name', "shopId");
shopId.setAttribute('value', shopIdValue);

var scid = document.createElement("input");
scid.setAttribute('type', "hidden");
scid.setAttribute('name', "scid");
scid.setAttribute('value', scidValue);

var sum = document.createElement("input");
sum.setAttribute('type', "hidden");
sum.setAttribute('name', "sum");
sum.setAttribute('value', actionArgs.sum);

var customerNumber = document.createElement("input");
customerNumber.setAttribute('type', "hidden");
customerNumber.setAttribute('name', "customerNumber");
customerNumber.setAttribute('value', actionArgs.customerNumber);

var custName = document.createElement("input");
custName.setAttribute('type', "hidden");
custName.setAttribute('name', "custName");
custName.setAttribute('value', actionArgs.custName);

var custEmail = document.createElement("input");
custEmail.setAttribute('type', "hidden");
custEmail.setAttribute('name', "custEmail");
custEmail.setAttribute('value', actionArgs.custEmail);

form.appendChild(shopId);
form.appendChild(scid);
form.appendChild(sum);
form.appendChild(customerNumber);
form.appendChild(custName);
form.appendChild(custEmail);

document.getElementsByTagName('body')[0].appendChild(form);

form.submit();