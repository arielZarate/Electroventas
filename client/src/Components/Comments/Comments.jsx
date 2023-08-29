/* import React from "react";
import { TableContainer, Typography, Divider, Paper } from "@mui/material";
function Comments() {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#fefefe",
          height: "10rem",
          marginTop: "5rem",
        }}
      >
        <Typography variant="h5" color="initial" sx={{ margin: 1 }}>
          Comentarios
        </Typography>
        <Divider />
      </TableContainer>
    </>
  );
}

export default Comments;
 */

/* import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";

const Comments = () => {
  // Sample data for comments
  const comments = [
    { id: 1, user: "User1", comment: "Great product! Highly recommended!" },
    { id: 2, user: "User2", comment: "Fast delivery and good quality." },
    { id: 3, user: "User3", comment: "Exactly as described. Thank you!" },
  ];

  return (
    <div>
      <Typography variant="h5" color="initial" sx={{ margin: "1rem 0" }}>
        Comnetarios
      </Typography>
      <Divider />

      <List sx={{ marginTop: "1rem" }}>
        {comments.map((comment) => (
          <ListItem key={comment.id} disableGutters>
            <Avatar>{comment.user.charAt(0)}</Avatar>
            <ListItemText primary={comment.user} secondary={comment.comment} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Comments;
 */

import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Typography,
  Divider,
  Paper,
} from "@mui/material";

const Comments = () => {
  // Sample data for comments
  const comments = [
    {
      id: 1,
      user: "usuario1",
      comment: "Buen producto altamente recomendado!",
    },
    {
      id: 2,
      user: "usuario2",
      comment: "Rapido y el delivery y buena calidad.",
    },
    {
      id: 3,
      user: "usuario3",
      comment: "Exactamente lo que queria ,gracias!!",
    },
  ];

  return (
    <div>
      <Typography variant="h5" color="initial" sx={{ margin: "1rem 0" }}>
        Comentarios
      </Typography>
      <Divider />

      <TableContainer component="p" sx={{ marginTop: "1rem" }}>
        <Table>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell>
                  <Avatar>{comment.user.charAt(0)}</Avatar>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" gutterBottom>
                    {comment.user}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {comment.comment}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Comments;
