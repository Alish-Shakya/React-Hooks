import { useState, useDeferredValue } from "react";

const UseDefferedValue = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const filteredList = Array(10000)
    .fill("")
    .map((_, i) => deferredText + i);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      {filteredList.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default UseDefferedValue;
