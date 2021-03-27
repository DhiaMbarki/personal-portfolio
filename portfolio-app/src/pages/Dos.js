import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { SettingsEthernet, DeveloperBoard, Forum } from "@material-ui/icons";
import './dos.css'
export default class Dos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.state.date);

    return (
      <div className="mov1" style={{ display: "flex", flexDirection: "column" }}>
        <p />
        <p />
        <Paper
          elevation={0}
          square={true}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            minHeight: 500,
            flexWrap: "wrap"
          }}
        >
          <Paper style={styles.boxes}>
            <div style={styles.margin}>
              <DeveloperBoard style={{ fontSize: 100 }} />
              <Typography variant="title">Internet of Things</Typography>
              <Typography variant="body2">
                <p />
                It is projected by IDC, Intel and the United Nations that by the
                year 2020, there will be more than 200 billion internet
                connected devices. With the promise of IoT we are now able to{" "}
                <i>monitor </i> our environments across vast distances,{" "}
                <i>control </i> our devices remotely and find <i> insights </i>{" "}
                seemingly unimportant data.
                <p />
                I work with businesses to develop full IoT solutions. From
                creating smart devices and connecting them up to the internet to
                data storage and analysis.
              </Typography>
              <Typography variant="subheading" style={{ color: "orange" }}>
                <p />
                Tech Stack:
              </Typography>
              <Typography variant="body2">
                Google Cloud Platform<br />Google Firebase<br />NodeJS<br />MongoDB<br />MYSQL<br />
              </Typography>
            </div>
          </Paper>
          <Paper style={styles.boxes}>
            <div style={styles.margin}>
              <SettingsEthernet style={{ fontSize: 100 }} />
              <Typography variant="title">Full Stack Developer</Typography>
              <Typography variant="body2">
                <p />
                In the mist of this ever changing technological landscape, we
                are finding ourselves more and more in need to interconnect our
                applications. From data representation and control on the front
                end to creating APIs on back end; one must see the big picture.
                <p />
                Utilising Javascript Stack, I develop end-to-end web enabled
                applications. From simple web interfaces to complex system
                integrations, I do it all.
              </Typography>
              <Typography variant="subheading" style={{ color: "orange" }}>
                <p />
                Frameworks and librarys Js:
              </Typography>
              <Typography variant="body2">
                NodeJS<br />ReactJS<br />REDUX<br />Angular<br /><br />
              </Typography>
            </div>
          </Paper>
          <Paper style={styles.boxes}>
            <div style={styles.margin}>
              <Forum style={{ fontSize: 100 }} />
              <Typography variant="title">Consultancy</Typography>
              <Typography variant="body2">
                <p />
                In a survey by SAP, more than 90% of respondents say that
                technology convergence will impact their industry. Businesses
                and technologies are melding together, each propelling the other
                forward. Technology has changed the way we do business, and it
                will continue to do so in the foreseeable future.
                <p />
                With a degree in professionel design degree and a post
                graduate certificate in Rbk tunisian us full stack developer, I have
                quite the extensive knowledgebase. Combine that with my  experience on creating and designing, I can help you reengineer your business
                processes and improve overall productivity by leveraging the
                latest technologies.
              </Typography>
            </div>
          </Paper>
        </Paper>
      </div>
    );
  }
}

const styles = {
  boxes: {
    width: 330,
    margin: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 45,
    height: 600,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  margin: {
    margin: 10
  },
  texts: {
    display: "flex",
    flexWrap: "wrap"
  }
};
