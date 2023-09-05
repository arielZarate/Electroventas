import React from "react";
import {
  Container,
  Link as RouterLink,
  Grid,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaHome,
  FaBuilding,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Importa los iconos de react-icons

import { BsBoxes } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

const footers = [
  {
    title: "Compañia",
    description: [
      {
        text: "Home",
        icon: <FaHome color="#0000FF" size={20} />,
        path: "/home",
      },
      {
        text: "Outlet",
        icon: <BsBoxes color="#00FF00" size={20} />,
        path: null,
      },
      {
        text: "Contacto",
        icon: <BiMailSend color="#000000" size={20} />,
        path: "/",
      },
      {
        text: "Quienes somos",
        icon: <FaBuilding color="#808080" size={20} />,
        path: null,
      },
    ],
  },
  {
    title: "Sucursal",
    description: [
      {
        text: "av Pajas Bancas 6000, Cordoba 5000X",
        icon: <FaMapMarkerAlt color="#ce2727" size={20} />,
        path: {
          location: "https://goo.gl/maps/hzKVuaGw95AGa7yy6",
          frame:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129685.78886403835!2d-64.25974456180731!3d-31.334553264699935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432996fd976d0e5%3A0x7fa89671e15e462b!2sCamino%20A%20Pajas%20Blancas!5e0!3m2!1ses-419!2sar!4v1693920410944!5m2!1ses-419!2sar",
        },
      },
    ],
  },
  {
    title: "Redes",
    description: [
      {
        text: "Facebook",
        icon: <FaFacebookSquare color=" #1877F2" size={20} />,
        path:
          "https://m.facebook.com/search/top/?q=electroventas&ref=content_filter&tsid=0.47530385611901527&source=typeahead",
      },
      {
        text: "Instagram",
        icon: <FaInstagram color="#C13584" size={20} />,
        path: "https://www.instagram.com/electroventass/",
      },
    ],
  },
];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <RouterLink
        to="https://github.com/arielZarate/arielZarate"
        component={Link}
        target="blank"
      >
        create by Ariel Zarate
      </RouterLink>
      {/*  {new Date().getFullYear()} */} 2023
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [1, 2],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>

              <List>
                {footer.description.map((item, index) => (
                  <ListItem disablePadding key={index}>
                    {/* aca hacemos una verificacion del item.path si tiene frame agrega el iframe sino normal */}
                    {item.path && item.path.frame ? (
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <iframe
                          title="Google Maps"
                          src={item.path.frame}
                          width="120%"
                          height="100"
                          style={{ borderRadius: "10px" }}
                          allowFullScreen=""
                          loading="lazy"
                        />
                        <RouterLink
                          to={item.path.location}
                          component={Link}
                          target="blank"
                        >
                          <ListItemButton
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "200%", // Ajusta el ancho según tus necesidades
                            }}
                          >
                            <ListItemIcon sx={{ marginRight: -3 }}>
                              {item.icon && item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                          </ListItemButton>
                        </RouterLink>
                      </Box>
                    ) : (
                      <RouterLink to={item.path} component={Link}>
                        <ListItemButton sx={{ padding: "3px" }}>
                          <ListItemIcon>{item.icon && item.icon}</ListItemIcon>
                          <ListItemText primary={item.text} />
                        </ListItemButton>
                      </RouterLink>
                    )}
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </>
  );
}
