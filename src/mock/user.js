// import Mock from 'mockjs'

function params2Obj(params) {
  // const search = params.split('?')[1];
  if (!params) return {};
  return JSON.parse(
    '{"' +
      params
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
}

export default {
  userLogin: (config) => {
    params2Obj(config.body);
    return {
      code: 0,
      codeText: "OK",
      power: "",
    };
  },
};
