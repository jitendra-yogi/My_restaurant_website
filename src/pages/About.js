import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box 
        sx={{
           my:15, 
           textAlign:"center",
           "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem"
           },
           "& p":{
            textAlign:"justify"
           },
           "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem"
            }
           }
           }}>
          <Typography variant='h4'>
            Welcome To My Restaurant 
          </Typography>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, error possimus! Obcaecati rem error ipsam quibusdam odit commodi omnis reiciendis, sunt dolores. Mollitia corrupti quo praesentium impedit asperiores, incidunt voluptas voluptate harum temporibus, error beatae reiciendis reprehenderit modi maxime eaque quibusdam consequuntur. Quibusdam est nemo dignissimos, doloremque impedit id voluptates eos, pariatur omnis rerum sapiente aut labore. Ipsa, debitis. Aspernatur quidem eum reiciendis, omnis consectetur exercitationem at enim! Consequatur totam, asperiores odio in consectetur omnis deserunt amet? Magni voluptatem obcaecati dolores recusandae quas, accusantium eos hic odio consequatur ipsum a. Quia dignissimos maiores rerum, natus nemo reprehenderit fugit voluptatibus. Hic.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sint quasi soluta optio consequatur excepturi saepe mollitia dolor distinctio, facere commodi inventore iste expedita voluptates tempora suscipit? Debitis laudantium corrupti, pariatur doloribus aliquam ea vero ipsa inventore, ipsam, nam eum error. Explicabo eveniet libero quas dignissimos deleniti accusamus quam possimus maxime atque, cumque alias eligendi praesentium, doloribus architecto tempore dolores assumenda! Vitae sint, amet perspiciatis corporis ipsa rem natus voluptate consectetur perferendis eos inventore dolorem optio, explicabo, consequuntur hic dignissimos cupiditate ullam provident quia officiis impedit cumque? Mollitia esse provident blanditiis, quo eligendi veritatis, enim maxime aspernatur, magni dolores a!</p>

        </Box>
    </Layout>
  )
}

export default About