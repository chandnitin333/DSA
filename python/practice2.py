str = "Nitin Satish Chandekar"
dit = dict()
str= str.upper()
for str in str:
    if str in dit.keys() :
        dit.update({str : dit[str] +1 })

    else:
         dit.update({str: 1})

    

print(dit)