import React, { useCallback, useState, useEffect } from 'react';
import '../style/App.scss';
import Button from './Button';
import Resume from './Resume';

export const App = () => {
  const [file, setFile] = useState();

  const upload = useCallback(({ target: { files }}) => {
    if (files && files.length) {
      const file = files[0];
      const fr = new FileReader();
  
      fr.onload = (e) => {
        const result = JSON.parse(e.target.result);
        setFile(result);
      }
  
      fr.readAsText(file);
    }
  }, [setFile]);

  return (
    <div className="app centerColumn">
      {!file && <form className="uploadForm centerColumn">
        <label htmlFor="fileInput" className="label button">Upload JSON file</label>
        <input accept=".json" id="fileInput" className="fileInput" type="file" name="fileInput" onChange={upload} />
      </form>}
      {file && (
        <>
          <p>Succesfully uploaded.</p>
          <Button onClick={() => setFile(undefined)}>
            Clear
          </Button>
        </>
      )}

      {file && <Resume data={file} /> }
    </div>
  );
}

export default App;
