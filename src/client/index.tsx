import React from 'react';
import ReactDOM from 'react-dom';
import { useRequest } from 'ahooks';
import { getDate } from '../server/controller/date';
import fetchGithubStars from '../server/controller/star';
import { getBookByParams, getBookByQuery } from '../server/controller/book';
import { index } from '../server/controller/member';
import './index.css';

function App() {
  const { data: date } = useRequest(() => getDate());
  const { data: repo, loading } = useRequest(() =>
    fetchGithubStars('midwayjs/midway')
  );
  const { data: book } = useRequest(() =>
    getBookByParams({ params: { id: '1' } })
  );
  const { data: book2 } = useRequest(() =>
    getBookByQuery({ query: { id: '2' } })
  );
  const { data: members } = useRequest(() =>
    index()
  );

  return (
    <div className="app">
      <img src="/logo.png" className="logo"></img>
      <h2>Hello Midway Hooks</h2>
      <p style={{ textAlign: 'center' }}>
        Edit <code>src/api/*.ts</code> and watch it change.
        <br />
        You can also open Devtools to see the request details.
      </p>
      <div>
        <p>
          <span className="lambda">λ GET</span>
          <span className="lambda">getDate()</span>
          <span>Server Date: {date}</span>
        </p>
        <p>
          <span className="lambda">λ POST</span>
          <span className="lambda">fetchStars('midwayjs/midway')</span>
          <span>Github Stars: {loading ? 'Fetching...' : repo.stars}</span>
        </p>
        <p>
          <span className="lambda">λ GET</span>
          <span className="lambda">
            {`getBookByParams({ params: { id: '1' } })`}
          </span>
          <span>Book title: {book?.title}</span>
        </p>
        <p>
          <span className="lambda">λ GET</span>
          <span className="lambda">
            {`getBookByQuery({ query: { id: '2' } })`}
          </span>
          <span>Book title: {book2?.title}</span>
        </p>
        <p>
          <span className="lambda">λ GET</span>
          <span className="lambda">
            {`index()`}
          </span>
          <span>Member count: {members?.length}</span>
        </p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
