import { Component } from "react";

export class Section extends Component {
  static dafaulProps = {
    title: 'Section'
  }

  render() {
    const {title, children} = this.props;
    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}
