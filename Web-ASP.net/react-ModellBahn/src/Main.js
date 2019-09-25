import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Categories from './Categories'
import Construction from './Construction'
import Classes from './Classes'
import Controls from './Controls'
import Couplings from './Couplings'
import Countries from './Countries'
import Currencies from './Currencies'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/categories' component={Categories}/>
			<Route path='/classes' component={Classes}/>
			<Route path='/construction' component={Construction}/>
			<Route path='/controls' component={Controls}/>
			<Route path='/couplings' component={Couplings}/>
			<Route path='/countries' component={Countries}/>
			<Route path='/currencies' component={Currencies}/>
			//<Route path='/decodertypes' component={DecoderTypes}/>
			//<Route path='/drive' component={Drive}/>
			//<Route path='/eras' component={Eras}/>		
			//<Route path='/gauges' component={Gauges}/>
			//<Route path='/lights' component={Lights}/>
			//<Route path='/manufactures' component={Manufactures}/>
		</Switch>
	</main>
)

export default Main