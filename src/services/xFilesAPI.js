export const getCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((json) => json.results);
};

// export const getCharacter = () => {
//   return fetch(
//     `https://xfiles-api.herokuapp.com/api/v1/characters?character=
//     ${props.match.params.character}`
//   )
//     .then((res) => res.json())
//     .then((json) => json.results);
// };
