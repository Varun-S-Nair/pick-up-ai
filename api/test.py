import random
text = open("lines.txt", "r")
arr = [x for x in text.readlines() if x != "\n"]
arr = [x for x in arr if x.find(".com") == -1]
arr = [x for x in arr if x.find("=") == -1]
print(random.choice(arr)[:-1])