import React, { Component } from "react";
//css
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import {
  Card,
  Avatar,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Grid
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

class Video extends Component {
  render() {
    const { status, classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          {/* grid ngoài cùng phải có container ko thì sẽ ko chạy */}
          <Grid container justify="space-between">
            <Grid item md={8}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    Đ
                  </Avatar>
                }
                title="Đào Anh Tú"
                style={{ padding: "0" }}
              />
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
        </CardContent>

        <iframe
          title="ads"
          width="420"
          height="300"
          src="https://www.youtube.com/embed/S0vy9ZsI40Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={classes.iframe}
        ></iframe>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Đào Anh Tú Fighting
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon /> 25
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon /> 7
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Video);
