from flask import Flask, request, jsonify
from translate import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/translate": {"origins": "*"}})  # Apply CORS to all routes

@app.before_request
def before_request():
    if request.method == 'OPTIONS':
        return _build_cors_preflight_response()

def _build_cors_preflight_response():
    response = jsonify({'message': 'CORS preflight'})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type")
    response.headers.add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    return response

@app.route('/translate', methods=['POST'])
def translate():
    try:
        data = request.get_json()
        text_to_translate = data.get('textToTranslate')
        source_lang = data.get('sourceLang')
        target_lang = data.get('targetLang')

        # Log the received data
        print(f"Received data: {data}")

        if text_to_translate and source_lang and target_lang:
            translator = Translator(from_lang=source_lang, to_lang=target_lang)
            translation = translator.translate(text_to_translate)
            return jsonify({'translation': translation})
        else:
            return jsonify({'error': 'Invalid input'}), 400
    except Exception as e:
        # Log the exception
        print(f"Error during translation: {e}")
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
