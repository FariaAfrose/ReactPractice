import React, { useEffect, useRef } from 'react';
import Input from './Input';

  export default function Form() {
    const inputRef = useRef(null);
useEffect(() => {
    inputRef.current.focus();
}, []);
    return (
      <div>
        <Input type="text" ref={inputRef} placeholder="enter something" />

      </div>
    );
  }
