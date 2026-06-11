import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const eclipseTimeline = [
  { phase: "Inicio eclipse parcial", time: "19:38" },
  { phase: "Máximo eclipse", time: "20:31" },
  { phase: "Duración de la oscuridad total", time: "1 minuto 36 segundos" },
  { phase: "Fin del eclipse", time: "20:46" },
  { phase: "Puesta de sol", time: "20:48" },
];

export default function Link1() {
  return (
    <Box component="section" id="eclipse-info" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="overline" color="primary">
          Link 1
        </Typography>

        <Typography variant="h3" component="h2" gutterBottom>
          Información sobre el Eclipse Solar de 12 de agosto de 2026
        </Typography>

        <Typography paragraph>
          Nos encontramos ante el acontecimiento astronómico y emocional más
          importante que vivirá nuestro país en todo el siglo XXI.
        </Typography>

        <Typography paragraph>
          Con una combinación irrepetible de factores:
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 4 }}>
          <li>
            <Typography>
              Será el primer eclipse total visible desde la península en más de
              un siglo.
            </Typography>
          </li>
          <li>
            <Typography>
              Cruzará zonas muy pobladas de España, desde Galicia y terminando
              en Baleares.
            </Typography>
          </li>
          <li>
            <Typography>
              Ocurrirá en pleno verano, al atardecer, con una luz
              extremadamente dramática y ópticamente con el sol en su máximo
              tamaño.
            </Typography>
          </li>
          <li>
            <Typography>
              Y llega en una época hiperconectada, donde millones de personas lo
              vivirán simultáneamente como experiencia colectiva… ¡y tú estarás
              ahí!
            </Typography>
          </li>
        </Box>

        <TableContainer component={Paper} sx={{ mb: 6 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Fase</strong>
                </TableCell>
                <TableCell>
                  <strong>Hora</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {eclipseTimeline.map((item) => (
                <TableRow key={item.phase}>
                  <TableCell>{item.phase}</TableCell>
                  <TableCell>{item.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" component="h2" gutterBottom>
          ¿Pero qué creemos que va a pasar realmente ese día en Mhares?
        </Typography>

        <Box sx={{ display: "grid", gap: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                1. La anomalía
              </Typography>

              <Typography paragraph>
                A las 11:13, pocas horas antes del famoso y esperado eclipse
                solar total, únicamente visible sobre Mallorca en el atardecer,
                la NASA, la ESA y varias agencias espaciales comparecen
                conjuntamente.
              </Typography>

              <Typography paragraph>
                El mensaje es breve y sorprendentemente poco tranquilizador.
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  my: 3,
                  borderLeft: "4px solid",
                  borderColor: "primary.main",
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                }}
              >
                <Typography component="blockquote" sx={{ fontStyle: "italic" }}>
                  “Estamos observando un fenómeno astronómico que no coincide
                  con ninguno de nuestros modelos actuales. No disponemos de una
                  explicación satisfactoria. Pero todo indica que la órbita
                  terrestre va a sufrir una fuerte alteración durante el eclipse
                  de hoy. Las consecuencias son desconocidas. Recomendamos a la
                  población permanecer cerca de sus hogares con medios básicos de
                  supervivencia mientras continuamos evaluando la situación.”
                </Typography>
              </Paper>

              <Typography>
                Por primera vez, la ciencia no sabe qué va a ocurrir.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                2. El rumor
              </Typography>

              <Typography paragraph>
                La incredulidad da paso al miedo, y éste a la anarquía. Los
                supermercados se vacían. Las teorías se multiplican. Los
                gobiernos piden calma. El mundo se va a acabar.
              </Typography>

              <Typography paragraph>
                Y en las redes aparece un rumor. Nadie sabe de dónde sale ni si
                tiene algún fundamento científico.
              </Typography>

              <Typography paragraph>
                Pero el rumor se extiende con una velocidad extraordinaria.
              </Typography>

              <Typography>
                Según una combinación de cálculos improvisados, mapas
                compartidos, teorías improbables y una cantidad preocupante de
                memes, el rumor afirma que el Sea Club “MHARES” en la bella Bahía
                de Palma será uno de los primeros lugares donde volverá a verse
                la luz después del eclipse… eso si es que vuelve la luz.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                3. La confluencia
              </Typography>

              <Typography paragraph>
                Así que, ya sea por miedo, por curiosidad, por respeto, por
                oportunismo o por hedonismo, al caer la tarde, personas muy
                distintas comienzan a concentrarse allí, en el resort.
              </Typography>

              <Typography paragraph>
                Buscan verlo con sus propios ojos, quieren ser los primeros, o
                buscan respuestas, quizás señales, supervivencia, una posición
                privilegiada, prioridad en el nuevo mundo o simplemente evasión,
                diversión, compañía y una copa.
              </Typography>

              <Typography paragraph>
                Y mientras el eclipse se aproxima, MHARES se convierte en un
                inesperado punto de encuentro para todas las formas posibles de
                enfrentarse al fin del mundo.
              </Typography>

              <Typography>
                Tú, que tienes motivos de peso, decides también que no puedes
                faltar.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}