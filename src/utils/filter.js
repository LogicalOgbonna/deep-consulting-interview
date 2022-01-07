export const correctSuggestions = (array, input) => array.filter((suggestion) =>
    suggestion?.toLowerCase().includes(input.toLowerCase()));