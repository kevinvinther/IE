class Order(object):

    allOrders = []

    def __init__(self, data):
        self.id = data["ID"]]
        self.data = data
        self.open = True

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
        
