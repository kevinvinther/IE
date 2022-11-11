import orders
import warehouse

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
