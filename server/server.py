import orders
import warehouse
import json

def handler(event, context):
    try:
        message = None
        req = 2
        if event["body"]:
            message = event["body"]
            req = 1

        if req == 1: #Posting of order
            order = Order(message)
            return response(None, 201)
        else: #Get items
            return response(None, 200, getItems())

        def getItems():
            return None
    except Exception as e: #If anything unknown goes wrong
        return response(str(e), 500)

def response(err, status = 400, msg = None):
    return {
            "statusCode": status,
            "body": err if err else json.dumps(msg)
            }

#If the script is invoked directly by the user 
if __name__ == "__main__":
    i = -1
    print("Hello")
    print("0: exit")
    print("1: stuff")
    print("2: do nothing")
    print("3: again please")
    print("4: I'm sleepy")
    print("5: hello")
    while i != 0:
        i = int(input("Please pick one of the valid menue items: "))
        if not (i in [0,1,2,3,4,5]):
            print("Please pick a valid option")
    print("Goodbye")
#If the script is invoked by some other source
else:
    print("Called from other souce")
