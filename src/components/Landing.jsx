import React from 'react';
import axios from 'axios';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';

const trendRank = i => (
  <div style={{ background: 'maroon', width: 40, height: 40, lineHeight: '40px', textAlign: 'center' }}>
    <font color="white" size="4">
      {i + 1}
    </font>
  </div>
);

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      trends: [],
    };
  }

  componentWillMount() {
    axios.get('/trends')
      .then((response) => {
        const usTrends = response.data;
        this.setState({ trends: usTrends });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // FIXME: handleClick() method not passing params to back end request //
  handleClick(trend) {
    axios.get('/rss', {
      params: {
        q: trend,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    const trends = this.state.trends.map((trend, i) => (
      <span key={trend}>
        <ListItem
          primaryText={trend}
          leftAvatar={trendRank(i)}
          key={trend}
          onClick={() => window.open(`http://google.com/#q=${trend}`)}
        />
        <Divider />
      </span>
    ));

    return (
      <div className="trends">
        <List>
          <Subheader style={{ fontSize: 20 }}>
            Top 20 Google Searches Right Now
          </Subheader>
          {trends}
        </List>
      </div>
    );
  }
}

export default Landing;
