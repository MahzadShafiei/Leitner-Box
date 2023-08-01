import React from 'react'
import {  
  Grid,  
  Icon,  
  Menu,
  Segment,
  Sidebar,
  Button
} from 'semantic-ui-react'
import List from '../../features/words/WordList'

export default function SideBar() {

  const [visible, setVisible] = React.useState<boolean | undefined>(false)

  return (
    <Grid celled padded style={{ height: '100vh' }}>
      <Grid.Row style={{ height: '100%' }}>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='scale down'
              icon='labeled'
              inverted
              onHide={() => setVisible(false)}

              direction='top'
              horizontal
              visible={visible}
              width='thin'
            >
              <Menu.Item as='a'>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
              <Segment basic>
                <Button animated='vertical' onClick={() => setVisible(true)}>
                  <Button.Content hidden>Menu</Button.Content>
                  <Button.Content visible>
                    <Icon name='bars' />
                  </Button.Content>
                </Button>
                <List />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

