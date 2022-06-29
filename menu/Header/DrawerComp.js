import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import styles from './Header.module.css'

const pages = [
  'Accueil',
  'ST',
  'Commissions',
  'Publications',
  'Forum',
  'Media',
  'Contact',
]

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(true)
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText><Link to={`/${page}`} className={styles.menu_style}>
                    {page}{' '}
                  </Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp
