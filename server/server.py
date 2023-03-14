from flask import Flask, jsonify, request
from flask_cors  import cross_origin
from final.predict_model import predict

app = Flask(__name__)

@app.route('/', methods=['POST'])
@cross_origin()
def home():
    text = request.json['text']
    text, label = predict(text)
    
    return jsonify({'text':text, 'label':label})
    

if __name__ == "__main__":
    app.run()