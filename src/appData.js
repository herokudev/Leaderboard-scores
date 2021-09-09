class AppData {
    addNewScore = (name, score) => {
      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zqPTnNutkbrCACFiMaEs/scores/', {
        method: 'POST',
        body: JSON.stringify({
          user: name,
          score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
    }
}

const appdata = new AppData();
export { appdata as default };