from flask import Flask, render_template
from translate import Translator
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


if __name__ == '__main__':
    app.run(debug=True)