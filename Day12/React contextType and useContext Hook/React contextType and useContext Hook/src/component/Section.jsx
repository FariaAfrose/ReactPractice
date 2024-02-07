import React from 'react';
import Content from './Content';

export default class Section extends React.Component {
    shouldComponentUpdate() {
      return false;
    }

    render() {
      console.log('Section rendered');

      return (

        <div>
          <h1>This is a Section</h1>
          <Content />
        </div>
      );
    }
}
