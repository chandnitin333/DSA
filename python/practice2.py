str = "Nitin Satish Chandekar"
dit = dict()
str= str.upper()
for i in range(len(str)):
    if str[i] in dit.keys() :
        dit.update({str[i] : dit[str[i]] +1 })

    else:
         dit.update({str[i]: 1})

    

print(dit)