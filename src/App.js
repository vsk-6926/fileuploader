import React from 'react';
import axios from "axios";
import { useState } from 'react';
import "./App.css";

function App() {

  const [userInfo, setuserInfo] = useState ({
    file: [],
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
    });
  }

  const submit = async() => {
    const formdata = new FormData();
    formdata.append('avatar', userInfo.file);

    axios.post("http://localhost:8080/imageupload",formdata,
    {headers: {"Content-type": "multipart/formdata"}
  })
  .then(res => {
    console.warn(res);
  })
  }

  return <div className="container mr-60">
    <h3 className="text-white">
        Form to Upload<br></br>
        <span>Description</span>
    </h3>

    <div className="formdesign">
      <div className="form-row">
        <label className="text-white">
          Select Image :
        </label>
        <input type="file" className="form-control"
        name="upload_image" onChange={handleInputChange} />
        <br></br>
        <br></br>
        <label className="text-white">
          Select Video :
        </label>
        <input type="file" className="form-control"
        name="upload_video" onChange={handleInputChange} />
      </div>
      <button type="submit" className="btn btn-dark" onClick={() => submit()}>Save</button>
    </div>
  </div>;
}

export default App;
