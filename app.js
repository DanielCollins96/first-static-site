class Jedi extends React.Component {
    render() {
      return (
        <div>I am a Jedi Component</div>
      );
    }
  }
  
  class Application extends React.Component {
    render() {
      return (
        <main>
            <h1>Vanilla JavaScript App</h1>
            <p>Google analytics</p>
        </main>
      );
    }
  }
  
  ReactDOM.render(<Application />, document.getElementById('app'));