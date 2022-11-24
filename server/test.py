import unittest
import orders
import json

testOrder = {
    "orderId": 321,
    "items": [
        {
        "itemId": 2,
        "itemPrice": 29.99,
        "count": 2
        }
    ],
    "addressDetails": {
        "address": "Streetname 123",
        "city": "Odense",
        "country": "DK",
        "ZIP": 5000
    },
    "person": {
        "name": "Firstname Lastname",
        "phone": "12 34 56 78",
        "email": "example@email.com"
    },
    "note": "Hide the item under my doormat if I am not home",
    "coupon": {
        "ID": 3,
        "name": "two for one",
        "description": "Buy two post (ID: 2) and get one for free",
        "freeShipping": False,
        "reduction": 29.99
    }
}



class TestOrder(unittest.TestCase):

    def test_create_and_cancle(self):
        odr = orders.Order(testOrder)
        self.assertEqual(odr.id, 321, "Should be 321")
        self.assertEqual(json.dumps(odr.data),json.dumps(testOrder), "Should be equal")
        self.assertEqual(json.dumps(odr.export()),json.dumps(testOrder), "Should be equal")
        self.assertEqual(odr.open, True, "Should be true")
        self.assertNotEqual(odr.getAllOpenOrders(), [], "Should not be empty")
        odr.setState(False)
        self.assertEqual(odr.getAllOpenOrders(), [], "Should be empty")
        self.assertEqual(odr.open, False, "Should be false")

        self.assertEqual(orders.getOrderById(321), odr, "Should get the test order")
        self.assertEqual(orders.getOrderById(123), None, "Shuld get nothing")

        odr.cancle()
        self.assertEqual(orders.Order.allOrders, [], "Should be empty")
    
    def test_load_orders(self):
        orders.loadOrders()
        self.assertNotEqual(orders.getAllOrders(), [], "Should not be empty")
        orders.writeOrders()
        self.assertEqual(orders.getAllOrders(), [], "Should be empty")