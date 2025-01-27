import React, { useEffect, useState } from 'react';
import AdapterDocVersion from './AdapterDocVersion';
import axios from 'axios';
import { useHistory } from '@docusaurus/router';

import { getAdapterPath } from './AllAdaptersDocs';

const url = '/json/adapters.json';
let counter = 0;

export default function AdapterDocs(props) {
  const [versions, getVersions] = useState([false]);
  const [currentVer, setCurrentVer] = useState(versions[0]);

  const history = useHistory();
  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  const setData = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' },
        cancelToken: source.token,
      });
      getVersions(data[props.name].versions);

      const curVer = props.currentVer
        ? data[props.name].versions.find((v) => {
          const transformVersion = `${props.currentVer.split('.').join('_')}`;
          return v.version === transformVersion;
        })
        : data[props.name].versions[0];

      setCurrentVer(curVer);
    } catch (err) {
      if (axios.isCancel(err)) {
        return "axios request cancelled";
      }
      return err;
    }
  };

  useEffect(() => {
    if (currentVer === false) {
      setData();
    };

    return () => {
      source.cancel();
    };
  });

  const handleChange = (e) => {
    e.preventDefault();
    const selectedVersion = versions.find((ver) => ver.version === e.target.value);
    const to = getAdapterPath({ name: props.name, title: props.title, currentVer: selectedVersion.version });

    history.push(to);
    setCurrentVer(selectedVersion);
  };

  return (
    <>
      {currentVer && <>
        <h1>{props.title}</h1>

        <select
          className="custom-btn selector-btn"
          value={currentVer.version}
          onChange={handleChange}
        >
          {versions.map((ver) => {
            return (
              <option value={`${ver.version}`} key={counter++}>
                ver. {`${ver.version.slice(1).split('_').join('.')}`}
              </option>
            )
          })}
        </select>
        <div className={`adVersion ${currentVer.version}`} key={counter++}>
          <AdapterDocVersion url={currentVer.link} />
        </div>
      </>}
    </>
  );
}
