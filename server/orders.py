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
        message = None
        if isinstance(data, str):
            message = json.loads(data)
        else:
            message = data
        self.data = data 
        
        self.id = message["orderId"]
        self.items = message["items"]
        self.custAddress = message["addressDetails"]
        self.cust = message["person"]
        self.note = message["note"]
        self.coupon = message["coupon"]

        Order.allOrders.append(self)

    def getAllOpenOrders():
        openOrders = []
        for order in allOrders:
            if order.open:
                openOrders.add(order)
        return openOrders

    def export(self):
        return self.data

    def setState(self, newState):
        oldState = self.open
        self.open = newState
        return oldState == newState

    def cancle(self):
        Order.allOrders.remove(self)
        
