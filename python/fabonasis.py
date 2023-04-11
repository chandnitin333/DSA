

def Fibonancies(n):
    n1, n2 = 0, 1
    print("Fibonacci Series:", n1, n2, end=" ")
    for i in range(2, n):
        n3 = n1 + n2
        n1 = n2
        n2 = n3
        print(n3, end=" ")


# Fibonancies(10)


# print()


FBArr = [0, 1]
def getFabonancies(n):

    if n < 0:
        print("invalid Input")
    elif n < len(FBArr):
        return FBArr[n]
    else:
        FBArr.append(getFabonancies(n - 1) + getFabonancies(n - 2))
        return FBArr[n]


for i in range(10):
    getFabonancies(i)

print(FBArr)
