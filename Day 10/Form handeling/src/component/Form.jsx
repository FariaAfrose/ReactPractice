import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    state = {
        title: 'javaScript',
        text: 'Javascript is awsome',
        libary: 'React',
        isAwsome: true,
    };

    handelChange = (e) => {
console.log(e.target.value);
if (e.target.type === 'text') {
    this.setState({
        title: e.target.value,
    });
} else if (e.target.type === 'textarea') {
    this.setState({
        text: e.target.value,
    });
} else if (e.target.type === 'select-one') {
    this.setState({
        libary: e.target.value,
    });
} else if (e.target.type === 'checkbox') {
    this.setState({
        isAwsome: e.target.checked,
    });
} else {
    console.log('nothing here');
}
};

submitHandel = (e) => {
    const {
        title, text, libary, isAwsome,
       } = this.state;
    e.preventDefault();
    console.log(title, text, libary, isAwsome);
};

render() {
const {
 title, text, libary, isAwsome,
} = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandel}>
          <input type="text" placeholder="Enter title" value={title} onChange={this.handelChange} />
          {/* <p>{title}</p> */}
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handelChange} />
          <br />
          <br />
          <select value={libary} onChange={this.handelChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input type="checkbox" checked={isAwsome} onChange={this.handelChange} />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>

      </div>
    );
}
}
export default Button;
