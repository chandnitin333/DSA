const employee = {
    firstName:'Nitin',
    lastName:"Chandekar"
}


function invite(grt1,grt2){
    console.log(
        grt1 + " " + this.firstName + " " + this.lastName + ", " + grt2
      );
}



invite.call(employee,"Hello","How are you.")


invite.apply(employee,["Hello","How are you"])

let emp1 = invite.bind(employee);



emp1("Hello","How are you")
