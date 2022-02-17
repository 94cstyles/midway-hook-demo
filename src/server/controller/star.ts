import { Api, Post } from '@midwayjs/hooks';
import fetch from 'isomorphic-unfetch';
import { Test } from '@enums';

export default Api(Post(), async (repo: string) => {
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  const json = await response.json();
  return {
    A: Test.A,
    stars: json.stargazers_count,
  };
});
