import json

def loadOrders():
    f = open("data.json")
    data = json.load(f)
    for o in data:
        Order(o)
    f.close()

def writeOrders():
    with open("data.json", "w") as out:
        data = [odr.data for odr in Order.allOrders]
        json.dump(data, out)
    Order.allOrders = []

def getAllOrders():
    return Order.allOrders

def getOrderById(orderId):
    for odr in Order.allOrders:
        if odr.id == orderId:
            return odr
    return None
        

class Order(object):

    allOrders = []

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

    def getAllOpenOrders(self):
        openOrders = []
        for order in Order.allOrders:
            if order.open:
                openOrders.append(order)
        return openOrders

    def export(self):
        return self.data

    def setState(self, newState):
        oldState = self.open
        self.open = newState
        return oldState == newState

    def cancle(self):
        Order.allOrders.remove(self)
        
