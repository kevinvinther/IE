import orders
import warehouse
import json

def handler(event, context):
    try:
        orders.loadOrders()
        message = None
        req = 2
        if event["body"]:
            message = event["body"]
            req = 1

        if req == 1: #Posting of order
            order = orders.Order(message)
            return response(None, 201)
        else: #Get items
            return response(None, 200, getItems())
        
        orders.writeOrders()
    except Exception as e: #If anything unknown goes wrong
        return response(str(e), 500)

def getItems():
    itemList = loadItems()
    return itemList

def itemById(itemId):
    itemList = loadItems()
    item = getItemFromId(itemId, itemList)
    return item

def response(err, status = 400, msg = None):
    return {
            "statusCode": status,
            "body": err if err else json.dumps(msg)
            }

def loadItems():
    f = open("items.json")
    itemList = json.load(f)
    f.close()
    return itemList

def writeItems(itemList):
    with open("items.json","w") as out:
        json.dump(itemList, out)

def showOrders():
    odrs = orders.getAllOrders()
    print("Please pick an order (or enter 0 to exit):")
    for odr in odrs:
        print(str(odr.id))
    i = -1
    while i != 0:
        i = int(input("Pick an order: "))
        if i in [odr.id for odr in odrs]:
            odr = orders.getOrderById(i)
            msg = "Order with id = {}\n\n".format(odr.id)
            msg += "Is open = {}\n\n".format(odr.open)
            msg += "Has items = {}\n\n".format(odr.items)
            msg += "Person details = {}\n\n".format(odr.cust)
            msg += "Address details = {}\n\n".format(odr.custAddress)
            msg += "Note = {}\n\n".format(odr.note)
            msg += "Coupon used = {}\n".format(odr.coupon)
            print(msg)

def deleteOrder():
    odrs = orders.getAllOrders()
    print("Please pick an order (or enter 0 to exit):")
    for odr in odrs:
        print(str(odr.id))
    i = -1
    while i != 0:
        i = int(input("Pick an order: "))
        if i in [odr.id for odr in odrs]:
            odr = orders.getOrderById(i)
            if input("Are you sure [y|N]: ") == "y":
                odr.cancle()

def setOrderStatus():
    odrs = orders.getAllOrders()
    print("Please pick an order (or enter 0 to exit):")
    for odr in odrs:
        print(str(odr.id))
    i = -1
    while i != 0:
        i = int(input("Pick an order: "))
        if i in [odr.id for odr in odrs]:
            odr = orders.getOrderById(i)
            if input("Is the order open? [y|N]: ") == "y":
                odr.setState(True)
            else:
                odr.setState(False)

def exportOrder():
    odrs = orders.getAllOrders()
    print("Please pick an order (or enter 0 to exit):")
    for odr in odrs:
        print(str(odr.id))
    i = -1
    while i != 0:
        i = int(input("Pick an order: "))
        if i in [odr.id for odr in odrs]:
            print("{}".format(odr.data))

def manageItems(itemList):
    print("0: back")
    print("1: add item")
    print("2: remove item")
    print("3: show items")
    i = -1
    while i != 0:
        i = int(input("Pick an option: "))
        if i == 1:
            addItem(itemList)
        if i == 2:
            rmItem(itemList)
        if i == 3:
            showItems(itemList)


def addItem(itemList):
    new = {
        "itemId": int(input("Enter item ID: ")),
        "itemPrice": float(input("Enter item price: ")),
        "stockCount": int(input("Enter current stock level: ")),
        "name": input("Enter item name: "),
        "description": input("Enter item description: "),
        "image": ""
        }
    itemList.append(json.loads(json.dumps(new)))

def getItemFromId(itemId, itemList):
    for item in itemList:
        if itemId == item["itemId"]:
            return item
    return item

def showItems(itemList):
    for item in itemList:
        print(str(item["itemId"]))
    i = -1
    while i != 0:
        i = int(input("pick an item: "))
        if i in [item["itemId"] for item in itemList]:
            print("{}".format(getItemFromId(i, itemList)))

def rmItem(itemList):
    for item in itemList:
        print(str(item["itemId"]))
    i = -1
    while i != 0:
        i = int(input("pick an item: "))
        if i in [item["itemId"] for item in itemList]:
            if input("Is the order open? [y|N]: ") == "y":
                itemList.remove(getItemFromId(i, itemList))

#If the script is invoked directly by the user 
if __name__ == "__main__":
    itemList = loadItems()
    orders.loadOrders()
    i = -1
    print("Hello")
    print("0: exit")
    print("1: show all orders")
    print("2: delete a deal")
    print("3: Toggle order state")
    print("4: Get order export")
    print("5: Manage items")
    while i != 0:
        i = int(input("Please pick one of the valid menue items: "))
        if not (i in [0,1,2,3,4,5]):
            print("Please pick a valid option")
        if i == 1:
            showOrders()
        if i == 2:
            deleteOrder()
        if i == 3:
            setOrderStatus()
        if i == 4:
            exportOrder()
        if i == 5:
            manageItems(itemList)
    print("Goodbye")
    orders.writeOrders()
    writeItems(itemList)

