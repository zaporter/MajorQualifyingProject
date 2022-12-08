import React, { useState } from 'react';
import StringCompletionInput from './StringCompletionInput.js';

const NodeEditor = (props) => {
  let nodesData = props.nodesData;
  let nid = props.currentNodeId;
  let validModules = Object.keys(nodesData.modules);
  const [selectedModule, setSelectedModule] = useState('');
  const onUpdateModule = (new_val) => {
    setSelectedModule(new_val);
  }
  const node = nodesData.nodes[nid];
  const [name, setName] = useState(props.mode=='add'?props.name:node.name);
  const [type, setType] = useState(props.mode=='add'?'Event':node.node_type);
  const [lineLocation, setLineLocation] = useState(props.mode=='add'?props.line:node.location.line_num);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  const handleLineLocationChange = (event) => {
    setLineLocation(event.target.value);
  }

  const handleAddNode = () => {
    props.onAdd(name, type, lineLocation);
    // add node logic
  }

  const handleSaveNode = () => {
    let addr = nodesData.nodes[nid].address;
    let update_raw_fn = (raw_n_data) => {
      raw_n_data.nodes[addr].name=name;
      raw_n_data.nodes[addr].module=selectedModule;
      return raw_n_data;
    } 
    
    props.updateNodeData(update_raw_fn);
  }

  const handleDeleteNode = () => {
    props.onDelete(name,type,lineLocation);
    // delete node logic
  }

  return (
    <div className="node-editor">
      { props.mode == 'add' ? (
        <h3>{"Add Node:"}</h3>) : (<h3> {"Edit Node:"}</h3>)
      }
      <label className="node-editor__label">
        Name:
        <input className="node-editor__input" type="text" value={name} onChange={handleNameChange} />
      </label>

      <label className="node-editor__label">
        Module:
        <StringCompletionInput 
          default={props.mode=="add" ? '' : node.module}
          onUpdate={onUpdateModule}
          list={validModules}
          />
      </label>
      <label className="node-editor__label">
        Type:
        <select className="node-editor__input" value={type} onChange={handleTypeChange}>
          <option value="Event">Event</option>
          <option value="Flow">Flow</option>
        </select>
      </label>
      <label className="node-editor__label">
        Line Location:
        <input className="node-editor__input" type="number" value={lineLocation} onChange={handleLineLocationChange} />
      </label>
      {
        props.mode === 'add' ? (
          <button className="node-editor__button" onClick={handleAddNode}>Add Node</button>
        ) : (
          <div className="node-editor__buttons">
            <button className="node-editor__button" onClick={handleSaveNode}>Save Node</button>
            <button className="node-editor__button" onClick={handleDeleteNode}>Delete Node</button>
          </div>
        )
      }
    </div>
  );
}

export default NodeEditor;
