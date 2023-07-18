import React, { useState } from 'react';

function TextAnalyzer(props) {
  const [text, setText] = useState('');
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);

  function getTextData(e) {
    const wordsArray = e.target.value.split(' ');
    setWords(wordsArray.length);
  }
  return (
    <div className="flex flex-col">
      <label htmlFor="words">Type anything here</label>
      <textarea
        onChange={getTextData}
        id="words"
        name="words"
        rows={7}
        cols={14}
      />
      <p>Words: {words}</p>
      <p>Characters: {characters}</p>
      <p>Sentences: {sentences}</p>
      <p>Paragraphs: {paragraphs}</p>
    </div>
  );
}

export default TextAnalyzer;
