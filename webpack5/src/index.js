import Form from "./js/components/Form";

const translatedStrings = await import(`./i18n/es_ES.json`);
console.log('translatedStrings', translatedStrings);

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;