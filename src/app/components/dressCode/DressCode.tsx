import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const characters = [
  "Navegantes de recreo queriendo volver a tierra",
  "Hippies cósmicos",
  "Milicias veganas",
  "Gurús solares",
  "Autoridades locales",
  "Escapados de un after de Magaluf",
  "Cazadores de ovnis",
  "Terapeutas alternativos",
  "Hare Krishnas, franciscanos y clarisas",
  "Millonarios organizados con pasajes al nuevo mundo",
  "Adivinos bronceados",
  "Sectarios milenaristas",
  "El padre Ángel",
  "Una batukada",
];

const inspiration = [
  "Eclipses",
  "Cielos nocturnos",
  "Glamour cósmico",
  "Decadencia estival",
  "Lujo mediterráneo",
  "El fin del mundo, pero con buen gusto",
];

const colors = [
  "Negro solar",
  "Blanco roto",
  "Plata",
  "Azul medianoche",
  "Arena",
  "Reflejos metálicos",
];

const yesList = [
  "Looks elegantes con un punto extraño",
  "Sunglasses de noche",
  "Brillos sutiles",
  "Estética 'rich people at the end of civilization'",
  "Detalles astrales, futuristas o discretamente apocalípticos",
];

const noList = [
  "Disfraces completos",
  "Cosplay del fin del mundo",
  "Maquillaje temático exagerado",
  "Máscaras",
];

export default function DressCode() {
  return (
    <Box component="section" id="dress-code" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" component="p">
          Link 3
        </Typography>

        <Typography variant="h3" component="h2" gutterBottom>
          EoW Vibes
        </Typography>

        <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
          Inspiración & Dress Code
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Nadie sabe qué va a ocurrir, pero todo el mundo tiene una teoría.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Algunos creen que comienza una nueva era. Otros creen que todo es una
          exageración. Algunos buscan una explicación científica. Otros una
          explicación espiritual.
        </Typography>

        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Algunos han salido corriendo con lo puesto. Y algunos simplemente han
          decidido vestirse para la ocasión.
        </Typography>

        <Typography variant="h4" component="h3" sx={{ mt: 6, mb: 3 }}>
          Puede que aparezcan...
        </Typography>

        <Grid container spacing={2}>
          {characters.map((character) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={character}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body1" component="p">
                    {character}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ mt: 6, p: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Inspiración visual
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {inspiration.map((item) => (
              <Chip key={item} label={item} />
            ))}
          </Box>
        </Paper>

        <Paper sx={{ mt: 4, p: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Paleta de colores
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {colors.map((color) => (
              <Chip key={color} label={color} variant="outlined" />
            ))}
          </Box>
        </Paper>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                border: "1px solid rgba(0,255,0,0.25)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h3"
                  color="success.main"
                  gutterBottom
                >
                  ✔ La END OF THE WORLD PARTY dice SÍ a:
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                  {yesList.map((item) => (
                    <li key={item}>
                      <Typography variant="body1" component="span">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                border: "1px solid rgba(255,0,0,0.25)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h3"
                  color="error.main"
                  gutterBottom
                >
                  ✘ La END OF THE WORLD PARTY dice NO WAY a:
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                  {noList.map((item) => (
                    <li key={item}>
                      <Typography variant="body1" component="span">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Paper
          sx={{
            mt: 5,
            p: 4,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          }}
        >
          <Typography variant="h5" component="p" sx={{ fontStyle: "italic" }}>
            Y sí, las túnicas de secta están permitidas, siempre que sean
            bonitas y parezcan de Missoni.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}