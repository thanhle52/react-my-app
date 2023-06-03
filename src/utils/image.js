const getLogo = (teamId) =>
  `${process.env.PUBLIC_URL}/images/logos/${teamId}.png`;

const getPlayer = (playerId, teamId) =>
  `${process.env.PUBLIC_URL}/images/players/${playerId}/${teamId}.png`;

const getSignature = (playerId) =>
  `${process.env.PUBLIC_URL}/images/signatures/${playerId}.png`;

const getBrand = (brandId) =>
  `${process.env.PUBLIC_URL}/images/brands/${brandId}.svg`;

export { getLogo, getPlayer, getSignature, getBrand };
