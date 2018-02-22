import React, { Component } from 'react'

class Subscriptions extends Component {
	constructor(props){
		super(props)

		this.state = {
			email:'',
			error:false,
			success:false
		}
	}

	//Clears success error msgs after timeout
	clearMessages = () => {
		setTimeout(function(){
			this.setState({
				error:'false',
				success:'false'
			})
		}.bind(this),3000)
	}

	//Saves Data to the Database
	saveSubscription = (email) => {
		const URL_EMAIL = 'http://localhost:3004/subcriptions'

		fetch(URL_EMAIL, {
			method:'post',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify({email})
		}).then(res => res.json())
		.then(()=>{
			this.setState({
				email:'',
				success:true
			})
		});
	}


	handleSubmit = (event) => {
		event.preventDefault()
		let email = this.state.email
		let regex = /\S+@\S+\.\S+/

		if(regex.test(email)){
			//Save to DB
			this.saveSubscription(email)
			//this.setState({error:false})
		}else{
			//Error state
			this.setState({error:true})
		}
		this.clearMessages()
	}

	onChangeInput = (event) => {
		this.setState({
			email:event.target.value
		})
	}

	render(){
		return(
			<div className="subscribe_panel">
				<h3>Subscribe to us!</h3>
				<div>
					<form onSubmit={this.handleSubmit}>
						<input 
						type="text"
						placeholder="youremail@email.com"
						value={this.state.email}
						onChange={this.onChangeInput}
						/>
						<div className={this.state.error ? "error show" : "error"}>Check your mail</div>
                        <div className={this.state.success ? "success show" : "success"}>Thank you</div>
					</form>
					<small>
						You will recieve news weekly. We don't want to flood you, we love to keep you informed.<br/>
						All our mails contain a visible link to unsubscribe :) 
					</small>
				</div>
			</div>
		)
	}

}

export default Subscriptions

