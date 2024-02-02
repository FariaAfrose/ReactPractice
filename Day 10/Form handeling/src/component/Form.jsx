import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    state = {
        title: 'javaScript',
        text: 'Javascript is awsome',
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
} else {
    console.log('nothing here');
}
};

render() {
const { title, text } = this.state;

    return (
      <div>
        <form>
          <input type="text" placeholder="Enter title" value={title} onChange={this.handelChange} />
        </form>
        {/* <p>{title}</p> */}
        <br />
        <br />
        <textarea name="text" value={text} onChange={this.handelChange} />
      </div>
    );
}
}
export default Button;
