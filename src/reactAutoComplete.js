import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import "./style.scss";

export default function App() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete();

  const handleInput = (e) => { 
    setValue(e.target.value);
  };

  const handleSelect = (val) => {
    setValue(val, false);
  };

  const renderSuggestions = () => {
    console.log(data)
    const suggestions = data.map(({ place_id, description }) => (
      <ComboboxOption key={place_id} value={description} />
    ));

    return (
      <>
        {suggestions}
      </>
    );
  };

  return (
    <div className="App pb-5">
      <h1 className="title">USE-PLACES-AUTOCOMPLETE</h1>
      <p className="subtitle">
        React hook for Google Maps Places Autocomplete.
      </p>
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          style={{ width: 300, maxWidth: "90%" }}
          value={value}
          onChange={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover className="sub-menu">
          <ComboboxList className="sub-item">{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
