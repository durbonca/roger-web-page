import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          email: '',
          nameError: '',
          emailError: ''
        };
      }

      handleNameChange = (event) => {
        this.setState({name: event.target.value});
      }
    
      handleEmailChange = (event) => {
        this.setState({email: event.target.value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { name, email } = this.state
        alert(`Valor de los estados: \n 
                name: ${name} \n 
                email: ${email}`)
      }

    render() {
        return <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input name="name" className="form-control" id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                <button type="submit" className="btn btn-success btn-block">Enviar</button>
               </form>
    }


}



export default Contact