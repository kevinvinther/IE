import json

# Cyclomatic complexity = 2 
def loadOrders():
    f = open("data.json")
    data = json.load(f)
    for o in data:
        Order(o)
    f.close()

# Cyclomatic complexity = 2
def writeOrders():
    with open("data.json", "w") as out:
        data = [odr.data for odr in Order.allOrders]
        json.dump(data, out)
    Order.allOrders = []

# Cyclomatic complexity = 1
def getAllOrders():
    return Order.allOrders

# Cyclomatic complexity = 3
def getOrderById(orderId):
    for odr in Order.allOrders:
        if odr.id == orderId:
            return odr
    return None


class Order(object):

    allOrders = []

    # Cyclomatic complexity = 1
    def __init__(self, data):
        self.open = True
        self.data = data 
        
        self.id = data["orderId"]
        self.items = data["items"]
        self.custAddress = data["addressDetails"]
        self.cust = data["person"]
        self.note = data["note"]
        self.coupon = data["coupon"]

        Order.allOrders.append(self)

    # Cyclomatic complexity = 3
    def getAllOpenOrders(self):
        openOrders = []
        for order in Order.allOrders:
            if order.open:
                openOrders.append(order)
        return openOrders

    # Cyclomatic complexity = 1
    def export(self):
        return self.data

    # Cyclomatic complexity = 1
    def setState(self, newState):
        oldState = self.open
        self.open = newState
        return oldState == newState

    # Cyclomatic complexity = 1
    def cancle(self):
        Order.allOrders.remove(self)
        
