try: 
    a = [1, 2, 3] 
    print (a[3]) 
except LookupError: 
    print ("Index out of bound error.")
else: 
    print ("Success")

try:  
    a = 10/0  
    print (a)
except ArithmeticError:  
        print ("This statement is raising an arithmetic exception.")
else:  
    print ("Success.")


## USER DEfine ERRR

class Error(Exception):
    """Base class for other exceptions"""
    pass
 
class zerodivision(Error):
    """Raised when the input value is zero"""
    pass
 
try:
    i_num = int(input("Enter a number: "))
    if i_num == 0:
        raise zerodivision
except zerodivision:
    print("Input value is zero, try again!")
    print()

### FILE HND

# with open("file.text", "r") as file:
#     data = file.readlines()
#     for line in data:
#         word = line.split()
#         print (word)




import re
 
s = 'GeeksforGeeks: A computer science portal for geeks'
 
match = re.search(r'portal', s)
 
print('Start Index:', match.start())
print('End Index:', match.end())



