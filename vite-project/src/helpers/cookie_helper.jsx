const setCookie = (name, value, days) => {
    const expires = days ? `expires=${new Date(Date.now() + days * 86400000).toUTCString()};` : '';
    document.cookie = `${name}=${value};${expires}path=/`;
  };
  
  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim().split('=');
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  };
  
const checkTokenCookie = () => {
    const tokenCookie = getCookie('token');
    if (tokenCookie) {
      return true;
    } else {
      return false;
    }
  };
  

  export { setCookie, getCookie, checkTokenCookie };