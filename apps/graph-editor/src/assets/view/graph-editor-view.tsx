import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import React from 'react';
import '@xyflow/react/dist/style.css';
import './graph-editor-view.css';

export default function GraphEditorView() {
  return (
    <div style={{ height: '100vh' }}>
        <ReactFlow
            style={{ width: '100%', height: '100%' }}
            fitView
        >
            <MiniMap/>
            <Controls />
            <Background gap={20} bgColor='#1e1e1e'/>
        </ReactFlow>
    </div>
  );
}