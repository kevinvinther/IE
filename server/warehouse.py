import requests
import json


A_URL = "https://www.A.com"

B_URL = "https://www.B.com"

WAREHOUSE_URL = "https://www.IEWarehouse.com"

# calls the warehouse using some API
def getStock(itemId):
    response = requests.get(WAREHOUSE_URL + "/getStock/" + str(itemId))
    if response.status_code == 404:
        raise badResponse(404, "Item with id: " + str(itemID) + " does not exist")
    if response.status_code != 200:
        raise badResponse(response.status_code, "Something went wrong getting the stock count for item with id: " + str(itemId))
    return response.json()

def getAllItems():
    response = requests.get(WAREHOUSE_URL + "/getAllItems")
    if response.status_code != 200:
        raise badResponse(response.status_code, "Something went wrong getting the list of items")
    return response.json()

def sendOrder(order, addressDetails, customer, note):
    parameters = {
            "order" : order,
            "addressDetails" : addressDetails,
            "customer" : customer,
            "note" : note
            }
    response = request.post(WAREHOUSE_URL + "/sendOrder", params=parameters)
    if response.status_code == 400:
        raise badResponse(400, "Order details in body are illegal")
    if response.status_code != 200:
        raise badResponse(response.status_code, "Something went wrong sending an order")
    return response.json()
    

def reduceStock(itemId, ammount):
    parameters = ammount
    response = requests.post(WAREHOUSE_URL + "/reduceStock/" + str(itemId), params=parameters)
    if response.status_code == 404:
        raise badResponse(404, "Item with id: " + str(itemID) + " does not exist")
    if response.status_code != 200:
        raise badResponse(response.status_code, "Something went wrong reducing the stock count for item with id: " + str(itemId))
    return None

def orderStock(itemId, ammount):
    return None

class badResponse(Exception):

    def __init__(self, code, message=""):
        self.code = code
        self.message = message
        super().__init__(self.message)

