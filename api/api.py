import random
text = open("lines.txt", "r")
arr = [x for x in text.readlines() if x != "\n"]
print(random.choice(arr)[:-1])
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/line')
def get_line():
    text = open("lines.txt", "r")
    arr = [x for x in text.readlines() if x != "\n"]
    return jsonify(output=random.choice(arr)[:-1])