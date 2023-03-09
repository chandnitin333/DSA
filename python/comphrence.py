
lst = [i for i in range(10) if i % 2]

print(lst)


dists = {i:i * i for i in range(1,10)}

print(dists)


"""
GENERATOR

"""
def sqrt(num):
    for i in range(1,num):
        yield i*i


i = sqrt(5)

print(next(i))
print(next(i))
print(next(i))
print(next(i))



"""
ITERATOR 
"""

iter_list = iter(['A','B','C'])

print(next(iter_list))
print(next(iter_list))
print(next(iter_list))













