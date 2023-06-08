import React from 'react'
import Layout from '../components/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
        <Box sx={{ my: 10, ml: 10, "& h4" :{ fontWeight: "bold", mb: 2 } }}>
          <Typography variant='h4'>Welcome To My Rsetaurant</Typography>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolorum aspernatur quos veniam distinctio aliquid, nam aut incidunt perferendis dolorem voluptas ex ut nesciunt numquam nihil dignissimos cum enim? Debitis ab tempora aliquam voluptates?</p>
        </Box>
        <Box sx={{m:3, width : "600px", ml: 5, "@media (max-width:600px)" : {width: "300px" } }}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor : "black", color : "white"}} align='center'>Contact details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color : "red", pt: 1}}/>0731-256 143 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <MailIcon sx={{color : "skyblue", pt: 1}}/> help@myrest.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{color : "green", pt: 1}}/> 91112 00000
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact