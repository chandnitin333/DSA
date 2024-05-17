var Input= [{"name":"Anam","grade":"A"},{"name":"Arjun","grade":"A+"},{"name":"Iram","grade":"B+"},{"name":"Zia","grade":"C"},{"name":"Reah","grade":"B"},{"name":"Karan","grade":"A"},{"name":"Mithum","grade":"B"},{"name":"Ankur","grade":"B+"}]


// Output: [{"name":"Arjun","grade":"A+"},{"name":"Anam","grade":"A"},{"name":"Karan","grade":"A"},{"name":"Ankur","grade":"B+"},{"name":"Iram","grade":"B+"},{"name":"Reah","grade":"B"},{"name":"Mithum","grade":"B"},{"name":"Zia","grade":"C"}]


Input.sort((a,b)=>{
    var GenOrder ={ 'A+':1,'A':2,'B+':3,'B':4,'C+':5,'C':6,'D+':7,'D':8}
    return GenOrder[a.grade] - GenOrder[b.grade]
})

console.log(Input)