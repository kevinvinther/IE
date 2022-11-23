import json

class Order(object):

    allOrders = []

    def __init__(self, data):
        self.data = data
        self.open = True
        message = None
        if isinstance(data, str):
            message = json.loads(data)
        else:
            message = data
        
        self.id = message["orderId"]
        self.items = message["items"]
        self.custAddress = message["addressDetails"]
        self.cust = message["person"]
        self.note = message["note"]
        self.coupon = message["coupon"]


        allOrders.add(self)

    def getAllOrders():
        return allOrders

    def getAllOpenOrders():
        openOrders = []
        for order in allOrders:
            if order.open:
                openOrders.add(order)
        return openOrders

    def export():
        return self.data

    def setState(newState):
        oldState = self.open
        self.open = newState
        return oldState = newState

    def cancle():
        allOrders.remove(self)
        
