import React from 'react'
import {
    Container,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react';

import matteo from '../images/matteo.jpeg';

import SocialIcon from '../Common/SocialIcon';



const Footer = () => {
    return(

        <Segment inverted vertical>
            <Container textAlign='center'>
            <Grid divided inverted stackable>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Servizi' />
                <List link inverted stackable>
                    <List.Item as='a' href='/training'>Allenamento</List.Item>
                    <List.Item as='a' href='/nutrition'>Nutrizione</List.Item>
                    <List.Item as='a' href='/mindset'>Mentalità</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Informazioni' />
                <List link inverted>
                    <List.Item as='a' href='/aboutme'>Chi sono</List.Item>
                    <List.Item as='a' href='#'>Term & Conditions</List.Item>
                    <List.Item as='a' href='#'>Privacy</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Supporto' />
                <List link inverted>
                    <List.Item as='a' href='/contact'>Contatti</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={7}>
                <Image centered size='small' src={matteo} />
                <SocialIcon />
                </Grid.Column>
            </Grid>
            <div class="ui divider"></div>
            <p className = "text-center">
            &copy; Copyright 2020 - Matteo Atti, Personal Trainer and Consultant. All rights reserved. </p>
            </Container>
    </Segment>
    )

}

export default Footer;