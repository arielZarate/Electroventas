const { VITE_PORT_BACK, VITE_URL_DEPLOY } = import.meta.env;

const Global = {
  //http://localhost:3000/api/products/4
  // url: `http://localhost:${VITE_PORT_BACK}/api`,
  url: `${VITE_URL_DEPLOY}/api`,
};
export default Global;
