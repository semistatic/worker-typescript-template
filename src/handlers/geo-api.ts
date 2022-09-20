//const geo = [];
import Store from '../posts_store';

const Geo = async request => {
  const geo = new Store();
  const postID = request.params.id;

  const body = JSON.stringify(await geo.find(postID));
  const headers = { 'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*' };
  return new Response(body, { headers });
};

export default Geo;
