<Grid className={cx(styles.headers)}>
        <Typography>
          <h3>Situation de la COVID-19 en RDC au 11-09-22</h3>
        </Typography>
        {/* <img src="./static/statistics/analyse.png" alt="Analyse" srcset="" className={styles.analyse} onClick={() => setOpen(true)}/> */}

        <Box sx={{ width: '100%', bgcolor: '#eef7db' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              margin: '20px',
            }}
          >
            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setOpen(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL +
                    './static/statistics/distribution.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Distribution COVID-19 en RDC au cours SE 40 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setGraphic(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL + './static/statistics/courbe.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Courbe épidémique COVID-19 au 09-10-2022 (SE 40 2022)
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setAlert(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL + './static/statistics/source.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Sources de notification des cas au 09-10-2022, SE 40 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setChart(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL + './static/statistics/provinces.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Provinces ayant notifié le plus des cas, SE 40 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setPrincipales(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL +
                    './static/statistics/principales.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Les principales 5 ZS avec plus de cas au cours de la SE 40
                    2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setDistribution(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL +
                    './static/statistics/distribution1.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Distribution âge et sexe des cas au 09-10-2022, SE 40 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setTaux(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL + './static/statistics/taux.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Taux de positivité des tests au 09-0-2022, SE 40 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: 500,
                margin: '20px',
                alignItems: 'center',
                color: 'red',
              }}
              onClick={() => setSituation(true)}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='260'
                  image={
                    process.env.PUBLIC_URL + './static/statistics/situation.png'
                  }
                  alt='Image'
                />
                <CardContent>
                  <Typography>
                    Situation COVID-19 dans les pays de la S/région, SE 40 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textPrimary'>
              Distribution COVID-19 en RDC au cours SE 40 2022
            </Typography>
            <img
              src='./static/statistics/distribution.png'
              alt='Analyse'
              srcset=''
            />
            <Typography variant='h5' color='textPrimary'>
              Diminution du nombre de provinces ayant notifié des nouveaux cas
              au cours de la SE 40 2022
            </Typography>
            <Button variant='contained' onClick={() => setOpen(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>

        <Modal open={graphic} onClose={() => setGraphic(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textSuccess'>
              Courbe épidémique COVID-19 au 09-10-2022 (SE 40 2022)
            </Typography>
            <img src='./static/statistics/courbe.png' alt='Analyse' srcset='' />
            <Typography variant='h4' color='textDanger'>
              Nombre de cas notifiés stable
            </Typography>
            <Button variant='contained' onClick={() => setGraphic(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>

        <Modal open={alert} onClose={() => setAlert(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textSuccess'>
              Sources de notification des cas au 09-10-2022, SE 40 2022
            </Typography>
            <img src='./static/statistics/source.png' alt='Analyse' srcset='' />
            <Typography variant='h4' color='textDanger'>
              <ul>
                <li>Baisse de la proportion des cas issus de la RA</li>
                <li>Pas de cas issue de Covid Voyage</li>
              </ul>
            </Typography>
            <Button variant='contained' onClick={() => setAlert(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>

        <Modal open={chart} onClose={() => setChart(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textSuccess'>
              Provinces ayant notifié le plus des cas, SE 40 2022
            </Typography>
            <img
              src='./static/statistics/provinces.png'
              alt='Analyse'
              srcset=''
            />
            <Typography variant='h4' color='textDanger'>
              Augmentation rapide du nombre de nouveaux cas dans la province
              Lulaba (Quid des actions en cours?).
            </Typography>
            <Button variant='contained' onClick={() => setChart(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>

        <Modal open={principales} onClose={() => setPrincipales(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textPrimary'>
              Les principales 5 ZS avec plus de cas au cours de la SE 40 2022
            </Typography>
            <img
              src='./static/statistics/principales.png'
              alt='Analyse'
              srcset=''
            />
            <Typography variant='h5' color='textPrimary'>
              Les ZS de la province du Lualaba et du haut Lomami ont constitué
              le principal point de notification de nouveaux cas
            </Typography>
            <Button variant='contained' onClick={() => setPrincipales(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>

        <Modal open={distribution} onClose={() => setDistribution(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textSuccess'>
              Distribution âge et sexe des cas au 09-10-2022, SE 40 2022
            </Typography>
            <Box className={styles.images_distr}>
              <img
                src='./static/statistics/distribution1.png'
                alt='Analyse'
                srcset=''
              />
              <img
                src='./static/statistics/distribution2.png'
                alt='Analyse'
                srcset=''
              />
            </Box>
            <Typography variant='h4' color='textDanger'>
              Les hommes de 50 ans et plus (≥50Ans) sont les plus atteint
              généralement
            </Typography>
            <Button variant='contained' onClick={() => setDistribution(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>

        <Modal open={taux} onClose={() => setTaux(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textSuccess'>
              Taux de positivité des tests au 09-0-2022, SE 40 2022
            </Typography>
            <img src='./static/statistics/taux.png' alt='Analyse' srcset='' />
            <Typography variant='h5' color='textDanger'>
              <ul>
                <li>
                  Augmentation consécutive au cours des deux dernières semaines
                  malgré la baisse du nombre des testés,
                </li>
                <li>
                  Toutefois, ce taux de positivité restant stable en dessous de
                  1%
                </li>
              </ul>
            </Typography>
            <Button variant='contained' onClick={() => setTaux(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>

        <Modal open={situation} onClose={() => setSituation(false)}>
          <Box position='absolute' className={styles.modalpos}>
            <Typography variant='overline' color='textSuccess'>
              Situation COVID-19 dans les pays de la S/région, SE 40 2022
            </Typography>
            <img
              src='./static/statistics/situation.png'
              alt='Analyse'
              srcset=''
            />
            <Typography variant='h4' color='textDanger'>
              Augmentation du nombre de nouveaux cas en Afrique du Sud sur deux
              semaines consecutive avec Omicron BA.5 comme variant dominant.
            </Typography>
            <Button variant='contained' onClick={() => setSituation(false)}>
              <CloseIcon />
              Fermer
            </Button>
          </Box>
        </Modal>
      </Grid>