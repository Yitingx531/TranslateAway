from flask import Flask, request, jsonify
from translate import Translator
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)  # Apply CORS to all routes


@app.route('/translate', methods=['POST'])
@cross_origin()  # Allow CORS for this route
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
    app.run(debug=True)
