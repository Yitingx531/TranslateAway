from flask import Flask, request
from translate import Translator
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/translate', methods=['POST'])
@cross_origin()
def translate():
    data = request.get_json()
    text_to_translate = data.get('textToTranslate')
    source_lang = data.get('sourceLang')
    target_lang = data.get('targetLang')
    if text_to_translate and source_lang and target_lang:
        translator = Translator(from_lang=source_lang, to_lang=target_lang)
        translation = translator.translate(text_to_translate)
        return jsonify({'translation': translation})
    return jsonify({'error': 'Invalid input'}), 400


if __name__ == '__main__':
    app.run(debug=True)
