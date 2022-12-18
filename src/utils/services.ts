interface Args {
  driverId: string | number | undefined;
  circuitId: string | number | undefined;
}

export const driverBasicInfo = ({ driverId }: Args) => {
  return fetch(`${import.meta.env.BASE_URL_DEV}drivers/${driverId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": import.meta.env.BACKEND_API_KEY,
    },
  }).then((result) => result.json());
};

export const driverBestResults = ({ driverId }: Args) => {
  return fetch(
    `${import.meta.env.BASE_URL_DEV}grand-prix/best-results/${driverId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "api-key": import.meta.env.BACKEND_API_KEY,
      },
    }
  ).then((result) => result.json());
};

export const getCircuits = () => {
  return fetch(`${import.meta.env.BASE_URL_DEV}circuits`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": import.meta.env.BACKEND_API_KEY,
    },
  }).then((result) => result.json())
}

export const getCircuitById = ({ circuitId }: Args) => {
  return fetch(`${import.meta.env.BASE_URL_DEV}circuits/${circuitId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": import.meta.env.BACKEND_API_KEY,
    },
  }).then((result) => result.json())
}

export const getTeams = () => {
  return fetch(`${import.meta.env.BASE_URL_DEV}teams`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": import.meta.env.BACKEND_API_KEY,
    },
  }).then(result => result.json())
}

export const getDrivers = () => {
  return fetch(`${import.meta.env.BASE_URL_DEV}drivers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": import.meta.env.BACKEND_API_KEY,
    },
  }).then((result) => result.json())
}