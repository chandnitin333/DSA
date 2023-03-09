lst = [1,2,3,4,5,4,3,1]
dc = {}
for l in lst:
    if l in dc.keys() :
       dc.update({l:dc[l] + 1})     
     
    else:
        dc.update({l:1})
        

print(dc)



lst2 = lst;
   
lst.append(9)
print(lst2);     
     
lst3 =  lst.copy()

lst.append(10)
print(lst2); 

print(lst3)
        

    
    