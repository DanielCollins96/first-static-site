
class Jedi extends React.Component {
    render() {
      return (
        <div>I am a Jedi Component</div>
      );
    }
  }
  
  class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          conferences: []
        };
    }
        componentDidMount() {
            fetch("https://statsapi.web.nhl.com/api/v1/standings")
              .then(res => res.json())
              .then(
                (result) => {
                    console.log(result.records)
                    this.setState({
                    isLoaded: true,
                    conferences: result.records
                  });
                },
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                })
            }
            render() {
                
                const { error, isLoaded, conferences } = this.state;
                if (error) {
                  return <div>Error: {error.message}</div>;
                } else if (!isLoaded) {
                  return <div>Loading...</div>;
                } else {
                  return (
                    <main>
                        <h1>Vanilla JavaScript App</h1>
                        <p>Google analytics</p>
                        <div className="conferences">
                        {conferences.map(item => (
                          <div>
                          <h3>{item.division.name}</h3>
                            <ul>
                            {item.teamRecords.map(team => {
                                return (
                                    <li key={team.team.id}>
                                        {team.team.name}
                                    </li>
                                )
                            })}
                            </ul>
                        </div>
                        ))}
                        </div>
                        </main>
                      )
                }

            // render() {
    //   return (
    //     <main>
    //         <h1>Vanilla JavaScript App</h1>
    //         <p>Google analytics</p>
            
    //         {conferences.map((team) => {
    //             return console.log(team)
    //         })}
    //     </main>
    //   );
    // }
  }
}
  
  ReactDOM.render(<Application />, document.getElementById('app'));