import React, { useState } from 'react';
import './TranslateContainer.scss';

export default function TranslateContainer() {
  const [translateText, setTranslateText] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');
  const [sourceLang, setSourceLang] = useState<string>('en');
  const [targetLang, setTargetLang] = useState<string>('zh');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranslateText(e.target.value);
  };

  const handleSourceLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSourceLang(e.target.value);
  };

  const handleTargetLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetLang(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ textToTranslate: translateText, sourceLang, targetLang }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const parsedResponse = await response.json();
      setTranslation(parsedResponse.translation);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className="translate-card">
      <div className="translate-header">
        <h2>translate away</h2>
      </div>
      <form className="translate-body" onSubmit={handleSubmit}>
        <div className="language-select">
          <label>
            From:
            <select value={sourceLang} onChange={handleSourceLangChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ru">Russian</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="hi">Hindi</option>
              <option value="ar">Arabic</option>
              <option value="nl">Dutch</option>
              <option value="sv">Swedish</option>
              <option value="tr">Turkish</option>
              <option value="pl">Polish</option>
              <option value="no">Norwegian</option>
              <option value="da">Danish</option>
              <option value="fi">Finnish</option>
              <option value="cs">Czech</option>
            </select>
          </label>
          <label>
            To:
            <select value={targetLang} onChange={handleTargetLangChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ru">Russian</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="hi">Hindi</option>
              <option value="ar">Arabic</option>
              <option value="nl">Dutch</option>
              <option value="sv">Swedish</option>
              <option value="tr">Turkish</option>
              <option value="pl">Polish</option>
              <option value="no">Norwegian</option>
              <option value="da">Danish</option>
              <option value="fi">Finnish</option>
              <option value="cs">Czech</option>
            </select>
          </label>
        </div>
        <textarea
          name='translateText'
          value={translateText}
          onChange={handleInputChange}
          placeholder='Enter text here to translate'
          className='translate-input'
        />
        <button type='submit' className='translate-button'>
          Translate
        </button>
      </form>
      <div className="bubbles-container">
        {translateText && (
          <div className='cloud-bubble source'>
            <p>{translateText}</p>
          </div>
        )}
        {translation && (
          <div className='cloud-bubble target'>
            <p>{translation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
