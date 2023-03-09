class Dog :
    attr ="annimal"

    def __init__(self,name):
        self.name =name



Rodger = Dog("Rodger")
Tommy =  Dog("Tommy")



print("Rodger is {}".format(Rodger.name))




from pymongo import MongoClient

my_client = MongoClient('localhost', 27017)
db = my_client["customers"]
coll = db["customer"]

# Aggregation
cursor = coll.find()

for document in cursor:
	print(document)
