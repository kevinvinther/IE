class Order(object):

    allOrders = []

    def __init__(self, orderId):
        self.id = orderId

        allOrders.add(self)
