import HttpClient from './HttpClient';
export default async function (params) {
  try {
    const res = await new HttpClient({token: params.token}).get(`destinations`);
    if (res && !res.data) {
      throw new Error(`invalid response data sheme`);
    }
    if (!Array.isArray(res.data)) {
      throw new Error(`invalid response data sheme`);
    }
    // console.log(res);
    return res.data;
  } catch (err) {

    // console.log(err);
    throw new Error(err);
  }
}
