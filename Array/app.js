var nm = ["hamza "," zain "," saad "];

pop : Use to remove last Elements of the Array
nm.pop();

--------------------------------------------

push : Use to Add Elements in the last
nm.push(" Wahab ")

--------------------------------------------

shift : Use to remove Elements from the first
nm.shift();

--------------------------------------------

unshift : Use to Add Elements from the first
nm.unshift("wahab")

--------------------------------------------


Splice : Use to delete & add the elements between the Array Elements
nm.splice(1,0,"wahab");

--------------------------------------------

Slice : use to copy the Array Elements
var copynm = nm.slice(1,2);

--------------------------------------------


alert(nm);
alert(copynm);