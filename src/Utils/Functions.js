import jwt_decode from 'jwt-decode';

function formatDateString(dateString) {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };

  return date.toLocaleDateString(undefined, options);
}


function decodeJwtToken(jwtToken) {
  try {
    const decodedToken = jwt_decode(jwtToken);
    return decodedToken;
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null; // Return null in case of an error
  }
}

export { formatDateString, decodeJwtToken };
