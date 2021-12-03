import React, { useCallback, useState, useRef } from "react";
import "./styles.css";

import ReactFlow from "react-flow-renderer";
const initialElements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 100, y: 0 }
  }
  // default node
  // {
  //   id: "2",
  //   // you can also pass a React component as a label
  //   data: { label: <div>Default Node</div> },
  //   position: { x: 100, y: 50 }
  // },
  // {
  //   id: "3",
  //   type: "default", // output node
  //   data: { label: "Output Node" },
  //   position: { x: 100, y: 100 }
  // },
  // animated edge
  // { id: "e1-2", source: "1", target: "2", animated: true },
  // { id: "e2-3", source: "2", target: "3" }
];

export default function App() {
  const [els, setEls] = useState(initialElements);
  const yPos = useRef(0);

  const addNode = useCallback(() => {
    // yPos.current += 50;
    setEls((els) => {
      console.log(els);
      return [
        ...els,
        {
          id: Math.random(),
          position: { x: 100, y: yPos.current },
          data: { label: "yo" }
        }
      ];
    });
  }, []);

  const addEdge = useCallback(({ source, target }) => {
    setEls((els) => {
      console.log(source, target);
      return [
        ...els,
        {
          id: Math.random(),
          source,
          target
        }
      ];
    });
  }, []);

  return (
    <div className="App">
      <div style={{ height: 1050 }}>
        <ReactFlow elements={els} onConnect={addEdge} />
      </div>
      <button onClick={addNode}>Add Affiliate</button>
      <button onClick={addNode}>Add Page</button>
      <button onClick={addNode}>Add Channel</button>
    </div>
  );
}
