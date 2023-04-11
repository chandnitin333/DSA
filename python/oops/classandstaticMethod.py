from datetime  import date;

class Person:

    def __init__(self,name,age) :
        self.name = name
        self.age = age

    @classmethod
    def fromBirthYear(cls,name,year):
        return cls(name, date.today().year - year)
    
    @staticmethod
    def isAdult(age):
        return age > 18
    
    def __del__(self):
        print('Destructor called, Employee deleted.')
    



person1  = Person('Nitin',29)

person2 =  Person.fromBirthYear('Nitts',1991)


print(person1.age)
print(person2.age)

print("Is Adult : ", Person.isAdult(person1.age))
