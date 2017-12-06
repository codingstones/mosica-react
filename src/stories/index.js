import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Icon } from 'semantic-ui-react'
import { fakeGigDetail } from '../components/__mocks__/fake-gig-detail'
import { fakeGigsByDay, FIRST_GIG } from '../components/__mocks__/fake-gigs-by-day'
import BuyTickets from '../components/BuyTickets'
import { GigCard } from '../components/GigCard'
import { GigDetail } from '../components/GigDetail'
import { GigRow } from '../components/GigRow'
import Header from '../components/Header'
import ICS from '../components/ICS'
import Likes from '../components/Likes'
import { LoadSpinner } from '../components/LoadSpinner'
import Location from '../components/Location'
import Place from '../components/Place'
import Price from '../components/Price'
import Thumbnail from '../components/Thumbnail'


storiesOf('Header', module).add('default', () => <Header/>)
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('With big size', () => <Button size='big' onClick={action('clicked')}>Big Button</Button>)
  .add('With small size', () => <Button size='small' onClick={action('clicked')}>Small Button</Button>)
  .add('With blue color', () => <Button color='blue' onClick={action('clicked')}>Blue Button</Button>)
  .add('With red color', () => <Button color='red' onClick={action('clicked')}>Red Button</Button>)
  .add('With circular shape', () => <Button circular onClick={action('clicked')}>Circular Button</Button>)
  .add('With loading indicator', () => <Button loading onClick={action('clicked')}>Loading Button</Button>)
  .add('With twitter icon', () => <Button onClick={action('clicked')}><Icon name='twitter' />Button With Icon</Button>)

storiesOf('BuyTickets', module).add('default', () => <BuyTickets url="any url"/>)
storiesOf('Likes', module).add('default', () => <Likes/>)
storiesOf('ICS', module).add('default', () => <ICS slug='concierto-musethica-6495'/>)
storiesOf('Location', module).add('default',
  () => <Location coordinates='41.63826618278706,-0.901371893397595'/>)
storiesOf('Price', module).add('default', () => <Price price={255}/>)
storiesOf('Place', module).add('default', () => <Place place='My place'/>)
const reactNormalImageUrl = 'https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png'
const reactWideImageUrl = 'https://cdn-images-1.medium.com/max/2000/1*bUtWGJQv8QFXTkLF_WBINA.png'

storiesOf('Thumbnail', module).add('with normal image', () => <Thumbnail url={reactNormalImageUrl}/>)
storiesOf('Thumbnail', module).add('with wide image', () => <Thumbnail url={reactWideImageUrl}/>)

storiesOf('LoadSpinner', module).add('when isLoading', () => <LoadSpinner isLoading={true}/>)
storiesOf('LoadSpinner', module).add('when is not Loading', () => <LoadSpinner isLoading={false}/>)
const clickRow = (id) => action('clicked ' + id)
storiesOf('GigRow', module).add('default',
  () => <GigRow gig={FIRST_GIG} onClick={clickRow}/>)

// storiesOf('GigCard', module).add('default',
//   () => <GigCard gig={fakeGigDetail}/>)

